import React, { useState } from 'react'
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const ProductForm = (props) => {
    //keep track of what is being typed via useState hook
    const { initialTitle, initialPrice, initialDescription, onSubmitProp} = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);
    const history = useHistory();

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({title, price, description})
        history.push("/products")
    }

    //onChange to update title and price and description
    return (
        <div className='mt-5 p-3 w-50 mx-auto mx-auto border border-danger text-center'>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Title</label><br />
                    <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="number" onChange={(e) => setPrice(e.target.value)} value={price} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} />
                </p>
                <input type="submit" className='btn btn-outline-success' />
            </form>
        </div>
    )
}
export default ProductForm;