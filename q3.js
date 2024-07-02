// 11. Write a function that chains two Promises together, where the second Promise depends on the result of the first.

function promiseChaining(promise1, promise2){
    return promise1.then((result1)=> {
        console.log(result1);
        return promise2(result1).then(result2=> console.log(result2));
    })
        
        
}


const pro1 = new Promise((resolve)=>{
    resolve('promise one output');
})

const pro2 = (promiseResult) => new Promise((resolve)=>{
    resolve(`promise two output, here is the result recieved:  ${promiseResult}`)
})

promiseChaining(pro1, pro2)