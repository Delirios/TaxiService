using System.Threading.Tasks;
using TaxiService.Identity.Models;

namespace TaxiService.Identity.Services
{
    public interface ITokenBuilder
    {
        Task<string> BuildToken(User user);
    }
}
