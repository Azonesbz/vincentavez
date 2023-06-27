import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {

    const [state, handleSubmit] = useForm("maygwjey");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    return (
        <>
            <section className='py-24 container'>

                <h1>Contact</h1>
                <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
                    <div className='flex flex-col'>
                        <label htmlFor="email">
                            Email Address
                        </label>
                        <input
                            className='border'
                            id="email"
                            type="email"
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
                            Votre message:
                        </label>
                        <textarea
                            className='border '
                            id="message"
                            name="message"
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                    <button type="submit" disabled={state.submitting}>
                        Submit
                    </button>
                </form>
            </section>
        </>
    );
}

