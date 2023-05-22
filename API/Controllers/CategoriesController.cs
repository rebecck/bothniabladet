using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class CategoriesController : BaseApiController
    {
        private readonly ImageBankContext _context;
        public CategoriesController(ImageBankContext context)
        {
            _context = context;
        }

        // 2 endpoints Get and Get by Id
        [HttpGet]
        public async Task<ActionResult<List<Category>>> GetCategories(string orderBy)
        {
            //var categories = await _context.Categories.ToListAsync();
            //return Ok(categories);
            var query =  _context.Categories.AsQueryable();

            query = orderBy switch
            {
                "id" => query.OrderBy(i => i.Id),
                _ => query.OrderBy(n => n.Name)
            };

            return await query.ToListAsync();
            
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Category>> GetCategory(int id)
        {
            return await _context.Categories.FindAsync(id);
        }
        
    }
}