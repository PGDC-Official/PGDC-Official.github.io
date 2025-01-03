import { useState, useEffect } from "react";

/**
 * Returns the width of the viewport
 *
 * @returns {Object} The width of the viewport
 */
function useViewport() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return {
    width,
  };
}



export default useViewport;
