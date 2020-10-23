using System.Collections.Generic;
using System.Threading.Tasks;
using CodeHollow.FeedReader;
using TaxiService.News.Models;

namespace TaxiService.News.Services
{
    public interface IFeedReaderService
    {
        Task<IEnumerable<FeedItem>> ReadNewsAsync(string url);
    }
}
