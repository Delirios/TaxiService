using Microsoft.EntityFrameworkCore;
using TaxiService.Identity.Models;

namespace TaxiService.Identity.Data
{
    public class UserDbContext : DbContext
    {
        public UserDbContext(DbContextOptions<UserDbContext> options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating (ModelBuilder builder)
        {
            base.OnModelCreating(builder);        
        }
    }
}
