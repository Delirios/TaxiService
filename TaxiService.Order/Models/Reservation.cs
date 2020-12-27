using System;
using System.ComponentModel.DataAnnotations;

namespace TaxiService.Order.Models
{
    public class Reservation
    {
        [Key]
        public int OrderId {get;set;}

        public string UserId { get; set; }
        public string OriginAddresses { get;set;}
        public string DestinationAddresses { get;set;}
        public double Price { get; set; }
        public double Distance { get; set; }
        //public bool IsPerformed { get; set; }
        //public bool IsClosed { get; set; }
        
    }
}
