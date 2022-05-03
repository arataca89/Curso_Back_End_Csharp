
// criar estrutura de dados com os campos:
// evento (string)
// nome(string)
// idade (inteiro)

size = 100 // quantidade de registros

registros[size] // criar array de registros

indice = 0; // indice do array de registros[]

var evento = prompt("Entre com o nome do evento: ");
var nome = prompt("Entre com o nome do participante: ");
var idade = prompt("Entre com a idade do participante: ");

if(idade >= 18){
  if(indice > 100){
    console.log("Registro cadastrado")    
  }
  else{
    // Insercao dos dados no array de registros
    console.log("Cadastro nao realizado! Excedido limite de vagas") 
  }
} else{
  console.log("Cadastro nao permitido para menores de 18 anos")
}
