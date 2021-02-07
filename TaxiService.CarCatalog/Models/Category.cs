using System.Collections.Generic;

namespace TaxiService.CarCatalog.Models
{
    public class Category
    {
        public int CategoryId { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public string ImageName { get; set; }
        public List<Car> Cars { get; set; }
    }
}
