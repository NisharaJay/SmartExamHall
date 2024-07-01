import React, { useEffect } from 'react';
import { checkSession } from '../requests/admin';


export default function  AuthChecker({setIsLoggedIn}) {


  useEffect(() => {
    const checkSessionInterval = async () => {
      const isValid = await checkSession();
      console.log(isValid);
      if (!isValid) {
        setIsLoggedIn(false)
      }
    };

    // Check session validity every minute
    const intervalId = setInterval(checkSessionInterval, 10000);

    // Cleanup on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return null; // This component doesn't render anything
};