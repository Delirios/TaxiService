using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaxiService.Identity.Models;

namespace TaxiService.Identity.Repositories
{
    public interface IUserRepository
    {
        public User GetUser(string userId);
    }
}
