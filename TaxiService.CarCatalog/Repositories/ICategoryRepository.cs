using System.Collections.Generic;
using System.Threading.Tasks;
using TaxiService.CarCatalog.Models;

namespace TaxiService.CarCatalog.Repositories
{
    public interface ICategoryRepository
    {
        Task<IEnumerable<Category>> GetAllCategories();
        Task<Category> GetCategoryById(int categoryId);
    }
}
