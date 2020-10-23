using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using TaxiService.News.Models;

namespace TaxiService.News.Repositories
{
    public interface INewsRepository
    {
        Task<IEnumerable<Article>> GetNewsAsync();
    }
}
