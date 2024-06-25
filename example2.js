// when there is a new vvip

Promise.resolve().then(()=>{
    console.log('Promise callback 1');

    process.nextTick(()=>{
        console.log('NextTick callback from the Promise 1');
    })
})

Promise.resolve().then(() => {
    console.log('Promise callback 2');
  })
  
  process.nextTick(() => {
    console.log('nextTick callback 1');
  })
  
  process.nextTick(() => {
    console.log('nextTick callback 2');
  })