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
            <section className='py-24 container' id='contact'>

                <h2>Contact</h2>
                <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
                    <div className='flex flex-col'>
                        <label htmlFor="email">
                            Votre adresse mail
                        </label>
                        <input
                            className='border w-1/3 outline-none py-2 px-2 rounded-sm invalid:text-red-500 valid:text-blue-600'
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
                    <div className='flex flex-col'>
                        <label htmlFor="email">
                            Votre message
                        </label>
                        <textarea
                            className='border outline-none py-2 px-2 rounded-sm'
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
                    <button className='bg-blue-600 py-2 px-4 w-24 rounded-sm' type="submit" disabled={state.submitting}>
                        Envoyer
                    </button>
                </form>

                <Success isOpen={state.succeeded} />
            </section>
        </>
    );
}

