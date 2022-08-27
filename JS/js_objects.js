let user = {
    name: "Luis",
    age:200,
/*     toString() {
        return `{Name: ${this.name}, age: ${this.age}}`
    } */
}

console.log('user', user)
console.log('user', user.toString)


//Template literals
let templateLiteral = `Hello there my name is ${user.name} and 2 + 2 = ${1+1}`
console.log('template literal', templateLiteral)

let json = JSON.stringify(user) //JSON a string
console.log('json', json)

let unparsedJson = '{"name":"Luis","age":200}'
let newUser = JSON.parse(unparsedJson) //De string a JSON
console.log('newUser.name', newUser.name)
