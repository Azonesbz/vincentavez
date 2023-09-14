import React from 'react';

const Skill = ({children, title}) => {
    return (
        <div className='flex flex-col min-h-min h-min col-span-12 lg:col-span-4 p-5 rounded-3xl'>
            <h3 className='text-center font-semibold text-2xl bg-gradient-to-r from-blue-400 to-green-500 text-transparent bg-clip-text'>{title}</h3>
            <ul className="flex flex-col items-center text-center mt-3 font-light font-Kanit text-xl">
                {children}
            </ul>
        </div>
    );
}

export default Skill;