using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TaxiService.CarCatalog.Models
{
    public class Category
    {
        public int CategoryId { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public List<Car> Cars { get; set; }
    }
}
