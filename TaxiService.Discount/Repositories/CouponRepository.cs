using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TaxiService.Discount.DbContexts;
using TaxiService.Discount.Models;

namespace TaxiService.Discount.Repositories
{
    public class CouponRepository : ICouponRepository
    {
        private readonly DiscountDbContext _discountDbContext;

        public CouponRepository(DiscountDbContext discountDbContext)
        {
            _discountDbContext = discountDbContext;
        }

        public async Task<Coupon> GetCouponByCode(string code)
        {
            return await _discountDbContext.Coupons.Where(c => c.Code == code).FirstOrDefaultAsync();
        }

        public async Task<Coupon> GetCouponById(int couponId)
        {
            return await _discountDbContext.Coupons.Where(c => c.CouponId == couponId).FirstOrDefaultAsync();
        }

        public async Task UseCoupon(int CouponId)
        {
            var couponToUpdate = await _discountDbContext.Coupons.Where(c => c.CouponId == CouponId).FirstOrDefaultAsync();
            if (couponToUpdate == null)
                throw new Exception();
            couponToUpdate.AlreadyUsed = true;
            await _discountDbContext.SaveChangesAsync();
        }
    }
}
