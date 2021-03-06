﻿using System.Collections.Generic;
using System.Threading.Tasks;
using CodeHollow.FeedReader;

namespace TaxiService.News.Services
{
    public interface IFeedReaderService
    {
        Task<IEnumerable<FeedItem>> ReadNewsAsync(string url);
    }
}
