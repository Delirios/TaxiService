using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaxiService.Identity.Data;
using TaxiService.Identity.Helpers;
using TaxiService.Identity.Models;

namespace TaxiService.Identity.Services
{
    public class UserService : IUserService
    {
        private readonly UserDbContext _userDbContext;

        public UserService(UserDbContext userDbContext)
        {
            _userDbContext = userDbContext;
        }
        public User Authenticate(string username, string password)
        {
            if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
                return null;

            var user = _userDbContext.Users.SingleOrDefault(x => x.Username == username);

            // check if username exists
            if (user == null)
                return null;

            // check if password is correct
            if (!VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
                return null;

            // authentication successful
            return user;
        }

        public User Create(User user, string password)
        {
            // validation
            if (string.IsNullOrWhiteSpace(password))
                throw new AppException("Password is required");

            if (_userDbContext.Users.Any(x => x.Username == user.Username))
                throw new AppException("Username '" + user.Username + "' is already taken");

            byte[] passwordHash, passwordSalt;
            CreatePasswordHash(password, out passwordHash, out passwordSalt);

            user.UserId = Guid.NewGuid().ToString();
            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;
            user.Role = "Admin";

            _userDbContext.Users.Add(user);
            _userDbContext.SaveChanges();

            return user;
        }

        private static void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            if (password == null) 
                throw new ArgumentNullException("password");
            if (string.IsNullOrWhiteSpace(password)) 
                throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");

            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        private static bool VerifyPasswordHash(string password, byte[] storedHash, byte[] storedSalt)
        {
            if (password == null) 
                throw new ArgumentNullException("password");
            if (string.IsNullOrWhiteSpace(password)) 
                throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");
            if (storedHash.Length != 64) 
                throw new ArgumentException("Invalid length of password hash (64 bytes expected).", "passwordHash");
            if (storedSalt.Length != 128) 
                throw new ArgumentException("Invalid length of password salt (128 bytes expected).", "passwordHash");

            using (var hmac = new System.Security.Cryptography.HMACSHA512(storedSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < computedHash.Length; i++)
                {
                    if (computedHash[i] != storedHash[i]) 
                        return false;
                }
            }

            return true;
        }
    }
}
