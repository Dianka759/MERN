import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useHistory, useParams } from "react-router-dom";


const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    const history = useHistory();
    const { removeFromDom } = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);
    
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.error(err));
            history.push("/products")
    }
    
    return (
        <div className='mt-5 mx-auto w-50 text-center fs-5'>
            <div className='p-3 border border-warning'>
                <p>Title: <span className='text-danger'> {product.title}</span></p>
                <p>Price: $<span className='text-danger'>{product.price}</span></p>
                <p>Description: <span className='text-danger'>{product.description}</span></p>
                <Link to={"/products/" + product._id + "/edit"}><button className='btn btn-lg btn-outline-primary'>Edit</button></Link>
                <Link to={'/products'}><button className='btn btn-lg btn-outline-success'>All Products</button></Link>
                <button onClick={(e) => {deleteProduct(product._id); this.props.removeFromDomHandler(product._id)}} className='btn btn-lg btn-outline-danger'> Delete </button>
            </div>
        </div>
    )
}

export default Detail;