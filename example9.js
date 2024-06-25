const timer1 = setTimeout(() => {
    console.log('timer 1')
    const promise1 = Promise.resolve().then(() => {
        console.log('promise 1');
    }, 0)
})

const timer2 = setTimeout(() => {
    console.log('timer2')
}, 0);