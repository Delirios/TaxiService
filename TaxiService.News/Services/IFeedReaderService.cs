using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaxiService.News.Models;

namespace TaxiService.News.Services
{
    public interface IFeedReaderService
    {
        Task ReadNews(string url, Article article);
    }
}
