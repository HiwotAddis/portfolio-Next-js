"use client";
import React,{useTransition,useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA=[
    {
        title: "Skills",
        id: "skills",
        content:(
            <ul className='list-disc pl-2'>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Nest.js</li>
                <li>SpringBoot</li>
                <li>Django</li>
            </ul>
        )
    },
    {
        title:"Education",
        id: "education",
        content:(
            <ul className='list-disc pl-2'>
                <li>Addis Ababa Institute of Technology</li>
                <li>Africa to Silicon Valley</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content:(
            <ul className='list-disc pl-2'>
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                <li>Dolor, dolorem architecto omnis repellendus laboriosam .</li>
            </ul>
        )
    }
]
const AboutSection = () => {
    const [tab,setTab]=useState('skills');
    const [isPending,startTransition]=useTransition();

    const handleTabChange=(id)=>{
        startTransition(()=>{
            setTab(id);
        });
    };
    return (
        <section className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src="/images/about-img.jpg" alt="About" width={500} height={500} className='rounded-lg' />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4' >About Me</h2>
                <p className='text-base lg:text-lg'>I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with Javascript, React , HTML ,CSS and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.</p>
                <div className='flex flex-row justify-start mt-8'>
                    <TabButton 
                        selectTab={()=>handleTabChange('skills')} active={tab==='skills'} yy>
                            {" "}
                            Skills {" "}
                    </TabButton>
                    <TabButton 
                        selectTab={()=>handleTabChange('education')} active={tab==='education'} yy>
                            {" "}
                            Education {" "}
                    </TabButton>
                    <TabButton 
                        selectTab={()=>handleTabChange('certifications')} active={tab==='certifications'} yy>
                            {" "}
                            Certifications {" "}
                    </TabButton>
                </div>
                <div className='mt-8'>{TAB_DATA.find((t) =>t.id ===tab).content}</div>
            </div>
            </div>
        </section>
        
    )
}

export default AboutSection
