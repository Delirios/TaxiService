using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TaxiService.Order.Commands;
using TaxiService.Order.Models;
using TaxiService.Order.Queries;
using TaxiService.Order.Repositories;

namespace TaxiService.Order.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderRepository _orderRepository;
        private readonly IMediator _mediator;
        public OrderController(IOrderRepository orderRepository, IMediator mediator)
        {
            _orderRepository = orderRepository;
            _mediator = mediator;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllOrders()
        {
            var query = new GetAllOrdersQuery();
            var result = await _mediator.Send(query);
            return Ok(result);              
        }

        [HttpGet("{orderId}")]
        public async Task<IActionResult> GetOrderById(int orderId)
        {
            var query = new GetOrderByIdQuery(orderId);
            var result = await _mediator.Send(query);
            return Ok(result);
        }

        [HttpPost("")]
        public async Task<IActionResult> CreateOrder([FromBody] CreateOrderCommand command)
        {
            var result = await _mediator.Send(command);
            return CreatedAtAction("GetOrderById", new { orderId = result.OrderId}, result);
           
        }
    }
}
