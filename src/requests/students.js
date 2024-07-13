export const getAllStudents = async () => {
    const url = 'https://bcca-112-135-76-91.ngrok-free.app/api/v1/students';
    
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

  export const getCurrentAttendence = async (examId) => {
    const url = `https://bcca-112-135-76-91.ngrok-free.app/api/v1/attendence/getcurrent`;
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "ngrok-skip-browser-warning": "69420"
        },
        credentials: 'include',
        body: JSON.stringify({ examId })
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data);
      return data; // Adjust this based on the actual response structure
    } catch (error) {
      console.error('Error fetching current exam data:', error);
      return null; // Return null or handle the error as needed
    }
  };


  