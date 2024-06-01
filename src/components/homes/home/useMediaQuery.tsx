"use client"
import { useEffect, useState } from 'react';

// Define the type for the query parameter
function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQueryList = window.matchMedia(query);
      const documentChangeHandler = () => setMatches(mediaQueryList.matches);

      mediaQueryList.addListener(documentChangeHandler);
      documentChangeHandler();
      return () => mediaQueryList.removeListener(documentChangeHandler);
    }
  }, [query]);

  return matches;
}

export default useMediaQuery;
