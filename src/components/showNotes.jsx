import React, { useState } from 'react'
import {collection, getDocs} from "firebase/firestore"
import {db} from '../lib/firebase'
export default function showNotes() {
    const [movies,setMovies]=useState([])

    function getMovies(){
        const movieCollection=collection(db,'Notes')
        getDocs(movieCollection).then(response =>{
            console.log(response)
        }).catch(error => console.log(error.message))
    }
return (
    <div>showNotes</div>
)
}
