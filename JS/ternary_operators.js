const condition = false
const value1 = 1
const value2 = 2

/* let result:

if (condition) {
    result = 3
} else {
    result = 0
} */

let result = condition ? 3 : 0
console.log('result', result)

const age = 18
let message = (age < 3) ? 'Hello there you small one' : 
(age > 18) ? 'Hello' : 
(age > 100) ? 'Ohh wow' : 'Error not valid age';
console.log(message)