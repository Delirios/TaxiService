using MediatR;
using System;
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
                UserId = request.UserId,
                OriginAddresses = request.OriginAddresses,
                DestinationAddresses = request.DestinationAddresses,
                Price = request.Price,
                Distance = request.Distance,
                DateTime = DateTime.Now
            });

            return order;
        }
    }
}
