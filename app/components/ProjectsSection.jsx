"use client"
import React,{useState,useRef} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion,useInView } from 'framer-motion'

const projectsData=[
    {
        id: 1,
        title: "Velox Drive ",
        description: "Project 1: A car rental website built using HTML, Tailwindcss,javascript and Spring Boot",
        imgUrl: "/images/projects/project1.png",
        tag:["All","Web"],
        gitUrl: "https://github.com/HiwotAddis/Car-Rental-website-Springboot/tree/main",
        previewUrl: "/"
    },
    {
        id: 2,
        title: "B-Tech ",
        description: "Project 2: A company portfolio website built using next.js tailwindcss andtypescript",
        imgUrl: "/images/projects/project2.png",
        tag:["All","Web"],
        gitUrl: "https://github.com/HiwotAddis/B-Tech",
        previewUrl: "https://b-tech.vercel.app/"
        
    },
    {
        id: 3,
        title: "Weather App ",
        description: "Project 3: A weather app built using HTML,Css and javascript",
        imgUrl: "/images/projects/project3.png",
        tag:["All","Web"],
        gitUrl: "https://github.com/HiwotAddis/Weather-App",
        previewUrl: "https://weather-wether-app.netlify.app/"
        
    },
    {
        id: 4,
        title: "FOODIE ",
        description: "Project 4: A restaurant landing page built using React and Tailwindcss",
        imgUrl: "/images/projects/project4.png",
        tag:["All","Web"],
        gitUrl: "https://github.com/HiwotAddis/Restaurant_Landing_Page---React-js",
        previewUrl: "https://restaurant-landing-page-react-js.vercel.app/"
    },
    {
        id: 5,
        title: "PET PAL ",
        description: "Project 5: A pet adoption mobile app group project built using flutter, TypeScript and Nest.js",
        imgUrl: "/images/projects/project5.png",
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
    <section id="projects" ref={ref}>
        <h2 className='text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-4 mb-8 md:mb-12'>
            My Projects
        </h2> 
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
            <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
            <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
            <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"} />
        </div>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12'>
            {filteredProjects.map((project, index) => (
                <motion.li
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInview ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: index * 0.4 }}
                >
                    <ProjectCard 
                        title={project.title} 
                        description={project.description} 
                        imgUrl={project.imgUrl} 
                        gitUrl={project.gitUrl} 
                        previewUrl={project.previewUrl}
                    />
                </motion.li>
            ))}
        </ul>
    </section>
    )
}

export default ProjectsSection
