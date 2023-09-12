const Timeline = ({className, children}) => {
    return (
        <>
            <div className={`min-h-full min-w-full relative flex flex-col items-center ${className}`}>
                <div className="w-1 h-[600px] top-0 flex flex-col bg-black gap-10">
                    {children}
                </div>
            </div>
        </>
    )
}

export default Timeline