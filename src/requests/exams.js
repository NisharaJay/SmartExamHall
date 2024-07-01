

export const getAttendence = async (degree,date)=>{
    const url = 'https://889d-2402-d000-a400-4266-458e-cb07-e111-57aa.ngrok-free.app/api/v1/attendence';

    const requestBody = {
      degree: degree,
      date: date
    };
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        "ngrok-skip-browser-warning": "69420"
          
        },
        body: JSON.stringify(requestBody),
        credentials: 'include'
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
    //   console.log('Attendance data:', data);
      return data;
    } catch (error) {
      console.error('Error fetching attendance:', error);
      throw error;
    }
}