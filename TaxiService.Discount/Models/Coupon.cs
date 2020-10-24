using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TaxiService.Discount.Models
{
    public class Coupon
    {
        public int CouponId { get; set; }
        public string Code { get; set; }
        public int Amount { get; set; }
        public bool AlreadyUsed { get; set; }
    }
}
