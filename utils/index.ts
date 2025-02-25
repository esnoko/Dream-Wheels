export async function fetchCars() {
    // Set the required headers for the API request
    const headers: HeadersInit = {
      'x-rapidapi-key': 'efe6b207cbmsh1cf92dbff5c67b3p1c5bf4jsn5ae74c9f84c8',
      'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    };
  
    // Set the required headers for the API request
    const response = await fetch(
      `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=Corolla`,
      {
        headers: headers,
      }
    );
  
    // Parse the response as JSON
    const result = await response.json();
  
    return result;
  }

  