/*
Create a function called fetchUserTodos that uses the Promise.all() method to fetch users 
and todos concurrently from the provided API endpoints and combine them based on the userId.
 The function should return a promise that resolves with the combined data.

Users endpoints https://jsonplaceholder.typicode.com/users
Todos endpoints https://jsonplaceholder.typicode.com/todos

The returned promise should resolve into an array of users, where each user object 
has a new key todos. This key should contain an array of todos that belong to the user,
determined by matching the userId of the todo with the id of the user.


 . function 
 .. fetch for the user using their user id
 .. fetch for the user's todos using their id
 ..return an object thet contains the property which contains array of todos of a user
*/


const  fetchUserTodos = async () => {
   try {

    const [userResponse, todosResponse] = await Promise.all([
        fetch(`https://jsonplaceholder.typicode.com/users`),
        fetch(`https://jsonplaceholder.typicode.com/todos`)
    ])

    const users = await userResponse.json();
    const todos = await todosResponse.json();

    const userWithTodos = users.map(user => {
        user.todos = todos.filter(todo => todo.userId === user.id);
        return user
    })

    console.log(userWithTodos);
    return userWithTodos;
    
   } catch (error) {
    console.error(`Error fetching data: ${error}`);
    throw error
   }
}


fetchUserTodos()