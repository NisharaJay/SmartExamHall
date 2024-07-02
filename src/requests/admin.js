
const localapi='https://d206-2402-d000-a400-4266-458e-cb07-e111-57aa.ngrok-free.app'

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
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
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