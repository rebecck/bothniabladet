using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ImagesController : ControllerBase
    {
        private readonly ImageBankContext _context;
        
        public ImagesController(ImageBankContext context)
        {
            _context = context;  
        }

        [HttpGet]
        public async Task<ActionResult<List<Image>>> GetProducts()
        {
            var images = await _context.Images.ToListAsync();

            // Ok = 200, sedan tar vi med listan med images. Testa med swagger 
            return Ok(images);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Image>> GetImage(int id) 
        {
            return await _context.Images.FindAsync(id);
        }
    }
}