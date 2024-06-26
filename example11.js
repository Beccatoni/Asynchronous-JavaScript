function fetchToDo(url) {
    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    
    // Configure it: GET-request for the URL
    xhr.open('GET', url, true);
    
    // Set up a function to handle the response data when the request completes
    xhr.onreadystatechange = function() {
        // Only run if the request is complete
        if (xhr.readyState === 4) {
            // Check if the request was successful
            if (xhr.status >= 200 && xhr.status < 300) {
                // Parse and log the response data
                try {
                    const data = JSON.parse(xhr.responseText);
                    console.log(data);
                } catch (e) {
                    console.error('Error parsing JSON:', e);
                }
            } else {
                // Log an error if the request was not successful
                console.error(`Error: ${xhr.status} - ${xhr.statusText}`);
            }
        }
    };
    
    // Set up a function to handle network errors
    xhr.onerror = function() {
        console.error('Network error or invalid URL.');
    };
    
    // Send the request
    xhr.send();
}

// Call the function with the provided URL
fetchToDo('https://jsonplaceholder.typicode.com/todos/1');
