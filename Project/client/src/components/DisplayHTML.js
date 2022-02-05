import React, { useState } from 'react'

const DisplayHTML = () => {
    const [toBeHTML, setToBeHTML] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        setToBeHTML(toBeHTML)
    }

    const createMarkUp = (info) => {
        return { __html: info };
    };

    return (
        <div className="row justify-content-md-center">
            <div className="col-md-auto">
                <h2 className="text-center">Enter HTML to display</h2>
                <form onSubmit={onSubmitHandler}>
                    <div className="mb-1">
                        <textarea className="form-control" cols="150" rows="20" type="text" onChange={(e) => setToBeHTML(e.target.value)} value={toBeHTML}></textarea><br />
                    </div>
                    <input className="btn btn-success me-1 mb-3" type="submit" />
                </form>
            </div>
            <div className="mt-4 border w-50" dangerouslySetInnerHTML={createMarkUp(toBeHTML)} />
        </div>
    )
}
export default DisplayHTML;