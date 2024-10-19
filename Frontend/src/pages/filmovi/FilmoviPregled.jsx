import { useEffect, useState } from "react"
import FilmService from "../../services/FilmService"
import { Button, Table } from "react-bootstrap";
import { NumericFormat } from "react-number-format";
import moment from "moment";
import { GrValidate } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { RouteNames } from "../../constants";


export default function FilmoviPregled(){

    const navigate = useNavigate()

    const[filmovi, setFilmovi] = useState();

    async function dohvatiFilmove(){
        const odgovor = await FilmService.get();
        if(odgovor.greska){
            alert(odgovor.poruka)
            return
        }
        //debugger; // ovo radi u Chrome inspect (ali i ostali preglednici)
        setFilmovi(odgovor.poruka)
    } 

    // Ovaj hook (kuka) se izvodi dolaskom na stranicu filmovi
    useEffect(()=>{
       dohvatiFilmove();
    },[])


    function obrisi(sifra){
        if(!confirm('Sigurno obrisati')){
            return;
        }
        brisanjeFilma(sifra)
    }

    async function brisanjeFilma(sifra) {
        
        const odgovor = await FilmService.brisanje(sifra);
        if(odgovor.greska){
            alert(odgovor.poruka)
            return
        }
        dohvatiFilmove();
    }


    return(
        <>
        <Link to={RouteNames.FILM_NOVI}
        className="btn btn-success siroko">Dodaj novi Film</Link>
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>Naziv</th>
                    <th>Žanr</th>
                    <th>godinaIzdanja</th>
                    <th>vrijemeTrajanja</th>
                    <th>Akcija</th>
                </tr>
            </thead>
            <tbody>
                {filmovi && filmovi.map((Film,index)=>(
                    <tr key={index}>
                        <td>
                            {Film.naziv}
                        </td>
                        <td>
                            {Film.zanr}
                        </td>
                        <td>
                            {Film.godinaIzdanja}
                        </td>
                        <td>
                            {Film.vrijemeTrajanja}
                        </td>
                        <td>
                            <Button
                            variant="danger"
                            onClick={()=>obrisi(Film.sifra)}
                            >
                                Obriši
                            </Button>
                            &nbsp;&nbsp;&nbsp;
                            <Button
                            onClick={()=>navigate(`/filmovi/${Film.sifra}`)}
                            >
                                Promjena
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
        </>
    )
}