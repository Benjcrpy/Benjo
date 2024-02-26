"use client";

import React from 'react'
import { useState } from 'react'; 

const Contact = () => {

    const [loading, setLoading] = useState(false);

    async function handleSubmit(event: any){
        event.preventDefault();
        setLoading(true);

        const data = {
            name: String(event.target.name.value),
            email: String(event.target.email.value),
            message: String(event.target.message.value),
        };

        const response = await fetch ("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application.json",
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            console.log("Message sent successfuly");
            setLoading(false)
            event.target.name.value = "";
            event.target.email.value = "";
            event.target.message.value = "";
        }
        if (!response.ok) {
            console.log("Error send messages")
            setLoading(false)
        }
    }


  return (
    <div className='bg-slate-900 pt-[4rem] md:pt-[8rem] pb-[5rem]' id='contact'>
        <h1 className='heading font-fourth'>Contact<span className='text-yellow-700'> ME! </span> 
        </h1>
        <form onSubmit={handleSubmit}>
            <div className='w-full flex flex-col mx-auto max-w-2xl px-4 my-10'>
            <label htmlFor='name' className='text-slate-300 font-bold font-secondary'>
                Name:
            </label>
            <input 
            type='text'
            required
            minLength={3}
            maxLength={150}
            autoComplete="off" 
            id='name' 
            className='rounded-sm p-4 bg-gray-50 border-gray-600'/>
            </div>

            <div className='w-full flex flex-col mx-auto max-w-2xl px-4 my-10'>
            <label htmlFor='email' className='text-slate-300 font-bold font-secondary'>
                Email:
            </label>
            <input 
            type='email'
            required
            minLength={5}
            maxLength={150}
            autoComplete="off" 
            id='email' className='rounded-sm p-4 bg-gray-50 border-gray-600'/>
            </div>

            <div>
            <label htmlFor='message' className='text-slate-300 font-bold font-secondary w-full flex flex-col mx-auto max-w-2xl px-4 my-10'>
                Message:
            </label>
            <textarea 
            rows={4}
            required
            minLength={10}
            maxLength={500}
            name='message'
            className='font-secondary p-4 bg-gray-50 border-gray-600 w-full flex flex-col mx-auto max-w-2xl px-4 my-10 rounded-sm'/>  
            </div>
            <button type='submit' disabled={loading} className='px-4 py-2 w=50 bg-cyan-700 disabled:bg-cyan-800 disabled:text-gray-400 text-white font-medium flex flex-col mx-auto max-w-2xl my-2 rounded-sm'>
                Submit Message
            </button>
        </form>
    </div>
  )
}

export default Contact
