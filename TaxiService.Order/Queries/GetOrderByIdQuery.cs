using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaxiService.Order.Models;

namespace TaxiService.Order.Queries
{
    public class GetOrderByIdQuery : IRequest<Reservation>
    {
        public int OrderId { get; }

        public GetOrderByIdQuery(int orderId)
        {
            OrderId = orderId;
        }
    }
}
