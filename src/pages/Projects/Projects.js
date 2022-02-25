import { data } from "../../data/data"

import MediaCard from '../../components/Card/MediaCard';

const Projects = () => {


    return (
        <div className="App">
            <div className="content">
                <section className='cardoutercontainer'>
                    <div className='outerTitle'><h1 className='Title'>My Projects</h1></div>
                    <div className='cardContainer'>
                        {data.map(project => (
                            <div className='mediacard'>
                                <MediaCard
                                    name={project.name}
                                    description={project.description}
                                    img={project.img}
                                    text={project.text}
                                    slug={project.slug}
                                />
                            </div>
                        ))}

                    </div>
                </section>
            </div>

        </div>
    )
}

export default Projects