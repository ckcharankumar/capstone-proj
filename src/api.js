export function fetchAPI(date) {
    return new Promise((resolve, reject) => {
      // Hardcoded time slots for demonstration purposes
      const availableTimes = ["17:00", "18:00", "19:00", "20:00"];
  
      // Simulate an API call by using setTimeout
      setTimeout(() => {
        resolve(availableTimes);
      }, 1000);
    });
  }
  