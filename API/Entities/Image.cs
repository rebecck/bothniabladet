namespace API.Entities
{
    public class Image
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public bool IsExtern { get; set; }
        public int Width { get; set; }
        public int Height { get; set; }
        public int PublicationLimit { get; set; }
        public int TimesPublicated { get; set; }
        public double Price { get; set; }  
        public string FilePath { get; set; }   
        public string Type { get; set; }
        //public int NumberOfVersions { get; set; }
    }
}