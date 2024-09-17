using Microsoft.EntityFrameworkCore;
using Videoteka.Models;

namespace Videoteka.Data
{
    public class VideotekaContext:DbContext
    {
        public VideotekaContext(DbContextOptions<VideotekaContext> opcije) : base(opcije) 
        {

        }


        public DbSet<Film> Filmovi { get; set; }

    }
}
