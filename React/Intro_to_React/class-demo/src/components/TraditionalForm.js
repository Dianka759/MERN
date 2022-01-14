import React, { useState } from 'react';

const TraditonalForm = (prop) => {
    const [flavor, setFlavor] = useState("");
    const [sauce, setSauce] = useState("");
    const [topping, setTopping] = useState("");
    const [fruit, setFruit] = useState("");
    const [whipped, setWhipped] = useState(false);
    const [dairyFree, setDairyFree] = useState(false);

    return (
        <div className='w-50 mx-auto'>
            <form>
            <h1> Make a sundae - Traditional form </h1>
                <div className='form-group'>
                    <label htmlFor="flavor">Flavor</label>
                    <input className="form-control" name="flavor" type="text" onChange={(event) => setFlavor(event.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor="sauce">sauce</label>
                    <input className="form-control" name="sauce" type="text" onChange={(event) => setSauce(event.target.value)} />
                </div>
                <div className='form-group'>
                    <label HtmlFor="topping">topping</label>
                    <input className="form-control" name="topping" type="text" onChange={(event) => setTopping(event.target.value)} />
                </div>
                <div className='form-group'>
                    <label HtmlFor="fruit">fruit</label>
                    <input className="form-control" name="fruit" type="text" onChange={(event) => setFruit(event.target.value)}/>
                </div>
                <div className='form-group'>
                    <label HtmlFor="whipped">whipped cream and cherry?</label>
                    <input className="form-check-input" name="whipped" type="checkbox"  onChange={(event) => setWhipped(event.target.checked)}/>
                </div>
                <div className='form-group'>
                    <label HtmlFor="dairyFree">Dairy free??</label>
                    <input className="form-check-input" name="dairyFree" type="checkbox" onChange={(event) => setDairyFree(event.target.checked)} />
                </div>
                <input type="submit" className='btn btn-lg btn-success'></input>
            </form>
        </div>
    )
}

export default TraditonalForm;