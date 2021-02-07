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
