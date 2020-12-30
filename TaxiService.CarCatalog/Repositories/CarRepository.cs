using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TaxiService.CarCatalog.DbContexts;
using TaxiService.CarCatalog.DTO;
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

        public async Task AddCar(CarDTO carDTO)
        {
            Category category = _carCatalogDbContext.Categories.Where(c => c.CategoryId == carDTO.CategoryId).FirstOrDefault();
            var car = new Car
            {
                CarId = carDTO.CarId,
                Model = carDTO.Model,
                Category = category,
                ImageName = carDTO.ImageName
            };
            _carCatalogDbContext.Cars.Add(car);
            await _carCatalogDbContext.SaveChangesAsync();
        }

        public async Task<Car> GetCarById(int carId)
        {
            return await _carCatalogDbContext.Cars.Where(c => c.CarId == carId).FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<Car>> GetCars()
        {
            return await _carCatalogDbContext.Cars.ToListAsync();
        }
    }
}
