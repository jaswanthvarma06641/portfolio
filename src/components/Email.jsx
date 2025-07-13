/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from "styled-components";

const Email = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(import.meta.env.VITE_YOUR_SERVICE_ID, import.meta.env.VITE_YOUR_TEMPLATE_ID, form.current, {
          publicKey: import.meta.env.VITE_YOUR_PUBLIC_KEY,
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  
    return (
        <div className='m-1'>
            <form ref={form} onSubmit={sendEmail} id="email" className='lg:w-1/3 md:w-1/2 bg-black flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 mr-80'>
                <label className="leading-7 text-sm">Name</label>
                <input type="text" name="from_name" className="w-full text-black rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200  outline-none  py-1 px-3 leading-8  duration-200 ease-in-out" />
                <label className="leading-7 text-sm ">Email</label>
                <input type="email" name="from_email" className="w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                <label className="leading-7 text-sm">Message</label>
                <textarea name="message" className="w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32  outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"/>
                <button type="submit" value="Send" className="mt-4 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Send</button>
            </form>
        </div>
    );
}

export default Email;
