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
    public class GetOrderByIdHandler : IRequestHandler<GetOrderByIdQuery, Reservation>
    {
        private readonly IOrderRepository _orderRepository;
        public GetOrderByIdHandler(IOrderRepository orderRepository)
        {
            _orderRepository = orderRepository;
        }
        public async Task<Reservation> Handle(GetOrderByIdQuery request, CancellationToken cancellationToken)
        {
            return await _orderRepository.GetOrderById(request.OrderId);
        }
    }
}
