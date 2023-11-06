const Section = ({title, children, props}) => {
    return (
        <section className="py-10 mt-10 px-2 lg:px-48" {...props}>
            <h2 className="text-center text-5xl font-bold">{title}</h2>
            <div className="mt-10">
                {children}
            </div>
        </section>
    )
}

export default Section