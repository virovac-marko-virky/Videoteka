import FilmService from "../../services/FilmService"
import { Button, Row, Col, Form } from "react-bootstrap";
import moment from "moment";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RouteNames } from "../../constants";
import { useEffect, useState } from "react";


export default function FilmoviPromjena(){

    const [film,setFilm] = useState({})
    const navigate = useNavigate()
    const routeParams = useParams()

    async function dohvatiFilm(){
        const odgovor = await FilmService.getBySifra(routeParams.sifra);
        if(odgovor.greska){
            alert(odgovor.poruka)
            return
        }
        //debugger; // ovo radi u Chrome inspect (ali i ostali preglednici)
        let s = odgovor.poruka
        setFilm(s)
    } 

    useEffect(()=>{
        dohvatiFilm();
     },[])

     async function promjena(Film) {
        //console.log(Film)
        //console.log(JSON.stringify(Film))
        const odgovor = await FilmService.promjena(routeParams.sifra,Film)
        if(odgovor.greska){
            alert(odgovor.poruka)
            return;
        }
        navigate(RouteNames.FILM_PREGLED)
    }

    function obradiSubmit(e){ // e je event
        e.preventDefault(); // nemoj odraditi zahtjev na server
        let podaci = new FormData(e.target)
        //console.log(podaci.get('naziv'))
        promjena({
            naziv: podaci.get('naziv'),
            zanr: podaci.get('zanr'),     
            godinaIzdanja: parseInt(podaci.get('godinaIzdanja')),
            vrijemeTrajanja: parseInt(podaci.get('vrijemeTrajanja'))
        })
    }

    return(
        <>
        Promjena Filma
        <Form onSubmit={obradiSubmit}>

            <Form.Group controlId="naziv">
                <Form.Label>Naziv</Form.Label>
                <Form.Control type="text" name="naziv" required
                defaultValue={film.naziv} />
            </Form.Group>

            <Form.Group controlId="zanr">
                <Form.Label>zanr</Form.Label>
                <Form.Control type="text" name="zanr" required defaultValue={film.zanr}/>
            </Form.Group>


            <Form.Group controlId="godinaIzdanja">
                <Form.Label>godinaIzdanja</Form.Label>
                <Form.Control type="number" name="godinaIzdanja" required defaultValue={film.godinaIzdanja}/>
            </Form.Group>


            <Form.Group controlId="vrijemeTrajanja">
                <Form.Label>vrijemeTrajanja</Form.Label>
                <Form.Control type="number" name="vrijemeTrajanja" required  defaultValue={film.vrijemeTrajanja}/>
            </Form.Group>

          
        <Row className="akcije">
            <Col xs={6} sm={12} md={3} lg={6} xl={6} xxl={6}>
            <Link to={RouteNames.FILM_PREGLED} 
            className="btn btn-danger siroko">Odustani</Link>
            </Col>
            <Col xs={6} sm={12} md={9} lg={6} xl={6} xxl={6}>
            <Button variant="success"
            type="submit"
            className="siroko">Promjeni Film</Button>
            </Col>
        </Row>
        </Form>
        </>
    )
}