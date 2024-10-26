import slika from '../assets/slika.png'

export default function Pocetna(){
    return(
        <>
        <div className='sredina'>
            <img src={slika} alt="Asterix" className='slika'/>
        </div>
        </>
    )
}