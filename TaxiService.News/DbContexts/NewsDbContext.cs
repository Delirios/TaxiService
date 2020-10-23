using Microsoft.EntityFrameworkCore;

namespace TaxiService.CarCatalog.DbContexts
{
    public class CarCatalogDbContext : DbContext
    {
        public CarCatalogDbContext(DbContextOptions<CarCatalogDbContext> options) : base(options)
        {
        }
    }
}