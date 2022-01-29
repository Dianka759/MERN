import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useHistory, useParams } from "react-router-dom";
import DeleteButton from '../components/DeleteButton';


const ViewOne = (props) => {
    const [player, setPlayer] = useState({})
    const { id } = useParams();
    const history = useHistory();
    const { removeFromDom } = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/player/' + id)
            .then(res => setPlayer(res.data))
            .catch(err => console.error(err));
    }, [id]);
    
    const deletePlayer = (playerId) => {
        axios.delete('http://localhost:8000/api/products/' + playerId)
            .then(res => {
                removeFromDom(playerId)
            })
            .catch(err => console.error(err));
            history.push("/players/list")
    }
    
    return (
        <div className='mt-5 mx-auto w-50 text-center fs-5'>
            <div className='p-3 border border-warning'>
                <p>Name: <span className='text-danger'> {player.name}</span></p>
                <p>position: <span className='text-danger'>{player.position ? player.position : <>undecided</>}</span></p>
                <p>Yuh or nuh? <span className='text-danger'>{player.radio}</span></p>
                <p>Checked the boxy or nah? <span className='text-danger'>{player.checkbox ? <>checked</> : <>not checked</>}</span></p>
                <p>Category: <span className='text-danger'>{player.categories}</span></p>

                <Link to={"/players/edit/" + player._id}><button className='btn btn-outline-light me-2' style={{backgroundColor: 'purple'}}>Update</button></Link>
                <Link to={'/players/list'}><button className='btn btn-outline-success'>All players</button></Link>
                <DeleteButton playerId={player._id} name={player.name} successCallback={() => deletePlayer(player._id)} />
            </div>
        </div>
    )
}

export default ViewOne;