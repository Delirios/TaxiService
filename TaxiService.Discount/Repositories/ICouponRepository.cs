using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaxiService.Discount.Models;

namespace TaxiService.Discount.Repositories
{
    public interface ICouponRepository
    {
        Task<Coupon> GetCouponByCode(string code);
        Task<Coupon> GetCouponById(int couponId);
        Task UseCoupon(int couponId);
    }
}
