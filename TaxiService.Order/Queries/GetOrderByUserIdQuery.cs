using MediatR;
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
