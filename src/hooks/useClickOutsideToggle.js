import { useEffect, useRef, useState } from 'react';

const useClickOutsideToggle = () => {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null); // a variable that will hold a reference to the hamburger icon
  /*
    Handles user click away from the hamburger menu
    Class 'exp' was applied to user avatar & navbar dropdown menu,
    if clicked on either of them the navbar won't collapse
  */
 useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside ALL refs
      const refsToCheck = [ref, ...extraRefs];
      const clickedInside = refsToCheck.some(r => r.current && r.current.contains(event.target));
      if (!clickedInside) {
        setExpanded(false);
      }
    };

    document.addEventListener('mouseup', handleClickOutside);
    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
    };
  }, [ref]);

  return { expanded, setExpanded, ref };
};

export default useClickOutsideToggle;
