import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AxiosPokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);

    const onClickHandler = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => {
                setPokemon(response.data.results)
            })
    }

    return (
        <div>
            <button className='btn btn-outline-light mb-4' onClick={() => onClickHandler()} >Fetch Pokemon!</button>
            {pokemon.map((pokemon, index) => {
                return (<div key={index} className='text-danger border border-dark'>{pokemon.name}</div>)
            })}
        </div>
    );
}
export default AxiosPokemon;