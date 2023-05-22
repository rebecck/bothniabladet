using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    [Table("Keywords")]
    public class Keyword
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<Image> Images { get; set; }
    }
}