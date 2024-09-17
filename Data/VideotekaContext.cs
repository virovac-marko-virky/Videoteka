using Microsoft.EntityFrameworkCore;

namespace Videoteka.Data
{
    public class VideotekaContext:DbContext
    {
        public VideotekaContext(DbContextOptions<VideotekaContext> opcije) : base(opcije) 
        {

        } 
    }
}
