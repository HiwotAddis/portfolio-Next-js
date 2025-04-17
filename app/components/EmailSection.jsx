"use client"
import React, { useState } from 'react'
import GithubIcon from "../../public/github.svg"
import LinkedinIcon from "../../public/linkedin.svg"
import Link from 'next/link'
import Image from 'next/image'
import RotatingGlobe from './RotatingGlobe'

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('https://formspree.io/f/xanezegy', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    _replyto: e.target.email.value,
                    email: e.target.email.value,
                    subject: e.target.subject.value,
                    message: e.target.message.value
                })
            });

            if (response.ok) {
                setEmailSubmitted(true);
                e.target.reset();
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section id="contact" className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
            <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div>
            <div className='z-10 flex flex-col items-start'>
                <h5 className='text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 my-2'>Let's Connect</h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    {" "}
                    I'm currently looking for new opportunities, my inbox is always open.
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <div className='socials flex flex-row gap-2 mb-6'>
                    <Link href="https://github.com/HiwotAddis" target="_blank" rel="noopener noreferrer">
                        <Image src={GithubIcon} alt='Github Icon' width={32} height={32} className="invert" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/hiwot-addis-453139286/" target="_blank" rel="noopener noreferrer">
                        <Image src={LinkedinIcon} alt='Linkedin Icon' width={32} height={32} className="invert" />
                    </Link>
                </div>
                {/* Rotating 3D Globe - only show on md+ screens */}
                <div className="hidden md:block w-full">
                    <RotatingGlobe />
                </div>
            </div>
            <div>
                <form className='flex flex-col' onSubmit={handleSubmit}>
                    <div className='mb-6'>
                        <label htmlFor="email" className='text-white block mb-2 text-sm font-medium'>
                            Your email
                        </label>
                        <input 
                            name="email"
                            type="email" 
                            id="email" 
                            required 
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            placeholder='your@email.com'
                        />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor="subject" className='text-white block mb-2 text-sm font-medium'>
                            Subject
                        </label>
                        <input 
                            name="subject"
                            type="text" 
                            id="subject" 
                            required 
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            placeholder='Just saying hi'
                        />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor="message" className='text-white block mb-2 text-sm font-medium'>
                            Message
                        </label>
                        <textarea
                            name="message" 
                            id="message"
                            required
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 min-h-[120px]'
                            placeholder='Your message here...'
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className='bg-gradient-to-r from-purple-400 to-pink-600 text-white font-medium py-2.5 px-5 rounded-lg w-full hover:opacity-90 transition-opacity disabled:opacity-50'
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                    {emailSubmitted && (
                        <p className='text-green-500 text-sm mt-2 text-center font-medium'>
                            Message sent successfully! I'll get back to you soon.
                        </p>
                    )}
                </form>
            </div>
        </section>
    )
}

export default EmailSection
