let user = {}
console.log('user', user)

user = {
    address: {
        street: 'Random Street Value'
    }
}

console.log('user', user)
console.log('address', user.address)
console.log('colony', user.address.colony ?.municipality)

user = {
    address: {
        street: 'Random Street Value',
        colony: {
            municipality: '1'
        }
    }
}

console.log('colony', user.address.colony?.municipality)