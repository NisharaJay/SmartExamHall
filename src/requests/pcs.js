export const getAllPcs = async () => {
  try {
    const response = await fetch('https://d206-2402-d000-a400-4266-458e-cb07-e111-57aa.ngrok-free.app/api/v1/pcs', {
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
    // console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching PCs:', error);
    return null; // Return null or handle the error as needed
  }
};


export const resetAllPcs = async () => {
  try {
    const response = await fetch('https://d206-2402-d000-a400-4266-458e-cb07-e111-57aa.ngrok-free.app/api/v1/pcs', {
      method: 'PUT',
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
    console.log('Reset all PCs response:', data);
    return response.status;
  } catch (error) {
    console.error('Error resetting all PCs:', error);
    throw error;
  }
};


export const revokePC = async (pcId) => {
  try {
    const response = await fetch('https://d206-2402-d000-a400-4266-458e-cb07-e111-57aa.ngrok-free.app/api/v1/fingerprints/revoke', { // Replace with your actual API URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ pcId })
    });

    // if (!response.ok) {
    //   throw new Error(`HTTP error! status: ${response.status}`);
    // }

    const responseData = await response.json();
    console.log(responseData);
    return {
      statusCode: response.status,
      data: responseData
    };
  } catch (error) {
    console.error('Error revoking PC:', error);
    throw error;
  }
};
