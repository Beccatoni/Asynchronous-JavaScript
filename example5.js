console.log("start");
const fn = () =>
    new Promise((resolve, reject) => {
        console.log("In promise");
        resolve("success");
    });

console.log("middle");

fn().then((res) => {
    console.log(res);
});


console.log('end')