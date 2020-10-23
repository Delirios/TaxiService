using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CodeHollow.FeedReader;
using TaxiService.News.Models;

namespace TaxiService.News.Services
{
    public class FeedReaderService : IFeedReaderService
    {
        public async Task ReadNews(string url, Article article)
        {
            var feed = await FeedReader.ReadAsync(url);
        }
    }
}
