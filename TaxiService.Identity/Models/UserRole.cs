using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TaxiService.Identity.Models
{
    public class UserRole
    {
        [Key]
        public string RoleId { get; set; }
        public string Role { get; set; }
    }
}
