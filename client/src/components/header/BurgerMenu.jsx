import React, { createContext, useContext, useState } from 'react';

const BurgerMenuContext = createContext(null);

export function useBurgerMenu() {
    return useContext(BurgerMenuContext);
  }
  
export function BurgerMenuProvider({ children }) {
const [isOpen, setIsOpen] = useState(false);

return (
    <BurgerMenuContext.Provider value={{ isOpen, setIsOpen }}>
    {children}
    </BurgerMenuContext.Provider>
);
}


const BurgerMenu = () => {
    const { isOpen, setIsOpen } = useBurgerMenu();

  return (
    <div 
      className={`h-8 w-10 relative flex flex-col justify-between cursor-pointer sm:hidden z-50
                  ${isOpen ? 'open' : ''}`} 
      onClick={() => setIsOpen(!isOpen)}
    >
      <span 
        className={`h-1 w-full bg-blue-200 transform transition-transform rounded 
                    ${isOpen ? 'rotate-45 translate-y-[0.9rem]' : ''}`} 
      />
      <span 
        className={`h-1 w-full bg-blue-200 transform transition-transform rounded 
                    ${isOpen ? 'opacity-0' : ''}`} 
      />
      <span 
        className={`h-1 w-full bg-blue-200 transform transition-transform rounded 
                    ${isOpen ? '-rotate-45 -translate-y-[0.9rem]' : ''}`} 
      />
    </div>
  );
}

export default BurgerMenu;