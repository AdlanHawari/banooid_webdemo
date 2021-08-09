import React, { useEffect, useRef, useState } from 'react'

export default function UseComponentVisible(initialIsVisible) {

    const [isComponentVisible, setIsComponentVisible] = useState(
        initialIsVisible
      );
      const ref = useRef(null);
    
      const handleHideDropdown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          setIsComponentVisible(false);
        }
      };
    
      const handleClickOutside = event => {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsComponentVisible(false);
        }
      };
    
      useEffect(() => {
        document.addEventListener("keydown", handleHideDropdown, true);
        document.addEventListener("click", handleClickOutside, true);
        console.log("ref: ",ref.current)
        return () => {
          document.removeEventListener("keydown", handleHideDropdown, true);
          document.removeEventListener("click", handleClickOutside, true);
        };
      });
    
    return { ref, isComponentVisible, setIsComponentVisible };
}
