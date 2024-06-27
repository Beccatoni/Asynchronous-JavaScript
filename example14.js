function *createFlow(){
    const num = 10;
    const newNum = yield num
    yield 5 + newNum
    yield 6
}

const returnNextElement = createFlow()
const element1 = returnNextElement.next()
const element2 = returnNextElement.next(2)
const element3 = returnNextElement.next();

console.log(element1, element2, element3);