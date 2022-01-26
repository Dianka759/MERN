import React from 'react'
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
<link rel="stylesheet" href="../src/react-confirm-alert.css"></link>

export default props => {

    const { authorId, successCallback, firstName, lastName } = props;

    const deleteAuthor = (e) => {
        confirmAlert({
            title: 'Confirm to submit',
            message: (`Are you sure you want to delete ~${firstName} ${lastName}~`),
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        axios.delete('http://localhost:8000/api/authors/' + authorId)
                            .then(res => { successCallback(); })
                    }
                },
                {
                    label: 'No',
                }
            ],
        });
    }

    return (
        <button onClick={deleteAuthor} className='btn btn-outline-danger'>
            Delete
        </button>
    )
}