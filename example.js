// Knowing the priority among the promise and the nextTick

Promise.resolve().then(()=>{
    console.log('Promise callback 1');
})

Promise.resolve().then(()=>{
    console.log('Promise callback 2');
})

process.nextTick(()=>{
    console.log('nextTick first callback');
})

process.nextTick(()=>{
    console.log('nextTick second callback');
})

// output : 
/*
nextTick first callback
nextTick second callback
Promise callback 1
Promise callback 2
*/
