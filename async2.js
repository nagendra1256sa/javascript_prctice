async function fetchUserDetails(userId) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${userId}`);
      const user = await response.json();
      // Perform additional operations with the retrieved user details and posts
      console.log('User:', user,'first');
      return { "user":user, 'message':true };
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
  
   async function main() {
    try {
      const userDetails = await fetchUserDetails(123);
      // Do something with the user details
      console.log('User details:', userDetails,'second');
    } catch (error) {
      // Handle errors that occurred during fetching user details
      console.error('An error occurred:', error);
    }
  }
  
  main();
  