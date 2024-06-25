console.log("start");
Promise.resolve('In Promise 1').then((res) => {
    console.log(res);
})

Promise.resolve('In promise 2').then((res) => {
    console.log(res);
})

console.log('end')