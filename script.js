var nome = document.getElementById("campo-n")
var p_nome = document.getElementById("p_nome")
var sobrenome = document.getElementById("sobrenome")
function separar(){
    var lista = nome.value.split(' ')
    nome.value = ''
    p_nome.value = lista[0]
    sobrenome.value = lista[1]
}
/*console.log(lista)

var primeiroNome = lista[0]
var segundoNome = lista[1]

console.log(primeiroNome)
console.log(segundoNome);
*/
