console.log("start");

const promise1 = Promise.resolve().then(() => {
    console.log('Promise 1');
    const timer2 = setTimeout(() => {
        console.log('timer 2');
    }, 0);
})

const timer1 = setTimeout(() => {
    console.log('timer 1');
    const promise2 = Promise.resolve().then(() => {
        console.log('promise 2');
    })
}, 0);

console.log("end");
