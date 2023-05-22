using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class CreateImageDto
    {
        [Required]
        public string ImgName { get; set; }
        public string FilePath { get; set; }
        [Required]
        public string Description { get; set; }
        public DateTime CreatedDateTime { get; set; } = DateTime.Now;
        public int Longitude { get; set; }
        public int Latitude { get; set; }
        public bool IsExtern { get; set; }
        public int PublicationLimit { get; set; }
        public int TimesPublicated { get; set; }
        public int Width { get; set; }
        public int Height { get; set; }
        public int FileSizeKB { get; set; }
        public double Resolution { get; set; }
        public string Camera { get; set; }
    }
}