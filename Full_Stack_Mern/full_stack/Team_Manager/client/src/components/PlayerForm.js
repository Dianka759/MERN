import React, { useState } from 'react'

const PlayerForm = (props) => {
    
    const { initialName, initialPosition, onSubmitProp, errors} = props;
    const [name, setName] = useState(initialName);
    const [position, setPosition] = useState(initialPosition);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name, position, game1:0, game2:0, game3:0})
    }

    const lengthValidator = (input) => {
        if (input.length > 2) {
            return true;
        } else {
            return false;
        }
    }

    const allValid = (input) => {
        return lengthValidator(input)
    }

    return (
        <div className='p-3 w-50 mx-auto mx-auto border border-danger text-center'>
            <h2> Add a Player! </h2>
            {errors.map((err, index) => <p key={index} className='text-danger'>{err}</p>)}
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Player Name</label><br />
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
                </p>
                <p>
                    <label>Preferred Position </label><br />
                    <input type="text" onChange={(e) => setPosition(e.target.value)} value={position} placeholder='Optional...' />
                </p>

                {allValid(name) 
                ? <input type="submit" className='btn btn-lg btn-success'/>
                : <input type="submit" className='btn btn-lg btn-success' disabled/>}

            </form>
        </div>
    )
}
export default PlayerForm;