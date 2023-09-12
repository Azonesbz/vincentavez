const TimelineProps = ({date, title, children}) => {
    return (
        <>
            <div className="flex justify-between w-[500px]">
                
                <div className="h-16 w-16 bg-black translate-x-[-50%] rounded-full flex flex-col items-center justify-center text-white p-2">
                    <p>{date}</p>
                </div>
                <div className="bg-[#000249] text-white p-5 w-[300px] rounded-3xl shadow-md shadow-[#000249]">
                    <h3>{title}</h3>
                    {children}                
                </div>
            </div>
        </>
    )
}

export default TimelineProps