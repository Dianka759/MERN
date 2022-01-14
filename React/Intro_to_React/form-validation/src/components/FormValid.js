import React from 'react';

const FormValid = (props) => {

    const initialState = {
        firstName: {
            value: '',
            error: null
        },
        lastName: {
            value: '',
            error: null
        },
        email: {
            value: '',
            error: null
        }
    };

    function reducer(state, action) {
        return {
            ...state,
            [action.type]: action.payload
        };
    }

    export default () => {
        const [state, dispatch] = useReducer(reducer, initialState);

        function handleChange(e) {
            const { name, value } = e.target;
            dispatch({
                type: name,
                payload: value
            });
        }

        return (
            <div>
                {JSON.stringify(state)}
                <div>
                    <label>
                        <span>Name: </span>{' '}
                        <input
                            name="name"
                            value={state.name}
                            onChange={handleChange}
                        />
                    </label>
                    <div>
                        <label>
                            <span>Email: </span>{' '}
                            <input
                                name="email"
                                value={state.email}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}