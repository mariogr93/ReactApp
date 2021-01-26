import React from 'react'
import {useParams} from 'react-router-dom'

import PlaceList from '../components/PlaceList'

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Monumento a los Héroes de la Restauración',
        description:'Monumento a los Héroes de la Restauración de santiago republica dominicana',
        creator:'u1',
        imageUrl:'https://storage.googleapis.com/mmc-elcaribe-bucket/uploads/2018/08/c8ee51ec-monumento-a-los-heroes-de-la-restauracion-er-3.jpg',
        address:'Daniel Espinal, Santiago De Los Caballeros 51000',
        location:{
            lat:19.4509085,
            lng:-70.6947248
        }
    },
    {
        id: 'p2',
        title: 'Anfiteatro de Puerto Plata',
        description:'Anfiteatro de Puerto Plata republica dominicana',
        creator:'u1',
        imageUrl:'https://adompretur.com/wp-content/uploads/2018/11/REALIZARAN-EL-SABADO-SANTO-CONCIERTO-MUSICAL-EN-ANFITEATRO-DE-LA-PUNTILLA-EN-PUERTO-PLATA-II.jpg',
        address:'Puerto Plata 57000',
        location:{
            lat:19.8016996,
            lng:-70.6956367
        }
    },{
        id: 'p3',
        title: 'Puente Samana',
        description:'Puente de samana',
        creator:'u2',
        imageUrl:'https://www.diariolibre.com/binrepository/879x586/0c0/0d0/none/10904/RTWL/saman-abierta-al-mundo_13289057_20200224000944.jpg',
        address:'Avenida La Marina, Samaná 32000',
        location:{
            lat:19.1965385,
            lng:-69.3348815
        }
    }
]
const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter((place) => {
        return place.creator === userId
    })
    return (<PlaceList items={loadedPlaces}/>)
}

export default UserPlaces