using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaxiService.Identity.Models;

namespace TaxiService.Identity.Repositories
{
    public class UserRepository : IUserRepository
    {
        public List<User> testUsers;
        public UserRepository()
        {
            testUsers = new List<User>();
            testUsers.Add(new User() { UserId = new Guid(), Username = "Test1", Password = "Test1" });
            testUsers.Add(new User() { UserId = new Guid(), Username = "Test2", Password = "Test2" });
        }

        public User GetUser(string username)
        {
            try
            {
                return testUsers.First(user => user.Username.Equals(username));
            }
            catch
            {
                return null;
            }
        }
    }
}
