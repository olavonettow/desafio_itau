function enviar (){
    var formulario=document.getElementById("formulario")
    if(formulario.checkValidity()){
        alert("cadastro efetuado com sucesso")

    }
}
function validaCPF(cpf){
    if(cpf.length != 11){
        return false
    }else{
        var numeros = cpf.substring(0,9)
        var digitos = cpf.substring(9)

        var soma = 0
        for(var i = 10; i>1; i--){
            soma += numeros.charAt(10-i)*i
        }
        var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)
        if (resultado != digitos.charAt(0)){
            return false
        }
        soma = 0
        numeros=cpf.substring(0,10)
        for(var k = 11; k>1; k--){
            soma += numeros.charAt(11-k)*k
        }
        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)
        if(resultado != digitos.charAt(1)){
            return false
        }
        return true
    }
}
function campocpf(){
    var mensagem=document.getElementById("mensagem")
    var botao=document.getElementById("botao")
    var cpf=document.getElementById("cpf").value 
    if(validaCPF(cpf)){
        mensagem.style.display="none"
        botao.removeAttribute("disabled")
    }
    else{
        botao.setAttribute("disabled","disabled")
        mensagem.style.display="block"
    }
}