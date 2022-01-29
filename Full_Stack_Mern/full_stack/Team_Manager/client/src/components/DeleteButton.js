import React from 'react'
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert'; // Import
    
export default props => {
    
    const { playerId, successCallback, name } = props;
    
    // const deletePlayer = e => {
    //     axios.delete('http://localhost:8000/api/players/' + playerId + "/delete")
    //         .then(res=>{
    //             successCallback();
    //         })
    // }

        const deletePlayer = (e) => {
        confirmAlert({
            title: 'Confirm to submit',
            message: (`Are you sure you want to delete ${name}? :(`),
            buttons: [
                {
                    label: 'Nope',
                },
                {
                    label: 'Yasss',
                    onClick: () => {
                        axios.delete('http://localhost:8000/api/players/' + playerId + '/delete')                         
                        .then(res=>{
                            successCallback();
                        })
                    }
                }
            ],
        });
    }
    
    return (
        <button onClick={deletePlayer} className='btn btn-outline-danger ms-2'>
            Delete
        </button>
    )
}