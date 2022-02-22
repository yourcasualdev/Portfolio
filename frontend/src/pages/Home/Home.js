import React from 'react'
import { Route, Link } from 'react-router-dom'

function Home() {
    return (
        <div className="content" style={{ alingItems: "center", textAlign: "center", paddingTop: "50px" }}>
            <h1>Bu kısım daha bitmedi şuraya bakabilirsin <Link style={{ color: "blue", }} to="/projects">Projects</Link> </h1>
        </div>
    )
}

export default Home