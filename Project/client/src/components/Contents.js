import React from 'react'

const Contents = (props) => {
    const { contents } = props;

    const createMarkUp = (info) => {
        return { __html: info}
    }

    return (
        <>
            <div className='container'>
                {/* <div dangerouslySetInnerHTML={createMarkUp(contents)} /> */}
                <div className="mt-4 border w-50" dangerouslySetInnerHTML={createMarkUp(contents)} />
                {/* contents: {contents} */}
            </div>
        </>
    )
}
export default Contents;