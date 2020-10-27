using System;
using System.Threading.Tasks;
using TaxiService.Order.Models;
using System.Collections;
using System.Collections.Generic;

namespace TaxiService.Order.Repositories
{
    public interface IOrderRepository
    {
        Task<IEnumerable<Reservation>> GetAllOrders();

        Task<Reservation> GetOrderById(int orderId);
        Task<IEnumerable<Reservation>> GetOrdersByUsername(string userName);
        Task<Reservation> CreateOrder(Reservation reservation);
    }
}
