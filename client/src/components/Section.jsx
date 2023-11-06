const Section = ({title, children, props}) => {
    return (
        <section className="py-10 px-2 lg:px-48 relative" {...props}>
        <svg className="min-w-full min-h-full absolute top-0 left-0 opacity-25 z-0"> {/* Spécifiez une largeur et une hauteur pour le motif */}
          <pattern id="pattern-12" patternUnits="userSpaceOnUse" width={20} height={20}>
            <path
              d="M4,0 l0,8 M0,4 l8,0"
              stroke="#000000"
              style={{ stroke: 'var(--pattern-channel-1, #000000)' }}
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#pattern-12)" /> {/* Remplissez un rectangle avec le motif */}
        </svg>
        <h2 className="text-center text-5xl font-bold relative z-10">{title}</h2>
        <div className="mt-10 relative z-10">{children}</div>
      </section>
    );
}

export default Section