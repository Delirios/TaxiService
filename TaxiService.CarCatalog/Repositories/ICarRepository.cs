using System.Collections.Generic;
using System.Threading.Tasks;
using TaxiService.CarCatalog.Models;
using System;
namespace TaxiService.CarCatalog.Repositories
{
    public interface ICarRepository
    {
        Task<IEnumerable<Car>> GetCars(int categoryId);
        Task<Car> GetCarById(int carId);
        Task AddCar(Car car);
    }
}
