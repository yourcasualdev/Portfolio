import React from 'react'
import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import Footer from "../../components/Footer/Footer";



import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { axios } from 'axios';

const Projects = () => {
    const API_URL = 'http://localhost:5000/projects';
    const [projects, setprojects] = useState([]);

    const [newProject, setNewProject] = useState('');
    const [search, setSearch] = useState('');
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const fetchItems = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) throw Error('Did not receive a response');
                const listItems = await response.json();
                setprojects(listItems);
                setFetchError(null);

            } catch (error) {
                setFetchError(error.message);

            } finally {
                setIsLoading(false);
            }
        }

        setTimeout(() => {
            (async () => fetchItems())();
        })
    }, [])
    return (
        <div className="App">
            {/* <Link to="/invoices">Invoices</Link> |{" "} */}
            <Header />
            <Section />
            {projects.map(project => (
                <div key={project.id}>
                    <h1>{project.name}</h1>
                    <p>{project.description}</p>
                    <p>{project.startDate}</p>
                    <p>{project.text}</p>
                </div>))}
            <Footer />
        </div>
    )
}

export default Projects