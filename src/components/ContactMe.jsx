import React, {useRef} from 'react'
import {Link as RouterLink} from 'react-router-dom';
import { IoIosReturnLeft } from "react-icons/io";
import emailjs from '@emailjs/browser';
import { Bounce, ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ContactMe = () => {
    const form = useRef();
    const notify = () => {
      toast.success("Response Sent");
    }
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_s8227vy', 'template_bc3qbuw', form.current, {
            publicKey: 'mOJmcu7cBr_7msCNv',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              notify();
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <div>
        <RouterLink to="/" className=' inline-block'>
            <IoIosReturnLeft size="3rem" className='shadow-2xl bg-slate-100 border-2 border-slate-200 rounded-lg m-5'></IoIosReturnLeft>
        </RouterLink>
        <p className='text-4xl font-bold text-slate-700 text-center'>Feel free to send me a message!👇</p>
        <div className='flex justify-center'>
            <form ref={form} onSubmit={sendEmail} className=' flex flex-col w-full max-w-lg bg-slate-100 shadow-2xl rounded-lg p-5 m-5 space-y-5'>
                <div className='flex flex-col'>
                    <label>Your Name</label>
                    <input type="text" name="user_name" className='rounded shadow' required/>                    
                </div>
                <div className='flex flex-col'>
                    <label >Your Email Address</label>
                    <input type="email" name="user_email" className='rounded shadow' required/>                    
                </div>
                <div className='flex flex-col'>
                    <label >Your Message</label>
                    <textarea rows={4} name="message" className='rounded shadow' required/>                    
                </div>

                <button className=' bg-blue-600 p-2 w-min rounded-lg shadow-2xl text-white hover:bg-blue-800 transition-all text-lg' type="submit" >Submit</button>
            </form>              
        </div>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
    </div>

  )
}

export default ContactMe