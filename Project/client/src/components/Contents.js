import React from 'react'

const Contents = (props) => {
    const { contents } = props;

    return (
        <>
            <div className='container'>
                contents: {contents}
            </div>
        </>
    )
}
export default Contents;