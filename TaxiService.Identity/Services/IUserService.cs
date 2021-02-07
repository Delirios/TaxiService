using TaxiService.Identity.Models;

namespace TaxiService.Identity.Services
{
    public interface IUserService
    {
        User Authenticate(string username, string password);
        User Create(User user, string password);
    }
}
