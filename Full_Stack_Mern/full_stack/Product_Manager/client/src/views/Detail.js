import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from "react-router-dom";

const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className='mt-5 mx-auto w-50 text-center fs-5'>
            <div className='p-3 border border-warning'>
                <p>Title: <span className='text-danger'> {product.title}</span></p>
                <p>Price: <span className='text-danger'>{product.price}</span></p>
                <p>Description: <span className='text-danger'>{product.description}</span></p>
                <Link to={'/products'}><button className='btn btn-lg btn-outline-warning'>All Products</button></Link>
            </div>
        </div>
    )
}

export default Detail;