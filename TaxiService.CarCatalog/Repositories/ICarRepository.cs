using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaxiService.CarCatalog.Models;

namespace TaxiService.CarCatalog.Repositories
{
    public interface ICarRepository
    {
        Task<IEnumerable<Car>> GetCars(int categoryId);
        Task<Car> GetCarById(int carId);
    }
}
