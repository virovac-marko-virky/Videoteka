using System.ComponentModel.DataAnnotations;

namespace Videoteka.Models
{
    public abstract class Entitet
    {
        [Key]
        public int? Sifra {  get; set; }
    }
}
