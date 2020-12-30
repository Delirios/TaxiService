using Microsoft.AspNetCore.Http;
using TaxiService.CarCatalog.Models;

namespace TaxiService.CarCatalog.DTO
{
    public class CarDTO
    {
        public int CarId { get; set; }
        public string Model { get; set; }

        public int CategoryId { get; set; }

        public string ImageName { get; set; }

        public IFormFile Image { get; set; }
    }
}
