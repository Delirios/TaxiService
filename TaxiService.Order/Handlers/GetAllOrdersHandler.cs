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
    public class GetAllOrdersHandler : IRequestHandler<GetAllOrdersQuery, IEnumerable<Reservation>>
    {
        private readonly IOrderRepository _orderRepository;
        public GetAllOrdersHandler(IOrderRepository orderRepository)
        {
            _orderRepository = orderRepository;
        }


        public async Task<IEnumerable<Reservation>> Handle(GetAllOrdersQuery request, CancellationToken cancellationToken)
        {
            return await _orderRepository.GetAllOrders();
        }
    }
}
