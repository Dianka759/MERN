import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory  } from "react-router-dom";
import PlayerForm from '../components/PlayerForm';
import DeleteButton from '../components/DeleteButton';
// import DeleteButton from '../components/DeleteButton';

    
const Update = (props) => {
    const { deletePlayer } = props;
    const { id } = useParams();
    const [player, setPlayer] = useState(""); 
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    const history = useHistory()

    useEffect(() => {
        axios.get('http://localhost:8000/api/player/' + id)
            .then(res => {
                setPlayer(res.data);
                setLoaded(true);
            })
    }, [id]);
    
    const updatePlayer = player => {
        axios.put('http://localhost:8000/api/players/' + id + '/update', player)
            .then(res =>  {
                setErrors([])
                history.push("/players/list");
            })
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }
    
    return (
        <div className='mx-auto w-75 mt-3 p-2 border border-success text-center '>
            <h1 className='mb-4'>Update a Playahhhh</h1>
            {loaded && (
                <>
                    <PlayerForm
                        onSubmitProp={updatePlayer}
                        initialName={player.name}
                        initialPosition={player.position}
                        initialCheckbox={player.checkbox}
                        initialRadio={player.radio}
                        initialCategory={player.categories}
                        errors={errors}
                    />
                {/* <button className='mx-2 btn btn-outline-warning' onClick={(e) => { deletePlayer(player._id, player.name) }}> Delete</button> */}
                <DeleteButton playerId={id} name={player.name} successCallback={() => history.push("/players/list")}></DeleteButton>
                </>
            )}
        </div>
    )
}

export default Update;