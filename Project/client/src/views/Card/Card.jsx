import React from 'react';
import { useHistory } from 'react-router-dom';
import './Card.css'

const Card = (props) => {
    const {id, src, title} = props;
    const history = useHistory();

    const onClickHandler = (e) => {
        history.push("/stacks/chapters/" + id)
    }

    return (
        <div className="card" onClick={onClickHandler}>
            <img src={src} alt="card" style={{objectFit: "none", objectPosition: "0% 0%"}}/>
            <div className="card__title">
                <p>{title}</p>
            </div>
        </div>);
}

export default Card;
