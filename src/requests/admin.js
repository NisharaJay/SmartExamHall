export const loginAdmin = async(userId,password)=>{
    try {
        const response = await fetch('https://e0d2-2401-dd00-10-20-38fd-4990-5ba2-38d8.ngrok-free.app/api/v1/admin/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ userId, password }),
          credentials: 'include' // Include cookies in the request
        });
    
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        const data = response.status;
        console.log(data);
        return data;
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
}