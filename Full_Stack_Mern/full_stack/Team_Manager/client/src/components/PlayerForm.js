import axios from 'axios';
import React, { useEffect, useState } from 'react'

const PlayerForm = (props) => {

    const { onSubmitProp, errors, initialName, initialPosition, initialCheckbox, initialRadio, initialCounter, initialCategory } = props;

    const [name, setName] = useState(initialName);
    const [position, setPosition] = useState(initialPosition);
    const [radio, setRadio] = useState(initialRadio)
    const [checkbox, setCheckbox] = useState(initialCheckbox)
    const counter = initialCounter;
    const [category, setCategory] = useState(initialCategory)
    const categories = ["Pick me!", "No! Pick me!!", "Guys we all know it's gonna be me."]

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({
            name,
            position,
            game1: 0,
            game2: 0,
            game3: 0,
            checkbox,
            radio,
            counter,
            like: true,
            categories: category
        })
    }

    const lengthValidator = (input) => {
        if (input.length > 2) {
            return true;
        } else {
            return false;
        }
    }

    const allValid = (input) => {
        return lengthValidator(name)
            && lengthValidator(radio)
    }

    return (
        <div className='p-3 w-50 mx-auto mx-auto border border-danger text-center'>
            <h2> Add a Player! </h2>
            {errors.map((err, index) => <p key={index} className='text-danger'>{err}</p>)}
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Player Name</label><br />
                    <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} />
                </p>
                <p>
                    <label>Preferred Position </label><br />
                    <input type="text" name="position" onChange={(e) => setPosition(e.target.value)} value={position} placeholder='Optional...' />
                </p>
                <label>YUH or NUH?</label> <br></br>

                <p className='mt-2 border p-3'>
                    <input className="form-check-input" type="radio" name="radio" onChange={(e) => setRadio(e.target.value)} value="YUH" checked={radio === "YUH" ? true : false} />
                    <label className="form-check-label me-4"> YUH </label>

                    <input className="form-check-input" type="radio" name="radio" onChange={(e) => setRadio(e.target.value)} value="NUH" checked={radio === "NUH" ? true : false} />
                    <label className="form-check-label"> NUH </label>
                </p>

                <p>
                    <label> CHECK ME, YOU WON'T. </label><br />
                    <input type="checkbox" name="checkbox" onChange={(e) => setCheckbox(e.target.checked ? true : false)} value={checkbox} checked={checkbox} />
                </p>
                <p>

                    <label> SELECT me you WON'T.</label> <br/>
                    <select onChange={(e) => setCategory(e.target.value)} value={category} name="categories" className="input-group-text d-inline m-3">
                        {
                            categories.map((category, index) => {
                                return <option key={index} value={category} className='bg-danger'>{category}</option>
                            })
                        }
                    </select>
                </p>
                <p>
                    {allValid(name && radio)
                        ? <input type="submit" className='btn btn-lg btn-success' />
                        : <input type="submit" className='btn btn-lg btn-success' disabled />}
                </p>

            </form>
        </div>
    )
}
export default PlayerForm;