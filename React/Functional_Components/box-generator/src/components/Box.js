import React, { useState } from 'react';
import Display from './Display';

const Box = (props) => {
    const [allBoxes, setAllBoxes] = useState([]);
    const [color, setColor] = useState('');
    const [boxSize, setBoxSize] = useState(100);

    const colorHandler = e => {
        setColor(e.target.value);
    }

    const sizeHandler = e => {
        setBoxSize(e.target.value);
    }

    const submitHandler = e => {
        e.preventDefault();
        const newColor = {
            color: color,
            boxSize: boxSize
        };

        setAllBoxes([...allBoxes, newColor]);
        setColor('');
        setBoxSize(100);
    }

    return (
        <>
            <form onSubmit={submitHandler} className='mt-4'>
                <label htmlFor="color">Color </label>
                <input type="text" name="color" value={color} onChange={colorHandler} className='me-4' />
                <label htmlFor="boxSize">Box size (px) </label>
                <input type="number" name="boxSize" value={boxSize} onChange={sizeHandler}
                />
                <button type="submit" >Add</button>
            </form>

            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {allBoxes.map((color, i) => {
                    return (
                        <div key={i} style={{ backgroundColor: color.color, height: color.boxSize + "px", width: color.boxSize + "px", margin: '4px' }}>
                            Color: <p>{color.color}</p>
                            Size: {color.boxSize + "px"}
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default Box;