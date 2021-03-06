import React, { useState, useEffect } from 'react'
import WorkCard from './WorkCard'
// import ProjectInfo from './projectInfo.json'
import { Projects } from './projectInfo';

function Work() {

    const [filter, setFilter] = useState("all");
    const [projects, setProjects] = useState(Projects);




    // Filter the projects when filter is changed
    useEffect(() => {
        let filterProjects = [];
        if (filter === "all") {
            setProjects(Projects)
        } else if (filter === "vanilla") {
            filterProjects = Projects.filter((project) => {
                return project.search_filter.vanilla === true;
            });
            setProjects(filterProjects)
        } else if (filter === "node") {
            filterProjects = Projects.filter((project) => {
                return project.search_filter.node === true;
            });
            setProjects(filterProjects)
        } else {
            // REACT
            filterProjects = Projects.filter((project) => {
                return project.search_filter.react === true;
            });
            setProjects(filterProjects)
        }
    }, [filter])


    // Called when ALL/VANILLA/NODE/REACT are clicked. Then filter is set
    function onClick(newFilter) {
        // Change style of old filter 
        switch (filter) {
            case "all":
                document.querySelector(".work-nav-item.all").classList.remove("active")
                break;
            case "vanilla":
                document.querySelector(".work-nav-item.vanilla").classList.remove("active")
                break;
            case "node":
                document.querySelector(".work-nav-item.node").classList.remove("active")
                break;
            case "react":
                document.querySelector(".work-nav-item.react").classList.remove("active")
                break;
            default:
                break;
        }
        // Change style of new filter
        switch (newFilter) {
            case "all":
                document.querySelector(".work-nav-item.all").classList.add("active")
                break;
            case "vanilla":
                document.querySelector(".work-nav-item.vanilla").classList.add("active")
                break;
            case "node":
                document.querySelector(".work-nav-item.node").classList.add("active")
                break;
            case "react":
                document.querySelector(".work-nav-item.react").classList.add("active")
                break;
            default:
                break;
        }
        setFilter(newFilter);
    }

    return (

        <section className="work" id="work">
            <div className="spacer black-waves">
            </div>
            <div className="container">
                <div className="divider"></div>
                <h3 id="projects" className="reveal reveal-left">Projects</h3>
                <ul className="work-nav reveal reveal-right">
                    <li aria-label="filter to show all projects" tabIndex="0" className="work-nav-item all active"
                        onClick={() => {
                            onClick("all")
                        }}
                        onKeyPress={(e)=>{
                            if(e.key === "Enter"){
                                e.preventDefault();
                                onClick("all")
                            }
                        }}>All</li>
                    <li aria-label="filter to show HTML, CSS and JavaScript projects only"  tabIndex="0" className="work-nav-item vanilla"
                        onClick={() => {
                            onClick("vanilla")
                        }}
                        onKeyPress={(e)=>{
                            if(e.key === "Enter"){
                                e.preventDefault();
                                onClick("vanilla")
                            }
                        }}
                        >HTML/CSS/JS</li>
                    <li aria-label="filter to show Node JS projects only"  tabIndex="0" className="work-nav-item node"
                        onClick={() => {
                            onClick("node")
                        }}
                        onKeyPress={(e)=>{
                            if(e.key === "Enter"){
                                e.preventDefault();
                                onClick("node")
                            }
                        }}>Node.js</li>
                    <li aria-label="filter to show React projects only"  tabIndex="0" className="work-nav-item react"
                        onClick={() => {
                            onClick("react")
                        }}
                        onKeyPress={(e)=>{
                            if(e.key === "Enter"){
                                e.preventDefault();
                                onClick("react")
                            }
                        }}>React</li>
                </ul>
                <div className="word-card-grid">

                    {projects.map((project, index) => (
                        <WorkCard
                            key={index}
                            name={project.name}
                            desc={project.desc}
                            img={project.img}
                            mini={project.mini_img}
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
