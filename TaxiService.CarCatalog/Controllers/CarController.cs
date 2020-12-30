using System;
using System.Collections.Generic;
using System.IO;
using System.Net.Http.Headers;
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




            //var filesPath = Directory.GetCurrentDirectory();
            //if (car.Image.Length > 0)
            //{
            //    var fileName = Path.GetFileName(car.Image.FileName);
            //    var filePath = Path.Combine(filesPath, fileName);

            //    using (var stream = System.IO.File.Create(filePath))
            //    {
            //        await car.Image.CopyToAsync(stream);
            //    }
            //}
        }
    }
}
