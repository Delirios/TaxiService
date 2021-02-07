using System;

namespace TaxiService.News.Models
{
    public class Article
    {
        public Guid ArticleId { get; set; }
        public string Title { get; set; }
        public string Link { get; set; }
        public string ImageName { get; set; }
    }
}
