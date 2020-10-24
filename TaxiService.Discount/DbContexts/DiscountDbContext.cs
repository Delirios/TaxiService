using Microsoft.EntityFrameworkCore;
using TaxiService.Discount.Models;

namespace TaxiService.Discount.DbContexts
{
    public class DiscountDbContext : DbContext
    {
        public DiscountDbContext(DbContextOptions<DiscountDbContext> options) : base(options)
        {
        }

        public DbSet<Coupon> Coupons { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);


            modelBuilder.Entity<Coupon>().HasData(new Coupon
            {
                CouponId = 1,
                Code = "First",
                Amount = 100,
                AlreadyUsed = false
            });

            modelBuilder.Entity<Coupon>().HasData(new Coupon
            {
                CouponId = 2,
                Code = "Second",
                Amount = 200,
                AlreadyUsed = false
            });

            modelBuilder.Entity<Coupon>().HasData(new Coupon
            {
                CouponId = 3,
                Code = "Third",
                Amount = 300,
                AlreadyUsed = false
            });

            modelBuilder.Entity<Coupon>().HasData(new Coupon
            {
                CouponId = 4,
                Code = "Fourth",
                Amount = 400,
                AlreadyUsed = false
            });

            modelBuilder.Entity<Coupon>().HasData(new Coupon
            {
                CouponId = 5,
                Code = "Fifth",
                Amount = 500,
                AlreadyUsed = false
            });
        }
    }
}
