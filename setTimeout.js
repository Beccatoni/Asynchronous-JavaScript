let timeoutID  = setTimeout(()=>{
    console.log('Hello after 3 seconds!')
}, 3000);
clearTimeout(timeoutID)

console.log('setTimeout was cleared!');
