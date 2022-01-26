import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import StatusButtons from '../components/StatusButtons';

const PlayerStatus = (props) => {
    const [players, setPlayers] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/players/list")
            .then((res) => {
                setPlayers(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    // const onClickHandler = (player, id) => {
    //     axios.put(`http://localhost:8000/api/players/${id}/update`, player)
    //         .then((res) => {
    //             console.log(res)
    //             setPlayers(res.data)
    //         })
    //         .catch(((err) => {
    //             console.log(err)
    //         }))
    //     // (input.completed)
    //     //         ? input.completed = false
    //     //         : input.completed = true
    // };

    return (
        <div className='mx-auto w-75 mt-2 p-3 border border-warning text-center'>
            <h1>Player Status - Game {id}</h1>
            <Link to={"/status/game/1"}> GAME 1 </Link> |
            <Link to={"/status/game/2"}> GAME 2 </Link> |
            <Link to={"/status/game/3"}> GAME 3 </Link> |
            <table className="table table-dark table-hover mt-2">
                <thead>
                    <tr>
                        <th scope="col">Team Name</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                {players.sort((a, b) => a.name.localeCompare(b.name)).map((player, idx) => {
                    return (
                        <>
                            <tbody>
                                <tr>
                                    <th scope="row"><p key={idx}> {player.name} </p></th>
                                    <th scope="row">
                                    <StatusButtons playerId={player._id} gameId={id}/>
                                    </th>
                                </tr>
                            </tbody>
                        </>
                    )
                })}
            </table>
        </div>
    )
}

export default PlayerStatus; 