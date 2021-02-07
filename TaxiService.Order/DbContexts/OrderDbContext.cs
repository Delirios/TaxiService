using Microsoft.EntityFrameworkCore;
using TaxiService.Order.Models;

namespace TaxiService.Order.DbContexts
{
    public class OrderDbContext : DbContext
    {
        public OrderDbContext(DbContextOptions<OrderDbContext> options) : base(options)
        {
        }
        public DbSet<Reservation> Reservations { get; set; }
    }
}