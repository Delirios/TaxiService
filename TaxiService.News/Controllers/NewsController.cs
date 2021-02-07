using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TaxiService.News.Models;
using TaxiService.News.Repositories;

namespace TaxiService.News.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class NewsController : ControllerBase
    {
        private readonly INewsRepository _newsRepository;

        public NewsController(INewsRepository newsRepository)
        {
            _newsRepository = newsRepository;
        }

        [HttpGet]
        public async Task<IEnumerable<Article>> GetNews()
        {
            return await _newsRepository.GetNewsAsync();
        }
    }
}
