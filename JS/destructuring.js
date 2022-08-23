let arr=['Luis', 'Esteban', 'Haro']

//const firstName = arr[0]
//const lastName = arr[1]

const [firstName, lastName]=arr
console.log('firstName, lastName', firstName, lastName)

let arr2=['Luis', 'Esteban', 'Haro']

let [a,b,c]='xyz'
let[one, two, three]=new Set([1,2,3])
console.log('one',one)

let user = {
    userFirstName: 'Fernanda',
    userLastName: 'Avalos'
}

const {userFirstName} = user
console.log('User first name', userFirstName)

const {userLastName:apellido, userPhone='555555'}=user
//const apellido=user.userLastName
console.log('apellido, userPhone', apellido, userPhone)

const user2 = {
    ...user, //Todo lo que tenga user
    //Spread operator
    nationality: 'Mex'
}

console.log('user2', user2)

const {nationality, ...rest}=user2 //Todo sin nacionalidad
console.log('rest', rest)

const item = {
    itemName: 'Casa',
    itemDescription: {
        size: 14,
        color: "red"
    }
}

console.log('item', item)
const {itemDescription:{size, color:clr}}=item
console.log('size', size)
console.log('color', clr)
console.log('item', item)


const myFunction = ({itemName}) => {
    console.log('itemName', itemName)
}
console.log('myFunction(user)', myFunction(item))