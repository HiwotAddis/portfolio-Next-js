"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const SKILLS_DATA = [
  { name: "HTML", icon: "/images/tech/html.png" },
  { name: "CSS", icon: "/images/tech/css-3.png" },
  { name: "JavaScript", icon: "/images/tech/js.png" },
  { name: "React", icon: "/images/tech/react.png" },
  { name: "Next.js", icon: "/images/tech/nextjs.png" },
  { name: "Node.js", icon: "/images/tech/node-js.png" },
  { name: "Python", icon: "/images/tech/python.png" },
  { name: "Nest.js", icon: "/images/tech/nestjs.png" },
  { name: "Spring Boot", icon: "/images/tech/spring-boot.png" },
  { name: "MongoDB", icon: "/images/tech/mongodb.png" },
  { name: "Docker", icon: "/images/tech/docker.png" },
  { name: "Git", icon: "/images/tech/git.png" },
  { name: "Flutter", icon: "/images/tech/flutter.png" },
  { name: "Java", icon: "/images/tech/java.png" },
  { name: "TypeScript", icon: "/images/tech/typescript.png" },
  { name: "Figma", icon: "/images/tech/figma.png" },
  { name: "MySQL", icon: "/images/tech/mysql.png" },
];

const EXPERIENCE_DATA = [
  {
    title: "Junior Software Engineer",
    company: "Bekur Technologies",
    duration: "Jun 2025 - Oct 2025",
    description:
      "Focused on developing responsive, user-friendly interfaces, optimizing performance, and collaborating with the team to implement scalable full-stack solutions.",
  },
  {
    title: "Full-stack Developer Intern ",
    company: "Bekur Technologies",
    duration: "Feb 2025 - May 2025",
    description:
      "Developing scalable web applications using Next.js, TypeScript and Nest.js.",
  },
  {
    title: "Front-end Developer Intern",
    company: "Prodigy InfoTech",
    duration: "Jul 2024-Aug 2024",
    description: "Developed custom web applications for clients.",
  },
];

const EDUCATION_DATA = [
  {
    title: "BSc in Software Engineering",
    institution: "Addis Ababa Institute of Technology",
    year: "May 2022 - August 2026",
  },
  {
    title: "Competitive Programming",
    institution: "Africa to Silicon Valley (A2SV)",
    year: "Jan 2025 - Jun 2025",
  },
  {
    title: "AI Mastery",
    institution: "10 Academy",
    year: "May 2025 - Aug 2025",
  },
];

/* Commenting out Certification Data
const CERTIFICATION_DATA = [
    {
        title: "AWS Certified Developer Associate",
        issuer: "Amazon Web Services",
        year: "2023"
    },
    {
        title: "Meta Front-End Developer",
        issuer: "Professional Certificate",
        year: "2023"
    }
]
*/

const AboutSection = () => {
  const { scrollYProgress } = useScroll();
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  // Scroll-triggered animation refs
  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: false, amount: 0.2 });
  const skillsRef = useRef(null);
  const skillsInView = useInView(skillsRef, { once: false, amount: 0.2 });

  return (
    <section
      id="about"
      className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      {/* Background Design Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      {/* About Me Section */}
      <motion.div
        ref={aboutRef}
        initial={{ opacity: 0, y: 40 }}
        animate={aboutInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="backdrop-blur-sm bg-[#192333]/10 p-8 rounded-2xl border border-[#ffffff30] shadow-xl mb-12"
      >
        <motion.h2
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6 mx-auto text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-5xl mx-auto text-center"
        >
          <p className="text-white text-lg leading-relaxed mb-6 font-medium text-center">
            As a Full Stack Software Engineer with expertise in modern web
            technologies, I specialize in building scalable and efficient web
            applications. With a strong foundation in both front-end and
            back-end development, I create seamless user experiences while
            ensuring robust server-side functionality.
          </p>
          <p className="text-white text-lg leading-relaxed font-medium text-center">
            I'm particularly passionate about clean code architecture,
            performance optimization, and creating intuitive user interfaces. My
            collaborative approach and problem-solving mindset enable me to work
            effectively in team environments and deliver high-quality solutions
            that meet business objectives.
          </p>
        </motion.div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        ref={skillsRef}
        initial={{ opacity: 0, y: 40 }}
        animate={skillsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="backdrop-blur-sm bg-[#192333]/30 p-8 rounded-2xl border border-[#ffffff1a] shadow-xl mb-12"
      >
        <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-8 mx-auto text-center">
          Skills & Technologies
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {SKILLS_DATA.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex flex-col items-center rounded-xl p-3 border border-transparent bg-transparent transition-all duration-200 hover:border-pink-500 hover:shadow-[0_0_18px_rgba(236,72,153,0.35)]"
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={40}
                height={40}
                className="mb-3"
              />
              <span className="text-white text-sm">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Experience, Education Grid */}
      <div className="grid md:grid-cols-2 gap-8 h-full">
        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="backdrop-blur-sm bg-[#192333]/30 p-8 rounded-2xl border border-[#ffffff1a] shadow-xl h-full"
        >
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-8"
          >
            Experience
          </motion.h3>
          <div className="space-y-6">
            {EXPERIENCE_DATA.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.2 + 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="bg-[#1E293B] p-6 rounded-xl hover:bg-[#2D3B4E] transition-colors"
              >
                <h4 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-[#ADB7BE] mb-1 font-medium">
                  {item.company}
                </p>
                <p className="text-[#ADB7BE] text-sm mb-3">{item.duration}</p>
                <p className="text-[#ADB7BE] text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="backdrop-blur-sm bg-[#192333]/30 p-8 rounded-2xl border border-[#ffffff1a] shadow-xl h-full"
        >
          <motion.h3
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-8"
          >
            Education
          </motion.h3>
          <div className="space-y-6">
            {EDUCATION_DATA.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.2 + 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="bg-[#1E293B] p-6 rounded-xl hover:bg-[#2D3B4E] transition-colors"
              >
                <h4 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-[#ADB7BE] mb-1">{item.institution}</p>
                <p className="text-[#ADB7BE] text-sm">{item.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
