using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using TaxiService.Identity.Data;
using TaxiService.Identity.Helpers;
using TaxiService.Identity.Models;
using TaxiService.Identity.Services;

namespace TaxiService.Identity.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly UserDbContext _userDbContext;
        private readonly ITokenBuilder _tokenBuilder;
        private readonly IUserService _userService;

        public LoginController(UserDbContext userDbContext, ITokenBuilder tokenBuilder, IUserService userService)
        {
            _userDbContext = userDbContext;
            _tokenBuilder = tokenBuilder;
            _userService = userService;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] User user)
        {
            var userResult = _userService.Authenticate(user.Username, user.Password);

            if (userResult == null)
                return BadRequest("Username or password is incorrect");

            var token = await _tokenBuilder.BuildToken(userResult);

            return Ok(new
            {
                UserId = userResult.UserId,
                Username = userResult.Username,
                FirstName = userResult.FirstName,
                LastName = userResult.LastName,
                Role = userResult.Role,
                Token = token
            });
        }

        [HttpPost("register")]
        public IActionResult Register([FromBody] User user)
        { 
            try
            {
                _userService.Create(user, user.Password);
                return Ok();
            }
            catch (AppException ex)
            {
                return BadRequest(ex.Message);
            }
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
