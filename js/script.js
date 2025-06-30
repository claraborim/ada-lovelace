document.getElementById("botaoenviar").addEventListener("click", validaformulario)

function validaformulario(){
    if (document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("telefone").value != "") {
        alert("Pronto! Você receberá as novidades por email.")
    } else {
        alert("Por favor, preencha os campos de nome, email e telefone!")
    }
}