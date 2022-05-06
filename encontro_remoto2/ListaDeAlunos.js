
let listaDeAlunos = ["Buzz", "Zurg", "Woody", "Jessy", "Rex", "Mr Potato"];

for(let contador = 0; contador < listaDeAlunos.length; contador++){

    if(contador == 0){
        console.log("O número atual é zero")
    }
    else if(contador % 2 == 0){
        console.log("O número " + contador + " é par")
    }
    else{
        console.log(`O número ${contador} é ímpar`)
    }
}

console.log();

for(let nome of listaDeAlunos){
    console.log(`nome do aluno: ${nome}`)
}

console.log("\nNúmero\tNome");
for(let contador = 0; contador < listaDeAlunos.length; contador++){
    console.log(`${contador}\t${listaDeAlunos[contador]}`)
}

//console.log("\nlaço while\n")

// 0 == 0       => true
// 0 == "0"     => true
// 0 === "0"    => false

// let contador = 0

// while(contador < numeroDeAlunos){
//     if(contador == 0){
//         console.log("O número atual é zero")
//     }
//     else if(contador % 2 == 0){
//         console.log("O número " + contador + " é par")
//     }
//     else{
//         console.log(`O número ${contador} é ímpar`)
//     }

//     contador++
// }
