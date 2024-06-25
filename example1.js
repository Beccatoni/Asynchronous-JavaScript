// if the vvip takes long

Promise.resolve().then(()=>{
    console.log('Promise callback 1');
})

Promise.resolve().then(()=>{
    console.log('Promise callback 2');
})

process.nextTick(()=>{
    console.log('nextTick callback 1')
    process.nextTick(()=>{
        console.log('nextTick callback from the callback 1');
    })

})

process.nextTick(()=>{
    console.log('nextTick callback 2')
    
})