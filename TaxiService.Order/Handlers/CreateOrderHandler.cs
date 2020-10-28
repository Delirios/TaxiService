using MediatR;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using TaxiService.Order.Commands;
using TaxiService.Order.Models;
using TaxiService.Order.Repositories;

namespace TaxiService.Order.Handlers
{
    public class CreateOrderHandler : IRequestHandler<CreateOrderCommand, Reservation>
    {
        private readonly IOrderRepository _orderRepository;

        public CreateOrderHandler(IOrderRepository orderRepository)
        {
            _orderRepository = orderRepository;
        }

        public async Task<Reservation> Handle(CreateOrderCommand request, CancellationToken cancellationToken)
        {

            var order = await _orderRepository.CreateOrder(new Reservation
            {
                From = request.From,
                To = request.To,
                IsPerformed = false,
                IsClosed = false       
            });
            return order;
        }
    }
}
