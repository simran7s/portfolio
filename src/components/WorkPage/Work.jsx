import React, { useState, useEffect } from 'react'
import WorkCard from './WorkCard'
import ProjectInfo from './projectInfo.json'

function Work() {

    const [filter, setFilter] = useState("all");
    const [projects, setProjects] = useState(ProjectInfo.projects);


    // Filter the projects when filter is changed
    useEffect(() => {
        let filterProjects = [];
        if (filter === "all") {
            setProjects(ProjectInfo.projects)
        } else if (filter === "vanilla") {
            filterProjects = ProjectInfo.projects.filter((project) => {
                return project.search_filter.vanilla === true;
            });
            setProjects(filterProjects)
        } else if (filter === "node") {
            filterProjects = ProjectInfo.projects.filter((project) => {
                return project.search_filter.node === true;
            });
            setProjects(filterProjects)
        } else {
            // REACT
            filterProjects = ProjectInfo.projects.filter((project) => {
                return project.search_filter.react === true;
            });
            setProjects(filterProjects)
        }
    }, [filter])


    // Called when ALL/VANILLA/NODE/REACT are clicked. Then filter is set
    function onClick(filter) {
        setFilter(filter);
    }

    return (

        <section className="work" id="work">
            <div className="spacer black-waves">
            </div>
            <div className="container">
                <div className="divider"></div>
                <h3 id="work-scrollpoint">Projects</h3>
                <ul className="work-nav">
                    <li className="work-nav-item"
                        onClick={() => {
                            onClick("all")
                        }}>All</li>
                    <li className="work-nav-item"
                        onClick={() => {
                            onClick("vanilla")
                        }}>HTML/CSS/JS</li>
                    <li className="work-nav-item"
                        onClick={() => {
                            onClick("node")
                        }}>Node.js</li>
                    <li className="work-nav-item"
                        onClick={() => {
                            onClick("react")
                        }}>React</li>
                </ul>
                <div className="word-card-grid">

                    {projects.map((project, index) => (
                        <WorkCard
                            key={index}
                            name={project.name}
                            desc={project.desc}
                            img={project.img}
                            site_url={project.site_url}
                            code_url={project.code_url}
                            skills={project.skills}
                        />
                    ))}


                </div>
            </div>
        </section>

    )
}

export default Work
