const TimelineProps = ({date, title, children}) => {
    return (
        <>
            <div className="flex justify-between gap-10">
                
                <div className="h-16 w-16 bg-black translate-x-[-50%] rounded-full flex flex-col items-center justify-center text-white p-2">
                    <p>{date}</p>
                </div>
                <div className="bg-[#000249] text-white p-5 w-full rounded-3xl shadow-md shadow-[#000249]">
                    <h3 className='font-semibold text-2xl bg-gradient-to-r from-blue-400 to-green-500 text-transparent bg-clip-text pb-5'>{title}</h3>
                    {children}                
                </div>
            </div>
        </>
    )
}

export default TimelineProps