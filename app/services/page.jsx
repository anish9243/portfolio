// pages/services.jsx or app/services/page.jsx (adjust depending on your project structure)

"use client";  // This line tells Next.js that this component should be treated as a Client Component

import React, { useState, useEffect } from "react";
import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch('/api/services');
        if (!res.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await res.json();
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
        <div className="container mx-auto">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
                {services.map((service, index) => (
                    <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                        <div className="w-full flex justify-between items-center">
                            <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                            <Link href="/contact" className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                                <BsArrowDownRight className="text-primary text-3xl" />
                            </Link>
                        </div>
                            {/* title */} 
                        <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{service.title}</h2>
                            {/* description */}
                        <p className="text-white/60">{service.description}</p>
                            {/* border */}
                            <div className=' border-b border-white/20 w-full'></div>
                    </div>
                ))}
            </motion.div>
        </div>
    </section>
  );
};

export default Services;
