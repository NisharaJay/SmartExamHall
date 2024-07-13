export const setMode = async(mode)=>{
    try {
        const response = await fetch('https://bcca-112-135-76-91.ngrok-free.app/api/v1/fingerprints/mode', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
             "ngrok-skip-browser-warning": "69420"
          },
          body: JSON.stringify({ "mode":mode }),
          credentials: 'include' // Include cookies in the request
        });
        const res = await response.json()
        console.log(res);
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