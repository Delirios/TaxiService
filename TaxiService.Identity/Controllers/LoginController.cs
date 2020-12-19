using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaxiService.Identity.Models;
using TaxiService.Identity.Repositories;

namespace TaxiService.Identity.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        [HttpPost]
        public IActionResult Login(User user)
        {
            User u = new UserRepository().GetUser(user.UserId);
            if (u == null)
            {
                return NotFound("The user was not found.");
            }

            bool credentials = u.Password.Equals(user.Password);

            if (!credentials)
            {
                return Forbid("The username/password combination was wrong.");
            }
            return Ok(TokenManager.GenerateToken(user.UserId));
        }
        [HttpGet]
        public IActionResult Validate(string token, string userId)
        {
            bool exists = new UserRepository().GetUser(userId) != null;
            if (!exists)
                return NotFound("The user was not found.");
            string tokenUserId = TokenManager.ValidateToken(token);
            if (userId.Equals(tokenUserId))
                return Ok();
            return BadRequest();
        }
    }
}
