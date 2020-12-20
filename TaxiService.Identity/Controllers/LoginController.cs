using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaxiService.Identity.Data;
using TaxiService.Identity.Models;
using TaxiService.Identity.Repositories;
using TaxiService.Identity.Services;

namespace TaxiService.Identity.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly UserDbContext _userDbContext;
        private readonly ITokenBuilder _tokenBuilder;
        public LoginController(UserDbContext userDbContext, ITokenBuilder tokenBuilder)
        {
            _userDbContext = userDbContext;
            _tokenBuilder = tokenBuilder;               
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] User user)
        {
            var dbUser = await _userDbContext
                .Users
                .SingleOrDefaultAsync(u => u.Username==user.Username);

            if (dbUser == null)
            {
                return NotFound("User not found.");
            }

            var isValid = dbUser.Password == user.Password;

            if (!isValid)
            {
                return BadRequest("Could not authenticate user.");
            }

            var token = await _tokenBuilder.BuildToken(user.Username);

            return Ok(token);
        }

        [HttpGet("verify")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> VerifyToken()
        {
            var userName = User
                .Claims
                .SingleOrDefault();

            if (userName == null)
            {
                return Unauthorized();
            }

            var userExists = await _userDbContext
                .Users
                .AnyAsync(u => u.Username == userName.Value);

            if (!userExists)
            {
                return Unauthorized();
            }

            return NoContent();
        }
    }
}
