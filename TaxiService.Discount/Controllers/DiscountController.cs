using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TaxiService.Discount.Repositories;

namespace TaxiService.Discount.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class DiscountController : ControllerBase
    {
        private readonly ICouponRepository _couponRepository;

        public DiscountController(ICouponRepository couponRepository)
        {
            _couponRepository = couponRepository;
        }

        [HttpGet("code/{code}")]
        public async Task<IActionResult> GetDiscountForCode(string code)
        {
            var coupon = await _couponRepository.GetCouponByCode(code);
            if (coupon == null)
                return NotFound();
            return Ok(coupon);
        }
        [HttpGet("{couponId}")]
        public async Task<IActionResult> GetDiscountForCode(int couponId)
        {
            var coupon = await _couponRepository.GetCouponById(couponId);
            if (coupon == null)
                return NotFound();
            return Ok(coupon);
        }

        [HttpPut("use/{couponId}")]
        public async Task<IActionResult> UseCoupon(int couponId)
        {
            await _couponRepository.UseCoupon(couponId);
            return Ok();
        }
    }
}
