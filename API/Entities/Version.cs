using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    [Table("Versions")]
    public class Version
    {
        public int Id { get; set; } 
        public string FilePath { get; set; }
        public string EditBy { get; set; }
        public DateTime EditDate { get; set; }
        public string Comment { get; set; }

        //Fk
        public int ImageId { get; set; }
        public Image Image { get; set; }
    }
}