import React, { useState } from 'react';
import { FaQuoteLeft, FaQuoteRight, FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';

const Testimonial = () => {
    const testimonials = [
        {
            name: 'Shweta Yadav',
            quote: 'Meet Bill Gates, the visionary leader behind Study Next Overseas. With a passion for global education and a deep understanding of the transformative power of studying abroad, Rakesh is committed to empowering students to reach new heights and broaden their horizons.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Bill_Gates_-_2023_-_P062021-967902_%28cropped%29.jpg'
        },
        {
            name: 'Shweta Yadav2',
            quote: 'Meet Bill Gates, the visionary leader behind Study Next Overseas. With a passion for global education and a deep understanding of the transformative power of studying abroad, Rakesh is committed to empowering students to reach new heights and broaden their horizons.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Bill_Gates_-_2023_-_P062021-967902_%28cropped%29.jpg/399px-Bill_Gates_-_2023_-_P062021-967902_%28cropped%29.jpg'
        },
        {
            name: 'Shweta Yadav3',
            quote: 'Meet Bill Gates, the visionary leader behind Study Next Overseas. With a passion for global education and a deep understanding of the transformative power of studying abroad, Rakesh is committed to empowering students to reach new heights and broaden their horizons.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Bill_Gates_-_2023_-_P062021-967902_%28cropped%29.jpg/399px-Bill_Gates_-_2023_-_P062021-967902_%28cropped%29.jpg'
        },
        {
            name: 'Shweta Yadav4',
            quote: 'Meet Bill Gates, the visionary leader behind Study Next Overseas. With a passion for global education and a deep understanding of the transformative power of studying abroad, Rakesh is committed to empowering students to reach new heights and broaden their horizons.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Bill_Gates_-_2023_-_P062021-967902_%28cropped%29.jpg/399px-Bill_Gates_-_2023_-_P062021-967902_%28cropped%29.jpg'
        },
        {
            name: 'Shweta Yadav5',
            quote: 'Meet Bill Gates, the visionary leader behind Study Next Overseas. With a passion for global education and a deep understanding of the transformative power of studying abroad, Rakesh is committed to empowering students to reach new heights and broaden their horizons.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Bill_Gates_-_2023_-_P062021-967902_%28cropped%29.jpg/399px-Bill_Gates_-_2023_-_P062021-967902_%28cropped%29.jpg'
        },
        {
            name: 'Shweta Yadav6',
            quote: 'Meet Bill Gates, the visionary leader behind Study Next Overseas. With a passion for global education and a deep understanding of the transformative power of studying abroad, Rakesh is committed to empowering students to reach new heights and broaden their horizons.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Bill_Gates_-_2023_-_P062021-967902_%28cropped%29.jpg/399px-Bill_Gates_-_2023_-_P062021-967902_%28cropped%29.jpg'
        },
        // Add more testimonials here
    ];

    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const handleNext = () => {
        setCurrentTestimonial((currentTestimonial + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentTestimonial((currentTestimonial - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="p-24 text-center bg-slate-100 text-lg">
            <h3 className="text-blue-950 text-5xl pb-6">Testimonials</h3>
            <p className="text-xl italic">Our students love us! They rave about the outstanding service we provide and how we made their dreams of studying abroad come true. Highly recommended!</p>
            <div className="relative mt-24">
                
                <FaChevronCircleLeft
        className="absolute top-1/2 left-[-48px] text-4xl transform -translate-y-1/2 text-blue-950  rounded-md z-10 cursor-pointer"
        onClick={handlePrev}
      />       <ul className="flex my-24 mx-auto">
        
                {testimonials.slice(currentTestimonial, currentTestimonial + 3).map((testimonial, index) => (
                        <li key={index} className="border border-blue-500 hover:bg-white duration-500 text-blue-500 rounded-md drop-shadow-xl p-6 mx-6 ">
                            <img className=" w-32 h-32 mx-auto rounded-full" src={testimonial.image} alt="Avatar" />
                            <h4 className="text-slate text-2xl my-5">{testimonial.name}</h4>
                            <p>
                                <FaQuoteLeft className='text-xl text-white-500' />
                                {testimonial.quote}
                                <FaQuoteRight className='text-xl text-blue-500' />
                            </p>
                        </li>
                    ))}
                </ul>
                <FaChevronCircleRight
        className="absolute top-1/2 right-[-48px] text-4xl transform -translate-y-1/2 text-blue-950  rounded-md z-10 cursor-pointer"
        onClick={handleNext}
      />
            </div>
        </div>
    );
};

export default Testimonial;
