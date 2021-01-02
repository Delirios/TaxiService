using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using TaxiService.Order.Models;
using TaxiService.Order.Queries;
using TaxiService.Order.Repositories;

namespace TaxiService.Order.Handlers
{
    public class GetOrderByUserIdHandler : IRequestHandler<GetOrderByUserIdQuery, Reservation>
    {
        private readonly IOrderRepository _orderRepository;
        public GetOrderByUserIdHandler(IOrderRepository orderRepository)
        {
            _orderRepository = orderRepository;
        }
        public async Task<Reservation> Handle(GetOrderByUserIdQuery request, CancellationToken cancellationToken)
        {
            return await _orderRepository.GetOrderByUserId(request.UserId);
        }
    }
}
