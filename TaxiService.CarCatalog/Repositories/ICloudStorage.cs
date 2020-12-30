using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaxiService.CarCatalog.DTO;

namespace TaxiService.CarCatalog.Repositories
{
    public interface ICloudStorage
    {
        Task<string> UploadFileAsync(IFormFile imageFile, string fileNameForStorage);
        string FormFileName(string title, string fileName);
        Task<CarDTO> UploadFile(CarDTO car);

    }
}
