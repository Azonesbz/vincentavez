import { useEffect, useState } from "react"

const ScrollTopButton = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
        <button className={`p-2 bottom-20 right-20 rounded-full bg-[#071952] duration-500 ${scrollY > window.innerHeight - scrollY ? "fixed opacity-100" : "opacity-0"}`} onClick={() => window.scrollTo(0, 0)}>
            <svg width="30" height="30" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M12.48 19.92a.6.6 0 0 0 .6-.6V5.17l3.775 3.776a.6.6 0 1 0 .85-.85l-4.8-4.8a.6.6 0 0 0-.85 0l-4.8 4.8a.6.6 0 1 0 .85.85L11.88 5.17v14.15a.6.6 0 0 0 .6.6Z" clip-rule="evenodd"></path>
            </svg>
        </button>
    )
}

export default ScrollTopButton