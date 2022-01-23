import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import DeleteButton from './DeleteButton';

const ProductList = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => setProducts(res.data))
            .catch(err => console.error(err));
    }, []);

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId))
    }

    return (
        <div className='d-flex justify-content-center'>
            <div className='mt-5 p-2 text-center w-50'>
                {products.map((product, idx) => {
                    return (
                        <div className='text-warning border border-danger p-2 mb-2'>
                            <p key={idx} > <b>Title:</b> <Link to={`/products/` + product._id} >{product.title}</Link>, <b>Price:</b> ${product.price}, <b>Description:</b> {product.description}</p>
                            <DeleteButton productId={product._id} successCallback={() => removeFromDom(product._id)} />
                        </div>
                    )
                })
                }
            </div>
        </div >
    )
}

export default ProductList;