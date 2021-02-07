using MediatR;
using System.Collections.Generic;
using TaxiService.Order.Models;

namespace TaxiService.Order.Queries
{
    public class GetAllOrdersQuery : IRequest<IEnumerable<Reservation>>
    {
    }
}
