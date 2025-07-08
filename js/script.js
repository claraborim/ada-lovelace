var nome = document.getElementById("nome")
var email = document.getElementById("email")
var telefone = document.getElementById("telefone")

document.getElementById("botaoenviar").addEventListener("click", validaformulario)

function validaformulario(event){
    event.preventDefault();

    if (nome.value != "" &&
        email.value.includes("@") != "" &&
        telefone.value != ""
    ) {
        alert("Pronto! Você receberá as novidades por email.");
        nome.value = "";
        email.value = "";
        telefone.value = "";
    } else {
        alert("Por favor, preencha os campos de nome, email e telefone!")
    }
}