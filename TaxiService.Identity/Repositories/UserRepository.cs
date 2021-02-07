using System.Collections.Generic;
using System.Linq;
using TaxiService.Identity.Models;

namespace TaxiService.Identity.Repositories
{
    public class UserRepository : IUserRepository
    {
        public List<User> testUsers;
        public UserRepository()
        {
        }

        public User GetUser(string userId)
        {
            try
            {
                return testUsers.First(user => user.UserId.Equals(userId));
            }
            catch
            {
                return null;
            }
        }
    }
}
