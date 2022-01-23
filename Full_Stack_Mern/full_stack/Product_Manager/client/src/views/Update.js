import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory  } from "react-router-dom";
import ProductForm from '../components/ProductForm';
import DeleteButton from '../components/DeleteButton';

    
const Update = (props) => {
    const { id } = useParams();
    const [product, setProduct] = useState(""); 
    const [loaded, setLoaded] = useState(false);
    const history = useHistory()

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
    }, []);
    
    const updateProduct = product => {
        axios.put('http://localhost:8000/api/products/' + id, product)
            .then(res => console.log(res));
    }
    
    return (
        <div className='mx-auto w-50 mt-4 p-2 border border-success text-center '>
            <h1>Update a Product</h1>
            {loaded && (
                <>
                    <ProductForm
                        onSubmitProp={updateProduct}
                        initialTitle={product.title}
                        initialPrice={product.price}
                        initialDescription={product.description}
                    />
                    <DeleteButton productId={product._id} successCallback={() => history.push("/products")} />
                </>
            )}
        </div>
    )
}

export default Update;