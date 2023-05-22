using API.Data;
using API.DTOs;
using API.Entities;
using API.Extensions;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class ImagesController : BaseApiController
    {
        private readonly ImageBankContext _context;
        private readonly IMapper _mapper;
        
        public ImagesController(ImageBankContext context, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;  
        }

        [HttpGet]
        public async Task<ActionResult<List<Image>>> GetImages(string searchTerm)
        {
            //var images = await _context.Images.ToListAsync();
            // Ok = 200, sedan tar vi med listan med images. Testa med swagger 
            //return Ok(images);


            var query = _context.Images
                .Search(searchTerm)
                .AsQueryable();

            //return await query.ToListAsync();
            return await query.ToListAsync();

        }

        [HttpGet("{id}", Name ="GetImage")]
        public async Task<ActionResult<Image>> GetImage(int id) 
        {
            return await _context.Images.FindAsync(id);
        }

        [HttpPost]
        public async Task<ActionResult<Image>> AddImage(CreateImageDto imageDto) 
        {

            var image = _mapper.Map<Image>(imageDto); 

            _context.Images.Add(image);

            var result = await _context.SaveChangesAsync() > 0;

            if (result) return CreatedAtRoute("GetImage", new {Id = image.Id}, image);

            return BadRequest(new ProblemDetails {Title = "Problem uploading image"});
        }

    }
}

