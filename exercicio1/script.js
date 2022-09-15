// Crie duas funcões que recebem como parâmetro um objeto.

// Chame a funcão 3, passando como argumentos o objeto passado no arquivo `script.js`, e a funcão 1.
// Repita o processo para a funcão 2

const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}


// 1. A primeira deve retornar o objeto, alterando as propriedades dele para que fiquem em CAIXA ALTA.

function caixaAlta (array){
    array.nome = objeto.nome.toUpperCase()
    array.profissao = objeto.profissao.toUpperCase()
    array.username = objeto.username.toUpperCase()
    array.senha = objeto.senha.toUpperCase()
    return array
}

console.log(caixaAlta(objeto))

// 2. A segunda deve retornar os valores do objeto como texto corrido.
function textoCorrido (array){
    const textoCorrido = `${array.nome}, ${array.profissao}, ${array.username}, ${array.senha}`
    return textoCorrido
}

console.log(textoCorrido(objeto))

// 3. Em seguida, crie uma funcão que recebe um objeto e um callback como parâmetros. A funcão deve passar o objeto 
// como argumento da funcão de callback, e em seguida imprimir o valor retornado.

const join = (meuObjeto, funcaocaixaAlta, funcaotextoCorrido) => {
    console.log(funcaocaixaAlta(meuObjeto))
    console.log(funcaotextoCorrido(meuObjeto))
  
}

join(objeto, caixaAlta, textoCorrido)