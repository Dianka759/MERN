import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import '../App.css';

const View = (props) => {
    const [players, setPlayers] = useState([]);

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

    const deletePlayer = (playerId, name) => {
        confirmAlert({
            title: 'Confirm to submit',
            message: ('Are you sure you want to delete'),
            buttons: [
                {
                    label: 'Yasss',
                    onClick: () => {
                        axios.delete('http://localhost:8000/api/players/' + playerId + '/delete')
                        .then(res => { setPlayers(players.filter(player => player._id !== playerId)) })}
                },
                {
                    label: 'Nope',
                }
            ],
        });
    }

    return (
        <div className='mx-auto w-50 mt-2 p-2 text-center'>
            <div className='p-3 mb-4'>
                <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Team Name</th>
                            <th scope="col">Preferred Position</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    {players.sort((a, b) => a.name.localeCompare(b.name)).map((player, idx) => {
                        return (
                            <>
                                <tbody>
                                    <tr>
                                        <th scope="row"><p key={idx}> {player.name} </p></th>
                                        <th scope="row"><p key={idx}> {player.position} </p></th>
                                        <th scope="row"><button p key={idx} className='mx-2 btn btn-outline-warning' onClick={(e) => { deletePlayer(player._id, player.name) }}> Delete</button>
                                        </th>
                                    </tr>
                                </tbody>
                            </>
                        )
                    })}
                </table>
            </div>
        </div>
    );
}

export default View;