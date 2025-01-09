import React, { useState } from 'react';
import img from '../images/contact-img.jpg';
import { FaRegUserCircle } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name || formData.name.length < 3) {
      newErrors.name = 'Name must be at least 3 characters.';
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address.';
    }
    if (!formData.message || formData.message.length < 5) {
      newErrors.message = 'Message must be at least 5 characters.';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="flex md:flex-row flex-col md:gap-10 items-center">
      <div className="w-full">
        <img src={img} alt="Contact" width="100%" height="100%" />
      </div>
      <div className="w-full">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          {/* Hidden fields for Netlify */}
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />

          <div className="md:px-16 pt-10 pb-16">
            <div className="mb-5">
              <label htmlFor="name" className="block text-sm text-left font-medium">
                Name<span className="text-red-800">*</span>
              </label>
              <FaRegUserCircle size={22} className="text-gray-300 mt-[14px] ml-2 absolute z-10" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
                className="input-style border border-gray-300 rounded-md pl-10 text-sm"
              />
              {errors.name && (
                <div className="text-red-600 text-sm text-left">{errors.name}</div>
              )}
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="block text-sm text-left font-medium">
                Email<span className="text-red-800">*</span>
              </label>
              <MdEmail size={22} className="text-gray-300 mt-[14px] ml-2 absolute z-10" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@gmail.com"
                className="input-style border border-gray-300 rounded-md pl-10 text-sm"
              />
              {errors.email && (
                <div className="text-red-600 text-sm text-left">{errors.email}</div>
              )}
            </div>

            <div className="mb-5">
              <label htmlFor="message" className="block text-sm text-left font-medium">
                Message<span className="text-red-800">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message..."
                className="input-style border border-gray-300 rounded-md h-40 text-sm"
              ></textarea>
              {errors.message && (
                <div className="text-red-600 text-sm text-left">{errors.message}</div>
              )}
            </div>

            <div className="flex mt-4 justify-center">
              <button
                type="submit"
                className="px-12 py-2 text-white bg-orgClr w-full rounded-md font-[500] hover:bg-[#eb6c09] focus:outline-none focus:ring focus:ring-indigo-200"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
