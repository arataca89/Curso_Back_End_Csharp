indice = 0 // indice do array registros[]

nome_evento = prompt("Entre com o nome do evento: ")

while(indice < 100){
    if(registro[indice].evento == nome_evento){
        console.log(registro[indice].nome)
        indice = indice + 1
    }
}

