using System.Collections.Generic;
using System.Threading.Tasks;
using CodeHollow.FeedReader;

namespace TaxiService.News.Services
{
    public class FeedReaderService : IFeedReaderService
    {
        public async Task<IEnumerable<FeedItem>> ReadNewsAsync(string url)
        {
            var feed = await FeedReader.ReadAsync(url);
            return feed.Items;
        }
    }
}
