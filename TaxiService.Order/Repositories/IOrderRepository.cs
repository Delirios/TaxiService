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

        Task<Reservation> GetOrderByUserId(string userId);
        Task<IEnumerable<Reservation>> GetOrdersByUsername(string userName);
        Task<Reservation> CreateOrder(Reservation reservation);
    }
}
