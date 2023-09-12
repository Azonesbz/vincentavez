import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';
import FormModal from '../modals/formModal';
import { Link } from 'react-router-dom';

function Success({ isOpen }) {
    return (
        <>
            <FormModal isOpen={isOpen} width={'w-full'} height={'h-72'}>
                <div className='h-full w-full flex flex-col items-center justify-center p-10'>
                    <div className='flex flex-col items-center'>
                        <h2 className="text-2xl text-center text-gray-900 dark:text-white">
                            Votre message à été envoyé !
                        </h2>
                        <h3 className='text-center text-2xl'>
                            Vous recevrez une réponse dans un délai de une semaine.
                        </h3>
                    </div>
                    <a href="."
                        className='bg-blue-700 text-xl rounded-full py-1 px-3 mt-2'
                    >
                        OK
                    </a>
                </div>
            </FormModal>
        </>
    )
}

export default function Contact() {
    const [state, handleSubmit] = useForm("maygwjey");

    return (
        <>
            <section className='py-24 px-48' id='contact'>

                <h2 className="text-center text-5xl font-bold">Contact</h2>
                <form className='flex flex-col justify-center items-center gap-5 mt-10' onSubmit={handleSubmit}>
                    <div className='flex flex-col w-1/3'>
                        <input
                            className='focus:border-l max-w-2xl focus:ml-5 focus:pl-5 pl-2 py-2 border-black outline-none duration-100 shadow rounded-tr-3xl'
                            placeholder='Email'
                            id="email"
                            type="email"
                            minLength={5}
                            maxLength={100}
                            name="email"

                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </div>
                    <div className='flex flex-col w-1/3'>
                        <textarea
                        placeholder='Message'
                            className='focus:border-l focus:ml-5 focus:pl-5 px-2 py-2 border-black outline-none duration-100 shadow rounded-r-3xl h-48'
                            minLength={5}
                            id="message"
                            name="message"
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                    <button type="submit" disabled={state.submitting} className='mt-5 mr-full w-48 bg-[#000249] text-white py-2 px-4 rounded-3xl'>
                        Envoyer
                    </button>
                </form>

                <Success isOpen={state.succeeded} />
            </section>
        </>
    );
}

