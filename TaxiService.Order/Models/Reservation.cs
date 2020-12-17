using System;
using System.ComponentModel.DataAnnotations;

namespace TaxiService.Order.Models
{
    public class Reservation
    {
        [Key]
        public int OrderId {get;set;}

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string From {get;set;}
        public string To {get;set;}
        //public bool IsPerformed { get; set; }
        //public bool IsClosed { get; set; }
        
    }
}
