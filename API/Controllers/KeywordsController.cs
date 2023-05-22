using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class KeywordsController
    {
        private readonly ImageBankContext _context;
        
        public KeywordsController(ImageBankContext context)
        {
            _context = context;
        }

        // 2 endpoints Get and Get by Id
        [HttpGet]
        public async Task<ActionResult<List<Keyword>>> GetKeywords()
        {
            return await _context.Keywords.ToListAsync();
            
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Keyword>> GetKeyword(int id)
        {
            return await _context.Keywords.FindAsync(id);
        }
    }
}