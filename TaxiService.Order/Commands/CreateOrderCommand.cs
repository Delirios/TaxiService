using MediatR;
using System;
using TaxiService.Order.Models;

namespace TaxiService.Order.Commands
{
    public class CreateOrderCommand : IRequest<Reservation>
    {
        public string UserId { get; set; }
        public string OriginAddresses { get; set; }
        public string DestinationAddresses { get; set; }
        public double Price { get; set; }
        public double Distance { get; set; }
        public DateTime DateTime { get; set; }
        //public bool IsPerformed { get; set; }
        //public bool IsClosed { get; set;}
    }
}
