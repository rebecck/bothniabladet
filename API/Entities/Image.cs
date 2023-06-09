using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    [Table("Images")]
    public class Image
    {
        public int Id { get; set; }
        public string ImgName { get; set; }
        public string FilePath { get; set; }  
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

        //FK
        public List<Version> Versions { get; set; } = new List<Version>();
        public List<Keyword> Keywords { get; set; }
        public Category Category { get; set; }
        
        //public double Price { get; set; }  
        //public string Type { get; set; }
        //public int NumberOfVersions { get; set; }
    }
}