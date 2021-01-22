import React from 'react'
import UsersList from '../components/UsersList'

const Users = () => {

    const USERS = [
        {
            id: 'u1',
            name: 'mario',
            image: 'https://img4.wikia.nocookie.net/__cb20090817174626/inciclopedia/images/4/49/Kenny_McCormick.png',
            places: '3'
        },
        {
            id: 'u2',
            name: 'steph',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Kyle_Broflovski.svg/1200px-Kyle_Broflovski.svg.png',
            places: '5'
        },
        {
            id: 'u3',
            name: 'ivan',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Eric_Cartman.svg/1200px-Eric_Cartman.svg.png',
            places: '1'
        },
        {
            id: 'u4',
            name: 'jose',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Stan_Marsh.svg/1200px-Stan_Marsh.svg.png',
            places: '6'
        }
    ]
    return <UsersList items={USERS} />

}

export default Users