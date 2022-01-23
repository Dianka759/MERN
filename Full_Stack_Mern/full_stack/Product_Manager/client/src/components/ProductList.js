import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link, useParams} from "react-router-dom";

const ProductList = (props) => {
    const [products, setProducts] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => setProducts(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className='d-flex justify-content-center'>
        <div className='mt-5 p-2 text-center w-50'>
            {products.map((product, i) => {
                return <p key={i} className='text-warning border border-danger p-2'> <b>Title:</b> <Link to={`/products/` + product._id} >{product.title}</Link>, <b>Price:</b> ${product.price}, <b>Description:</b> {product.description}</p>
            })}
            </div>
        </div>
    )
}

export default ProductList;