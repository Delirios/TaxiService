using TaxiService.Identity.Models;

namespace TaxiService.Identity.Repositories
{
    public interface IUserRepository
    {
        public User GetUser(string userId);

    }
}
