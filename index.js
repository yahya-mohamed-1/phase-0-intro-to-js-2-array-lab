// Create cats array
let cats = ["Milo", "Otis", "Garfield"]

// Create destructivelyAppendCat function
function destructivelyAppendCat(name){
    cats.push('Ralph')
}

// Create destructivelyPrependCat function
function destructivelyPrependCat(name){
    cats.unshift('Bob')
}

// Create destructivelyRemoveLastCat function
function destructivelyRemoveLastCat(){
    cats.pop()
}

// Create destructivelyRemoveFirstCat function
function destructivelyRemoveFirstCat(){
    cats.shift()
}

// Create appendCat function
function appendCat(name = 'Broom'){
    let myNewArray = [...cats, name]
    return myNewArray
}

// Create prependCat(name)
function prependCat(name){
    let myNewArray = [name, ...cats]
    return myNewArray
}

// Create removeLastCat function
function removeLastCat(){
    let myNewArray = cats.slice(0,2)
    return myNewArray
}

// Create removeFirstCat function
function removeFirstCat(){
    let myNewArray = cats.slice(1)
    return myNewArray
}