"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+1) 437 933 8739',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'ravipatel9243@gmail.com',
  },
  {
    icon: <FaMapMarkedAlt />,
    title: 'Address',
    description: 'Toronto, ON, Canada',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Handle input field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle select field changes
  const handleSelectChange = (value) => {
    setFormData({ ...formData, service: value });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Accessing formData properties correctly from state
    const { email, firstname, lastname, phone, service, message } = formData;

    // Properly structuring the POST data
    const postData = {
        email, 
        name: `${firstname} ${lastname}`, // Assuming you want to send full name
        subject: `Service Request: ${service}`, // Example of how you might want to set the subject
        message
    };

    try {
        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        });

        const result = await response.json();
        console.log(result)
        if (response.ok) {
            console.log('Success:', result);
            setStatus("Message sent successfully!");
            setFormData({
                firstname: "",
                lastname: "",
                email: "",
                phone: "",
                service: "",
                message: "",
            }); // Resetting form after successful submission
        } else {
            throw new Error(result.error || 'Something went wrong');
        }
    } catch (error) {
        console.error('Error:', error.message);
        setStatus("Failed to send message. Error: " + error.message);
    }
};
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Contact Form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                I'm excited to collaborate on your project. Please fill out the form below, and I'll get back to you shortly.
              </p>
              {/* Input Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="firstname"
                  type="text"
                  placeholder="Firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="lastname"
                  type="text"
                  placeholder="Lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Service Selection */}
              <Select name="service" onValueChange={handleSelectChange} required>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                    <SelectItem value="Logo Design">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* Message Textarea */}
              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Type your message here."
                value={formData.message}
                onChange={handleChange}
                required
              />
              {/* Submit Button */}
              <Button size="md" className="max-w-40" type="submit">
                Send message
              </Button>
              {/* Status Message */}
              <p className="text-white/60 mt-4">{status}</p>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
