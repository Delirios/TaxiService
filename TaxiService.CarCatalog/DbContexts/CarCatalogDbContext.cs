using Microsoft.EntityFrameworkCore;
using TaxiService.CarCatalog.Models;

namespace TaxiService.CarCatalog.DbContexts
{
    public class CarCatalogDbContext : DbContext
    {
        public CarCatalogDbContext(DbContextOptions<CarCatalogDbContext> options) : base(options)
        {
        }

        public DbSet<Car> Cars { get; set; }
        public DbSet<Category> Categories { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
