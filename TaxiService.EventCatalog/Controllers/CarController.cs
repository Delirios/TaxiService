using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TaxiService.CarCatalog.Models;
using TaxiService.CarCatalog.Repositories;

namespace TaxiService.CarCatalog.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class CarController : ControllerBase
    {
        private readonly ICarRepository _carRepository;

        public CarController(ICarRepository carRepository)
        {
            _carRepository = carRepository;
        }

        public async Task<Car> GetCarById(int carId)
        {
            return await _carRepository.GetCarById(carId);
        }
    }
}
