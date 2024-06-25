const promise = new Promise((resolve, reject) => {
    console.log("In promise 1");
    setTimeout(() => {
        console.log('timerStart');
        resolve('success')
        console.log('timerEnd');
    }, 0)
    console.log("In promise 2");
})

promise.then((res) => {
    console.log('In promise 4');
})

console.log("In console 4");
