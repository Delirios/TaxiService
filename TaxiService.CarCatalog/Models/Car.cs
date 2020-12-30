using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TaxiService.CarCatalog.Models
{
    public class Car
    {
        public int CarId { get; set; }
        public string Model { get; set; }

        public Category Category { get; set; }
        public string ImageName { get; set; }
    }
}
