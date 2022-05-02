// Atividade desenvolvida no Encontro Remoto 1

var listaDePecas = ["Motor","Amortecedor","Freio","Cambio","Disco de Freio","Radiador"]

if(listaDePecas.length < 10){
    console.log("E possivel cadastrar mais pecas")
} else{
    console.log("Lista cheia! Nao eh possivel cadastrar mais nada!")
}

let nomeDePeca = "Disco de Freio"

if(nomeDePeca.length > 3){
    console.log("Nome da peca adequado ao cadstro")    
} else if(nomeDePeca.length == 0){
    console.log("Nome da peca nao pode ser vazio!")
}
else{
    console.log("O nome deve ter mais de 3 caracteres!")
}

/*
=       atribuicao
==      verifica se os valores sao iguais
===     verifica se os valores e os tipos sao iguais
*/ 

switch(nomeDePeca.length){
    case 0:
        console.log("Nome da peca nao pode ser vazio!")
        break;
    case 1:
    case 2:
    case 3:
        console.log("O nome deve ter mais de 3 caracteres!")
        break;
    
}