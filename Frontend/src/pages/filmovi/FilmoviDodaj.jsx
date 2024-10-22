import FilmService from "../../services/FilmService"
import { Button, Row, Col, Form } from "react-bootstrap";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";
import { RouteNames } from "../../constants";




export default function FilmoviDodaj(){

    const navigate = useNavigate()

    async function dodaj(Film) {
        //console.log(Film)
        //console.log(JSON.stringify(Film))
        const odgovor = await FilmService.dodaj(Film)
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
        dodaj({
            naziv: podaci.get('naziv'),
            zanr: podaci.get('zanr'),     
            godinaIzdanja: parseInt(podaci.get('godinaIzdanja')),
            vrijemeTrajanja: parseInt(podaci.get('vrijemeTrajanja'))
        })
    }

    return(
        <>
        Dodavanje Filma
        <Form onSubmit={obradiSubmit}>

            <Form.Group controlId="naziv">
                <Form.Label>Naziv</Form.Label>
                <Form.Control type="text" name="naziv" required />
            </Form.Group>

            <Form.Group controlId="zanr">
                <Form.Label>zanr</Form.Label>
                <Form.Control type="text" name="zanr" required />
            </Form.Group>


            <Form.Group controlId="godinaIzdanja">
                <Form.Label>godinaIzdanja</Form.Label>
                <Form.Control type="number" name="godinaIzdanja" required />
            </Form.Group>


            <Form.Group controlId="vrijemeTrajanja">
                <Form.Label>vrijemeTrajanja</Form.Label>
                <Form.Control type="number" name="vrijemeTrajanja" required />
            </Form.Group>



          

        <Row className="akcije">
            <Col xs={6} sm={12} md={3} lg={6} xl={6} xxl={6}>
            <Link to={RouteNames.FILM_PREGLED} 
            className="btn btn-danger siroko">Odustani</Link>
            </Col>
            <Col xs={6} sm={12} md={9} lg={6} xl={6} xxl={6}>
            <Button variant="success"
            type="submit"
            className="siroko">Dodaj Film</Button>
            </Col>
        </Row>
        </Form>
        </>
    )
}