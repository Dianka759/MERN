import React from 'react'

const Home = () => {
    const style = {
        padding: '10px',
        fontSize: "25px",
        fontWeight: "bold"
    }
    return (
        <div>
            <div style={style}>Welcome</div>
            <div>(type "/islandboy" for a surprise 🏝️)</div>
        </div>
    )
}

export default Home;