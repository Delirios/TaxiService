using System.Collections.Generic;
using System.Threading.Tasks;
using TaxiService.CarCatalog.Models;
using System;
using TaxiService.CarCatalog.DTO;

namespace TaxiService.CarCatalog.Repositories
{
    public interface ICarRepository
    {
        Task<IEnumerable<Car>> GetCars();
        Task<Car> GetCarById(int carId);
        Task AddCar(CarDTO carDTO);
    }
}
