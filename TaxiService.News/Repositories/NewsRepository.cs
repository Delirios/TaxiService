using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using TaxiService.News.Models;
using TaxiService.News.Services;

namespace TaxiService.News.Repositories
{
    public class NewsRepository : INewsRepository
    {
        private readonly string url = "https://mmr.net.ua/cat/autoworld/feed";
        private readonly IFeedReaderService _feedReaderService;

        public NewsRepository(IFeedReaderService feedReaderService)
        {
            _feedReaderService = feedReaderService;
        }
        public async Task<IEnumerable<Article>> GetNewsAsync()
        {
            var newsItems = await _feedReaderService.ReadNewsAsync(url);
            List<Article> articles = new List<Article>();
            
            foreach (var item in newsItems)
            {
                Article article = new Article();
                article.ArticleId = Guid.NewGuid();
                article.Title = item.Title;
                article.Link = item.Link;
                articles.Add(article);
            }

            return articles;
        }
    }
}
