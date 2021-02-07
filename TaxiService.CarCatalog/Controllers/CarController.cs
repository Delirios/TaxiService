using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TaxiService.CarCatalog.DTO;
using TaxiService.CarCatalog.Models;
using TaxiService.CarCatalog.Repositories;

namespace TaxiService.CarCatalog.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class CarController : ControllerBase
    {
        private readonly ICarRepository _carRepository;
        private readonly ICloudStorage _cloudStorage;

        public CarController(ICarRepository carRepository, ICloudStorage cloudStorage)
        {
            _carRepository = carRepository;
            _cloudStorage = cloudStorage;
        }
        [HttpGet("{carId}")]
        public async Task<Car> GetCarById(int carId)
        {
            return await _carRepository.GetCarById(carId);
        }
        [HttpGet]
        public async Task<IEnumerable<Car>> GetCar()
        {
            return await _carRepository.GetCars();
        }


        [HttpPost]
        [Route("Add")]
        public async Task<CarDTO> AddCar([FromForm] CarDTO carDTO)
        {

            if(carDTO.Image != null)
            {
               carDTO = await _cloudStorage.UploadFile(carDTO);
            }
            await _carRepository.AddCar(carDTO);

            return carDTO;
        }
    }
}
