using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaxiService.Order.Models;

namespace TaxiService.Order.Queries
{
    public class GetOrderByUserIdQuery : IRequest<Reservation>
    {
        public string UserId { get; }

        public GetOrderByUserIdQuery(string userId)
        {
            UserId = userId;
        }
    }
}
