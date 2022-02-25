import React from 'react'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import './project.css'
import { data } from '../../data/data'

const Project = () => {
    const slug = useLocation().pathname.split('/')[2];

    const project = data.find(project => project.slug === slug);


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
                        <ReactMarkdown>{project.text}</ReactMarkdown>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project