const callback = (myFunction) => {
    myFunction()
    console.log('I am a callback')
}

const argumentFunction = () => {
    console.log('Not its me')
}

const argumentFunction2 = () => {
    console.log('I am an impostor')
}

callback(argumentFunction)
callback(argumentFunction2)

/* callback(() => {
    console.log('No its me')
}) */