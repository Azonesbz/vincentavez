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
            <section className='py-10 lg:py-20 lg:px-48' id='contact'>

                <h2 className="text-center text-5xl font-bold">Contact</h2>
                <form className='flex flex-col justify-center items-start mx-auto lg:w-1/3 mt-10 p-2 text-black bg-[#071952] rounded-3xl' onSubmit={handleSubmit}>
                    <div className='flex flex-col w-full'>
                        <input
                            className='p-3 outline-none duration-100 shadow rounded-t-3xl'
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
                    <div className='flex flex-col w-full'>
                        <textarea
                        placeholder='Message'
                            className='p-3 outline-none duration-100 shadow rounded-b-3xl h-48'
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
                    <button type="submit" disabled={state.submitting} className='mt-5 w-full bg-[#22668D] text-white py-2 px-4 mx-auto rounded-3xl font-semibold'>
                        Envoyer
                    </button>
                </form>

                <Success isOpen={state.succeeded} />
            </section>
        </>
    );
}

