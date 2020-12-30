using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TaxiService.CarCatalog.DbContexts;
using TaxiService.CarCatalog.DTO;
using TaxiService.CarCatalog.Models;

namespace TaxiService.CarCatalog.Repositories
{
    public class CategoryRepository : ICategoryRepository
    {
        private readonly CarCatalogDbContext _carCatalogDbContext;

        public CategoryRepository(CarCatalogDbContext carCatalogDbContext)
        {
            _carCatalogDbContext = carCatalogDbContext;
        }
        public async Task AddCategory (CategoryDTO carDTO)
        {
            var car = new Category
            {
                CategoryId = carDTO.CategoryId,
                Name = carDTO.Name,
                Price = carDTO.Price,
                ImageName = carDTO.ImageName
            };
            _carCatalogDbContext.Categories.Add(car);
            await _carCatalogDbContext.SaveChangesAsync();
        }

        public async Task<IEnumerable<Category>> GetAllCategories()
        {
            return await _carCatalogDbContext.Categories.ToListAsync();
        }

        public async Task<Category> GetCategoryById(int categoryId)
        {
            return await _carCatalogDbContext.Categories.Where(c => c.CategoryId == categoryId).FirstOrDefaultAsync();
        }
    }
}
