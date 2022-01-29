import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import DeleteButton from '../components/DeleteButton';

const View = (props) => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/players/list")
            .then((res) => {
                // let temp = [...players];
                // temp.splice(index,1);
                // console.log(temp);
                // setPlayers(temp);
                setPlayers(res.data);
            })
            
            .catch((err) => {
                console.log(err);
            });
    }, [players]);

    const onClickHandler = (player, id, num) => {
        const updateCounter = {
            ...player,
            counter: num + 1
        }
        axios.put(`http://localhost:8000/api/players/${id}/update`, updateCounter)
            .then(res => { console.log(res) })
            .catch(err => console.log(err))
    }

    const likeButton = (player, id, like) => {
        const updateCounter = {
            ...player,
            like: !like
        }

        axios.put(`http://localhost:8000/api/players/${id}/update`, updateCounter)
            .then(res => { console.log(res) })
            .catch(err => console.log(err))
    }

    const deletePlayer = (playerId) => { 
        setPlayers(players.filter(player => player._id !== playerId))
    }

    return (
        <div className='mx-auto w-75 mt-2 p-2 text-center'>
            <div className='p-3 mb-4'>
                {(players.length <= 0)
                    ? <h2>No players in the DB, add some! :)</h2>
                    : <table className="table table-dark table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Team Name</th>
                                <th scope="col">Preferred Position</th>
                                <th scope='col'>Yuh or Nuh?</th>
                                <th scope="col">Checked or nah?</th>
                                <th scope='col'>Counter</th>
                                <th scope='col'>Like button</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        {players.sort((a, b) => a.name.localeCompare(b.name)).map((player, idx) => {
                            return (
                                <>
                                    <tbody key={idx}>
                                        <tr>
                                            <th scope="row"><p > {player.name} </p></th>
                                            <th scope="row"><p > {player.position ? player.position : <>undecided</>} </p></th>
                                            <th scope="row"> {player.radio}</th>
                                            <th scope="row">{player.checkbox ? <p>CHECKED</p> : <p>Not Checked</p>}</th>
                                            <th scope="row"><button className='btn btn-outline-success' style={{backgroundColor: 'yellow', color:'black'}} onClick={() => onClickHandler(player, player._id, player.counter)}> {player.counter} </button></th>
                                            <th scope="row"><button className='btn btn-outline-primary' style={{ backgroundColor: player && player.like === false ? "red" : "", color: player && player.like === false ? "white" : "" }} onClick={(e) => likeButton(player, player._id, player.like)}>
                                                {(player.like) 
                                                ? <>Likey</>
                                                : <>Dislikey</>}
                                            </button>
                                            </th>

                                            <th scope="row d-flex">
                                            <Link to={"/player/" + player._id}><button className='btn btn-outline-danger me-2' style={{backgroundColor: 'orange'}}>Show</button></Link>
                                            <Link to={"/players/edit/" + player._id}><button className='btn btn-outline-light' style={{backgroundColor: 'purple'}}>Update</button></Link>
                                            <DeleteButton playerId={player._id} name={player.name} successCallback={() => deletePlayer(player._id)} />
                                                {/* <button className='mx-2 btn btn-outline-warning' onClick={(e) => { deletePlayer(player._id, player.name) }}> Delete</button> */}
                                            </th>
                                        </tr>
                                    </tbody>
                                </>
                            )
                        })}
                    </table>
                }
            </div>
        </div>
    );
}

export default View;