"use client"
import React,{useState,useRef} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion,useInView } from 'framer-motion'

const projectsData=[
    {
        id: 1,
        title: "react landing page ",
        description: "Project 1: Restaurant Landing page",
        imgUrl: "/images/projects/project1.png",
        tag:["All","Web"],
        gitUrl: "https://github.com/HiwotAddis/Restaurant_Landing_Page---React-js",
        previewUrl: "/"
    },
    {
        id: 2,
        title: "Car Rental Website ",
        description: "Project 2: using HTML, Tailwindcss,javascript,Spring Boot",
        imgUrl: "/images/projects/project2.png",
        tag:["All","Web"],
        gitUrl: "https://github.com/HiwotAddis/Car-Rental-website-Springboot/tree/main",
        previewUrl: "/"
    },
    {
        id: 3,
        title: "Weather App ",
        description: "Project 3: using HTML,Css and javascript",
        imgUrl: "/images/projects/project3.png",
        tag:["All","Web"],
        gitUrl: "https://github.com/HiwotAddis/Weather-App",
        previewUrl: "https://weather-wether-app.netlify.app/"
        
    },
    {
        id: 4,
        title: "Pet Adoption Mobile App ",
        description: "Project 4: flutter group project",
        imgUrl: "/images/projects/project4.png",
        tag:["All","Mobile"],
        gitUrl: "https://github.com/kalkidanteklay/flutter-2024-proj/tree/main",
        previewUrl: "/"
    }
]

const ProjectsSection = () => {
    const [tag,setTag]=useState("All");
    const ref=useRef(null);
    const isInview=useInView(ref,{once: true});

    const handleTagChange=(newTag) => {
        setTag(newTag);
    };
    const filteredProjects=projectsData.filter((project)=>
        project.tag.includes(tag)
    );
    return (
    <section ref={ref}>
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
            My Projects
        </h2> 
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
            <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
            <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
            <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"} />
        </div>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>{filteredProjects.map((project)=>(<ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.imgUrl} gitUrl= {project.gitUrl} previewUrl={project.previewUrl} />))}</div>
    </section>

    )
}

export default ProjectsSection
