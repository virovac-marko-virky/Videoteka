import { HttpService } from "./HttpService";



async function get(){
    return await HttpService.get('/Film')
    .then((odgovor)=>{
        console.log(odgovor.data)
        console.table(odgovor.data)
        return {greska: false, poruka: odgovor.data}
    })
    .catch((e)=>{
        console.log(e)
        return {greska: true, poruka: 'Problem kod dohvaćanja Filmova'}   
    })
}

async function brisanje(sifra){
    return await HttpService.delete('/Film/' + sifra)
    .then(()=>{
        return {greska: false, poruka: 'Obrisano'}
    })
    .catch(()=>{
        return {greska: true, poruka: 'Problem kod brisanja Filma'}   
    })
}

async function dodaj(Film){
    return await HttpService.post('/Film',Film)
    .then(()=>{
        return {greska: false, poruka: 'Dodano'}
    })
    .catch(()=>{
        return {greska: true, poruka: 'Problem kod dodavanja Filma'}   
    })
}

async function promjena(sifra,Film){
    return await HttpService.put('/Film/' + sifra,Film)
    .then(()=>{
        return {greska: false, poruka: 'Dodano'}
    })
    .catch(()=>{
        return {greska: true, poruka: 'Problem kod dodavanja Filma'}   
    })
}

async function getBySifra(sifra){
    return await HttpService.get('/Film/'+sifra)
    .then((odgovor)=>{
        return {greska: false, poruka: odgovor.data}
    })
    .catch((e)=>{
        return {greska: true, poruka: 'Problem kod dohvaćanja Filma s šifrom '+sifra}   
    })
}


export default {
    get,
    brisanje,
    dodaj,
    getBySifra,
    promjena
}
