using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TaxiService.Identity.Services
{
    public interface ITokenBuilder
    {
        Task<string> BuildToken(string UserId);
    }
}
