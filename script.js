const data1 = document.getElementById('datas');
const user = document.getElementById('user')

// get request
fetch('https://reqres.in/api/users')
.then(res =>res.json())
.then(data=> {
    console.log(data)
//     let users = data.forEach(element => {
//         console.log(element.name)
//  });
     data1.textContent = data.data[0].first_name

 console.log('We have the following users: ', users);
    })
.catch(error => {
    console.log(error)
})


// https://jsonplaceholder.typicode.com/todos/

// post request
const newUser = JSON.stringify(
    {
        name: 'Becca',
        job: 'Developer'
     }
     
) 
fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers:{
    'Content-Type':'application/json'
    },
    body: newUser
})
.then(res => {
    if(!res.ok){
        console.log('Problem');
        return
    }
     
    return res.json();
})
.then(data=> console.log(`User added successfully: ${data.name}`))
.catch(error => {
    console.log('Error fetching: ',error)
})



// PUT
// fetch





// error handling using event listeners


const  myElement = document.createElement('p');

const  displayError = () =>{
    if(!user){
      const errorEvent = new CustomEvent('errorOccurred', {detail: {message:'An error occurred'}});
      document.dispatchEvent(errorEvent);
    }

    setInterval(displayError, 1000);

    document.addEventListener('errorOccurred', (e)=>{
        myElement.textContent = e.detail.message
    })
}



