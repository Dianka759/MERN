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

    const lengthValidator = (input) => {
        if (input.length > 3) {
            return true;
        } else {
            return false;
        }
    }

    const allValid = (inputs) => {
        return lengthValidator(inputs.flavor)
            && lengthValidator(inputs.sauce)
            && lengthValidator(inputs.topping)
            && lengthValidator(inputs.fruit)
    }

    return (
        <div className='w-50 mx-auto'>
            <form>
                <h1> Make a sundae - Simple form </h1>
                <div className='form-group'>
                    <label htmlFor="flavor">Flavor</label>
                    <input className="form-control" name="flavor" type="text" onChange={onChangeHandler} />
                    <span className='alert-danger'>{!lengthValidator(form.flavor) && form.flavor.length > 0 && "you need at least 3 chars"}</span>
                </div>
                <div className='form-group'>
                    <label htmlFor="sauce">sauce</label>
                    <input className="form-control" name="sauce" type="text" onChange={onChangeHandler} />
                    <span className='alert-danger'>{!lengthValidator(form.sauce) && form.sauce.length > 0 && "you need at least 3 chars"}</span>
                </div>
                <div className='form-group'>
                    <label HtmlFor="topping">topping</label>
                    <input className="form-control" name="topping" type="text" onChange={onChangeHandler} />
                    <span className='alert-danger'>{!lengthValidator(form.topping) && form.topping.length > 0 && "you need at least 3 chars"}</span>
                </div>
                <div className='form-group'>
                    <label HtmlFor="fruit">fruit</label>
                    <input className="form-control" name="fruit" type="text" onChange={onChangeHandler} />
                    <span className='alert-danger'>{!lengthValidator(form.fruit) && form.fruit.length > 0 && "you need at least 3 chars"}</span>
                </div>
                <div className='form-group'>
                    <label HtmlFor="whipped">whipped cream and cherry?</label>
                    <input className="form-check-input" name="whipped" type="checkbox" onChange={onChangeHandler} />
                </div>
                <div className='form-group'>
                    <label HtmlFor="dairyFree">Dairy free??</label>
                    <input className="form-check-input" name="dairyFree" type="checkbox" onChange={onChangeHandler} />
                </div>

                {allValid(form) 
                ? <input type="submit" className='btn btn-lg btn-success'/>
                : <input type="submit" className='btn btn-lg btn-success' disabled/>}

            </form>
        </div>
    )
}

export default SimpleForm;