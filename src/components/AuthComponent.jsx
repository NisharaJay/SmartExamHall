import React, { useEffect, useState } from 'react';
import { checkSession } from '../requests/admin';
import { Outlet, Navigate } from 'react-router-dom';

export default function AuthComponent() {
  const [valid, setValid] = useState(null); // Start with null to indicate loading

  useEffect(() => {
    const checkSessionInterval = async () => {
      const isValid = await checkSession();
      // console.log(isValid);
      setValid(isValid);
    };

    // Initial check when component mounts
    checkSessionInterval();

    // Check session validity every 10 seconds
    const intervalId = setInterval(checkSessionInterval, 10000);

    // Cleanup on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Show a loading indicator while the session is being checked
  if (valid === null) {
    return <div>Loading...</div>;
  }

  return valid ? <Outlet /> : <Navigate to="/login" />;
}
