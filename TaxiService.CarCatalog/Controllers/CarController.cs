using System.Collections.Generic;
using System.Threading.Tasks;
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
        [HttpGet("{carId}")]
        public async Task<Car> GetCarById(int carId)
        {
            return await _carRepository.GetCarById(carId);
        }
        [HttpGet]
        public async Task<IEnumerable<Car>> GetCar([FromQuery] int categoryId)
        {
            return await _carRepository.GetCars(categoryId);
        }


        [HttpPost]
        public async Task<IActionResult> AddCar([FromBody] Car car)
        {
            await _carRepository.AddCar(car);
            return Ok();
        }
    }
}
