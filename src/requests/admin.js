
const localapi='https://bcca-112-135-76-91.ngrok-free.app'

export const loginAdmin = async(userId,password)=>{
    try {
        const response = await fetch(`${localapi}/api/v1/admin/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "ngrok-skip-browser-warning": "69420"
          },
          body: JSON.stringify({ userId, password }),
          credentials:'include'
        });
        const res= await response.json()
        console.log(res);
        
    
        const data = response.status;
        // console.log(data);
        return data;
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
}


export const checkSession=async()=>{
  try {
    const response = await fetch(`${localapi}/api/v1/admin/checkSession`, {
      method: 'GET',
      headers: {
            'Content-Type': 'application/json',
            "ngrok-skip-browser-warning": "69420"
          },
      credentials: 'include' // Include cookies in the request
    });

    if (response.status === 401) {
      const res = await response.json()
      console.log(res);
      throw new Error('Session expired');
    }

    if (response.status === 200) {
      // console.log(response);
      const data = await response.json();
      // console.log(data.valid);
      return data.valid;
    }else{
      throw new Error(`${response.status}: ${response}`)
    }

   
  } catch (error) {
    console.error('Session check failed:', error);
    return false;
  }
}

export const onLogout = async () => {
  try {
    const response = await fetch('/logout', {
      method: 'GET',
      credentials: 'include', // Include credentials (cookies) in the request
    });

    if (response.ok) {
      // Logout successful, handle any post-logout actions here
      console.log('Logout successful');
    } else {
      // Handle unsuccessful logout
      const errorData = await response.json();
      console.error('Logout failed:', errorData.message);
    }
  } catch (error) {
    console.error('An error occurred during logout:', error);
  }
};