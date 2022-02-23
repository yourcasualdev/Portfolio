import React from 'react'
import './home.css'
import { Route, Link } from 'react-router-dom'

function Home() {
    return (
        <div className="content" style={{ alingItems: "center", textAlign: "center", paddingTop: "50px" }}>
            {/* <h1>Fark etmez <Link style={{ color: "blue", }} to="/projects">Projects</Link> </h1> */}
            <div className="outerContainer">
                <div className="title">
                    <h1>Welcome to my portfolio</h1>
                </div>
                <div className="card">
                    <img className='profilepic' src='https://github.com/nightvision53.png?size=200' />
                    <div className="description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt soluta molestias, beatae quidem voluptatem porro pariatur odit recusandae. Libero delectus officiis atque, nostrum minus ullam accusamus fugit quae, inventore totam maxime, odio iste ea quos ex. Numquam rem ratione id doloribus similique vitae unde voluptas molestias, odit suscipit, libero porro aliquid, et delectus dolore? Modi ut nihil, nam, dolore quidem quas tempora incidunt harum ex, perferendis commodi! Hic alias saepe dolor numquam repellendus, ab, temporibus possimus non nobis blanditiis sit cumque distinctio veniam, quibusdam id eaque dicta obcaecati nisi. Aut incidunt quod facere possimus a dolorum, unde eveniet est quo!</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home