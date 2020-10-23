using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TaxiService.CarCatalog.DbContexts;
using TaxiService.CarCatalog.Models;

namespace TaxiService.CarCatalog.Repositories
{
    public class CarRepository : ICarRepository
    {
        private readonly CarCatalogDbContext _carCatalogDbContext;

        public CarRepository(CarCatalogDbContext carCatalogDbContext)
        {
            _carCatalogDbContext = carCatalogDbContext;
        }
        public async Task<Car> GetCarById(int carId)
        {
            return await _carCatalogDbContext.Cars.Where(c => c.CarId == carId).FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<Car>> GetCars(int categoryId)
        {
            return await _carCatalogDbContext.Cars.Where(c => c.Category.CategoryId == categoryId).ToListAsync();
        }
    }
}
