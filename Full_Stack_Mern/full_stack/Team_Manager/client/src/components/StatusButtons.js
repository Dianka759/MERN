import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StatusButtons = (props) => {
    const { playerId, gameId } = props;
    const [player, setPlayer] = useState("");


    useEffect(() => {
        axios.get(`http://localhost:8000/api/player/${playerId}`)
            .then(res => { setPlayer(res.data); })
    }, [])


    const onClickHandler = (statusNumber) => {
        const updatedStatus = {
            ...player,
            status: {
                ...player.status,
                [`game${gameId}`]: statusNumber
            }
        }
        axios.put(`http://localhost:8000/api/players/${playerId}/update`, updatedStatus)
            .then(res => { setPlayer(updatedStatus); })
            .catch(err => { console.log("err") })
    }

    return (
        <div>
            <button className='btn btn-outline-light' style={{ backgroundColor: player && player.status[`game${gameId}`] === 1 ? "green" : "" }}
                onClick={(e) => onClickHandler(1)}>Playing</button>
            <button className='btn btn-outline-light' style={{ backgroundColor: player && player.status[`game${gameId}`] === 2 ? "red" : "" }}
                onClick={(e) => onClickHandler(2)}>Not Playing</button>
            <button className='btn btn-outline-light' style={{ backgroundColor: player && player.status[`game${gameId}`] === 0 ? "yellow" : "", 
                                                                color: player && player.status[`game${gameId}`] === 0 ? "black" : "" }}
                onClick={(e) => onClickHandler(0)}>Undecided</button>
        </div>
    )
}

export default StatusButtons;