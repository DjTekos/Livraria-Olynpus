

function logar(){
    var login=document.getElementById('user-id').value;
    var senha=document.getElementById('password').value;

    if(login=="admin"&&senha=="admin"){
        alert("Logando…");
    }else{
        alert("Senha ou usuário inválidos, preencha corretamente!");
    }
}

function comprar(){
    var buy=prompt("Digite a quantidade");
    
    if (buy !== null && buy.trim() !== "") {
        buy = parseInt(buy);
        if(isNaN(buy)){
            alert("Por favor, digite um valor válido");
        }else{
            alert("O produto foi adicionado ao carrinho");
        }
}
}
