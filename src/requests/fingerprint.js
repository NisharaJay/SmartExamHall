export const setMode = async()=>{
    try {
        const response = await fetch('https://d206-2402-d000-a400-4266-458e-cb07-e111-57aa.ngrok-free.app/api/v1/fingerprints/mode', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
             "ngrok-skip-browser-warning": "69420"
          },
          body: JSON.stringify({ "mode":1 }),
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