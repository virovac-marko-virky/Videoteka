


using Microsoft.AspNetCore.Mvc;
using Videoteka.Models;

namespace Videoteka.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class FilmController : ControllerBase
    {
        
        
        private readonly Data.VideotekaContext _context;

        
        
        public FilmController(Data.VideotekaContext context)
        {
            _context = context;
        }


        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_context.Filmovi);
        }

        [HttpGet]
        [Route("{sifra:int}")]
        public IActionResult GetBySifra(int sifra)
        {
            return Ok(_context.Filmovi.Find(sifra));
        }

        private IActionResult Ok(Film? film)
        {
            throw new NotImplementedException();
        }

        [HttpPost]
        public IActionResult Post(Film film)
        {
            _context.Filmovi.Add(film);
            _context.SaveChanges();
            return StatusCode(StatusCodes.Status201Created, film);
        }

        private IActionResult StatusCode(int status201Created, Film film)
        {
            throw new NotImplementedException();
        }

        [HttpPut]
        [Route("{sifra:int}")]
        [Produces("application/json")]
        public IActionResult Put(int sifra, Film film)
        {
            var filmBaza = _context.Filmovi.Find(sifra);

            
            filmBaza.Naziv = film.Naziv;
            filmBaza.Zanr = film.Zanr;
            filmBaza.GodinaIzdanja = film.GodinaIzdanja;
            filmBaza.VrijemeTrajanja = film.VrijemeTrajanja;
            

            _context.Filmovi.Update(filmBaza);
            _context.SaveChanges();

            return Ok(new { poruka = "Uspješno promjenjeno" });

        }

    

        [HttpDelete]
        [Route("{sifra:int}")]
        [Produces("application/json")]
        public IActionResult Delete(int sifra)
        {
            var filmBaza = _context.Filmovi.Find(sifra);

            _context.Filmovi.Remove(filmBaza);
            _context.SaveChanges();

            return Ok(new { poruka = "Uspješno obrisano" });

        }


    }

}