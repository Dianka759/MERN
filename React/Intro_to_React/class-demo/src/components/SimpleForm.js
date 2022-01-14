import React, { useState } from 'react';

const SimpleForm = (prop) => {
    const [form, setForm] = useState({
        flavor: "",
        sauce: "",
        topping: "",
        fruit: "",
        whipped: false,
        dairyFree: false,
    })

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
        })
    }

    return (
        <div className='w-50 mx-auto'>
            <form>
            <h1> Make a sundae - Simple form </h1>
                <div className='form-group'>
                    <label htmlFor="flavor">Flavor</label>
                    <input className="form-control" name="flavor" type="text" onChange={onChangeHandler} />
                </div>
                <div className='form-group'>
                    <label htmlFor="sauce">sauce</label>
                    <input className="form-control" name="sauce" type="text" onChange={onChangeHandler} />
                </div>
                <div className='form-group'>
                    <label HtmlFor="topping">topping</label>
                    <input className="form-control" name="topping" type="text" onChange={onChangeHandler} />
                </div>
                <div className='form-group'>
                    <label HtmlFor="fruit">fruit</label>
                    <input className="form-control" name="fruit" type="text" onChange={onChangeHandler}/>
                </div>
                <div className='form-group'>
                    <label HtmlFor="whipped">whipped cream and cherry?</label>
                    <input className="form-check-input" name="whipped" type="checkbox"  onChange={onChangeHandler}/>
                </div>
                <div className='form-group'>
                    <label HtmlFor="dairyFree">Dairy free??</label>
                    <input className="form-check-input" name="dairyFree" type="checkbox" onChange={onChangeHandler} />
                </div>
                <input type="submit" className='btn btn-lg btn-success'></input>
            </form>
        </div>
    )
}

export default SimpleForm;