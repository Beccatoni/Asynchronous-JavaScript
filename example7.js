console.log("start");

setTimeout(() => {
    console.log("From set timeout");
}
)
Promise.resolve().then(() => {
    console.log('resolve');
})

console.log("end");