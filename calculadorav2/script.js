function lerNumero(id){
    return Number(document.getElementById(id).value);
}


function mostrarResultado(valor){
    document.getElementById("resultado").innerHTML = "Resultado: " + valor;
}


function verifCampo(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    if(num1 == "" || num2 == ""){
        mostrarResultado("Erro - Campo vazio")
        return true;
    }
}


function calcular(op){
    if(verifCampo() == true){
        return
    }

    let a = lerNumero("num1");
    let b = lerNumero("num2");

    switch(op){
        case "x":
            mostrarResultado(a+b);
            break;
        case "-":
            mostrarResultado(a-b);
            break;
        case "*":
            mostrarResultado(a*b);
            break;
        case "/":
            if(b === 0){
                return mostrarResultado("Erro - divisão por 0")
            }

            mostrarResultado((a/b).toFixed(2))
            break;
        case "^":
            mostrarResultado(a**b);
            break;
    }
}

function limpar(){
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("resultado").innerHTML = "Resultado:";
}