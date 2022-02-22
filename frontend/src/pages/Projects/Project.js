import React from 'react'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import './project.css'

const Project = () => {
    const slug = useLocation().pathname.split('/')[2];

    const [project, setProject] = useState({});

    const API_URL = 'http://localhost:5000/projects';
    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(`${API_URL}/${slug}`);
                if (!response.ok) throw Error('Did not receive a response');
                const jsonResponse = await response.json();
                setProject(jsonResponse);
            } catch (error) {
                console.log(error);
            }
        }
        fetchItems();
    }, []);

    return (
        <div className='content'>
            <div className="outercontainer">
                <div className='project-container'>
                    <div className='project-title'>
                        <h1>{project.name}</h1>
                    </div>
                    <div className='project-description'>
                        <p>{project.description}</p>
                    </div>
                    <div className='project-text'>
                        <ReactMarkdown>{project.markdown}</ReactMarkdown>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project