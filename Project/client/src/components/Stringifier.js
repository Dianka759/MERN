import React, { useState } from 'react'

const Stringifier = () => {
    const [toBeStringify, setToBeStringify] = useState("");
    const [processedString, setProcessedString] = useState("")

    const onSubmitHandler = e => {
        e.preventDefault();
        setProcessedString(JSON.stringify(toBeStringify))
        console.log(processedString)
    }

    return (
        <div className="row justify-content-md-center">
            <div className="col-md-auto">
                <h2 className="text-center">Enter HTML to stringify into JSON object</h2>
                <form onSubmit={onSubmitHandler}>
                    <div className="mb-1">
                        <textarea className="form-control" cols="150" rows="20" type="text" onChange={(e) => setToBeStringify(e.target.value)} value={toBeStringify}></textarea><br />
                    </div>
                    <input className="btn btn-success me-1 mb-3" type="submit" />
                </form>
            </div>
            <div className="row justify-content-md-center">
                <h2 className="text-center">Outputed JSON notation</h2>
                <div className="col-md-auto">
                    <textarea className="form-control" cols="150" rows="20" defaultValue={processedString}></textarea>
                </div>
            </div>
        </div>
    )
}
export default Stringifier;