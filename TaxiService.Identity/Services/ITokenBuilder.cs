﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaxiService.Identity.Models;

namespace TaxiService.Identity.Services
{
    public interface ITokenBuilder
    {
        Task<string> BuildToken(User user);
    }
}
