export const getAllStudents = async () => {
    const url = 'https://d206-2402-d000-a400-4266-458e-cb07-e111-57aa.ngrok-free.app/api/v1/students';
    
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
           "ngrok-skip-browser-warning": "69420"
        },
        credentials:'include'
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data.nbhits; // Assuming `nbhits` is a key in the response JSON
    } catch (error) {
      console.error('Error fetching students:', error);
      return null; // Return null or handle the error as needed
    }
  };
  