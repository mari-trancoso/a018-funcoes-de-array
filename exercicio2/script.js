const array = [12, 14, 21, 13, 66, 99, 87, 45]

// 1. A primeira deve retornar um novo array contendo os números múltiplicados por 3, Crie uma `const triplos`, 
// e guarde o valor do array nesta const;

const triplos = array.map((item) => {
    return item*3
})

// const triplos = array.map(item => item*3)
console.log(array)
console.log(triplos)

// 2. A segunda deve retornar um novo array contendo os números divididos por 2. Crie uma `const metades`, e 
// guarde o valor do array nesta const;

const metades = array.map((item) =>{
    return item/2
})

console.log(metades)