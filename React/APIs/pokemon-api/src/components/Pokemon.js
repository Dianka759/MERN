import React, { useState, useEffect } from 'react';

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);

    const onClickHandler = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
    };

    return (
        <div>
            <button className='btn btn-outline-light mb-4' onClick={() => onClickHandler()} >Fetch Pokemon!</button>
            {pokemon.map((pokemon, index) => {
                return (<div key={index} className='text-danger border border-dark'>{pokemon.name}</div>)
            })}
        </div>
    );
}
export default Pokemon;