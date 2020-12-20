using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaxiService.Identity.Models;

namespace TaxiService.Identity.Data
{
    public class UserDbContext : DbContext
    {
        public UserDbContext(DbContextOptions<UserDbContext> options) : base(options)
        {

        }

        public DbSet<User> Users { get; set; }
        public DbSet<UserRole> UserRoles { get; set; }

        protected override void OnModelCreating (ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            

            builder.Entity<UserRole>().HasData(
                new UserRole { RoleId = Guid.NewGuid().ToString(), Role = "Admin" },
                new UserRole { RoleId = Guid.NewGuid().ToString(), Role = "User" });

            builder.Entity<User>()
                .HasData(
                new User { UserId = Guid.NewGuid().ToString(), Username = "Test1", Password = "Pass1" },
                 new User { UserId = Guid.NewGuid().ToString(), Username = "Test2", Password = "Pass2" });
        }
    }
}
