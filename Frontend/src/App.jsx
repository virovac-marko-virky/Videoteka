import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import './App.css'
import NavBarEdunova from './components/NavBarEdunova';
import { Route, Routes } from 'react-router-dom';
import { RouteNames } from './constants';
import Pocetna from './pages/Pocetna';
import FilmoviPregled from './pages/filmovi/FilmoviPregled';
import FilmoviDodaj from './pages/filmovi/FilmoviDodaj';
import FilmoviPromjena from './pages/filmovi/FilmoviPromjena';


function App() {

  return (
    <>
    <Container>
      <NavBarEdunova />
      <Routes>
        <Route path={RouteNames.HOME} element={<Pocetna/>} />

        <Route path={RouteNames.FILM_PREGLED} element={<FilmoviPregled/>}/>
        <Route path={RouteNames.FILM_NOVI} element={<FilmoviDodaj/>}/>
        <Route path={RouteNames.FILM_PROMJENA} element={<FilmoviPromjena/>}/>

      </Routes>
      <hr/>
      &copy; Edunova
    </Container>
    
    </>
  )
}

export default App
