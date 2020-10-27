using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaxiService.Order.Models;

namespace TaxiService.Order.Queries
{
    public class GetAllOrdersQuery : IRequest<IEnumerable<Reservation>>
    {
    }
}
