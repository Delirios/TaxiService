using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaxiService.Order.Models;

namespace TaxiService.Order.Commands
{
    public class CreateOrderCommand : IRequest<Reservation>
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string From { get; set; }

        public string To { get; set; }
        //public bool IsPerformed { get; set; }
        //public bool IsClosed { get; set;}
    }
}
