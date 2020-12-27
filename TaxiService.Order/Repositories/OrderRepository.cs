using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TaxiService.Order.DbContexts;
using TaxiService.Order.Models;

namespace TaxiService.Order.Repositories
{
    public class OrderRepository : IOrderRepository
    {
        private readonly OrderDbContext _orderDbContext;

        public OrderRepository(OrderDbContext orderDbContext)
        {
            _orderDbContext = orderDbContext;
        }


        public async Task<IEnumerable<Reservation>> GetAllOrders()
        {
            return await _orderDbContext.Reservations.ToListAsync();
        }

        public async Task<Reservation> GetOrderById(int orderId)
        {
            return await _orderDbContext.Reservations.Where(r => r.OrderId == orderId).FirstOrDefaultAsync();
        }

        public Task<IEnumerable<Reservation>> GetOrdersByUsername(string userName)
        {
            throw new NotImplementedException();
        }

        public async Task<Reservation> CreateOrder(Reservation order)
        {
            var reservation = new Reservation
            {
                UserId = order.UserId,
                OriginAddresses = order.OriginAddresses,
                DestinationAddresses = order.DestinationAddresses,
                Price = order.Price,
                Distance = order.Distance
            };
            _orderDbContext.Reservations.Add(reservation);
            await _orderDbContext.SaveChangesAsync();
            return await Task.FromResult(reservation);
        }
    }
}
