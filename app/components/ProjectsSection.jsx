"use client";
import React, { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Full stack project -- StayWell ",
    description:
      "A Hotel booking website built using React, Node.js, Express, MongoDB, stripe api and clerk for authentication",
    imgUrl: "/images/projects/staywell.svg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/HiwotAddis/StayWell.git",
    previewUrl: "https://stay-well-olive.vercel.app/",
  },
  {
    id: 2,
    title: "Full stack project -- blogger ",
    description:
      "Blogging & email subscription platform built using Next.js, MongoDB, and Tailwind CSS.",
    imgUrl: "/images/projects/blog.svg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/HiwotAddis/blog-app.git",
    previewUrl: "https://blog-app-nine-xi-25.vercel.app/",
  },
  {
    id: 3,
    title: "Frontend project -- Bekur Technologies ",
    description:
      "A company portfolio website built using Next.js , Tailwind CSS and TypeScript",
    imgUrl: "/images/projects/bekur.svg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/HiwotAddis/Bekur-Technologies-Website.git",
    previewUrl: "https://bekur-technologies.vercel.app/",
  },
  {
    id: 4,
    title: "Full stack project -- PET PAL ",
    description:
      "A pet adoption mobile app group project built using flutter, TypeScript and Nest.js",
    imgUrl: "/images/projects/petpalMobile.svg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/kalkidanteklay/flutter-2024-proj/tree/main",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Frontend project -- B-Tech ",
    description:
      "A responsive corporate website built using Next.js Tailwind CSS and TypeScript",
    imgUrl: "/images/projects/btech.svg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/HiwotAddis/B-Tech",
    previewUrl: "https://b-tech.vercel.app/",
  },
  {
    id: 6,
    title: "Frontend project -- Weather App ",
    description: "A weather app built using HTML, CSS and JavaScript",
    imgUrl: "/images/projects/weather app.svg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/HiwotAddis/Weather-App",
    previewUrl: "https://weather-wether-app.netlify.app/",
  },
  {
    id: 7,
    title: "Frontend project -- FOODIE ",
    description: "A restaurant landing page built using React and Tailwind CSS",
    imgUrl: "/images/projects/foodie.svg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/HiwotAddis/Restaurant_Landing_Page---React-js",
    previewUrl: "https://restaurant-landing-page-react-js.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const [columns, setColumns] = useState(1);
  const [showAll, setShowAll] = useState(false);
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });

  useEffect(() => {
    const computeColumns = () => {
      if (typeof window === "undefined") return 1;
      const width = window.innerWidth;
      if (width >= 1024) return 3;
      if (width >= 768) return 2;
      return 1;
    };

    const updateColumns = () => setColumns(computeColumns());
    updateColumns();

    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 3);
  return (
    <section id="projects" ref={ref}>
      <h2 className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {visibleProjects.map((project, index) => (
          <motion.li
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInview ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{
              duration: 0.6,
              delay: Math.floor(index / columns) * 0.25,
              ease: "easeOut",
            }}
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
      {!showAll && filteredProjects.length > 3 && (
        <div className="flex justify-center mt-8">
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:scale-[1.02] transition-all duration-200 ease-out"
          >
            See more
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
