using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Extensions
{
    public static class ImageExtensions
    {

        public static IQueryable<Image> Search(this IQueryable<Image> query, string searchTerm)
        {
            if (string.IsNullOrEmpty(searchTerm)) return query;

            var lowerCaseSearchTerm = searchTerm.Trim().ToLower();

            return query
                .Include(i => i.Category)
                .Include(i => i.Keywords)
                    .ThenInclude(k => k.Images)
                .Where(i => 
                    i.ImgName.ToLower().Contains(lowerCaseSearchTerm) || 
                    i.Keywords.Any(k => k.Name.ToLower().Contains(lowerCaseSearchTerm)) ||
                    i.Category.Name.ToLower().Contains(lowerCaseSearchTerm))
                .AsQueryable();
        } 
        
    }
}





 