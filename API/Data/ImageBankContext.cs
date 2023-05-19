using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class ImageBankContext : DbContext
    {
        // Constructor 
        public ImageBankContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Image> Images { get; set; }
    }
}