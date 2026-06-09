function mostrarPensao() {
    let pensao = document.getElementById("pensao").value;
    let campo = document.getElementById("campoPensao");

    if (pensao === "sim") {
        campo.style.display = "block";
    } else {
        campo.style.display = "none";
        document.getElementById("valorPensao").value = "";
    }
}

function calcular() {

    let salario = parseFloat(document.getElementById("salario").value) || 0;
    let dependentes = parseInt(document.getElementById("dependentes").value);

    let valorPensao = 0;

    if(document.getElementById("pensao").value === "sim"){
        valorPensao = parseFloat(document.getElementById("valorPensao").value) || 0;
    }

    // INSS (11%)
    let inss = salario * 0.11;

    // Dedução por dependente
    let deducaoDependentes = dependentes * 189.59;

    // Base IR
    let baseIR = salario - inss - deducaoDependentes - valorPensao;

    // IR
    let ir = (baseIR * 0.275) - 607.20;

    if(ir < 0){
        ir = 0;
    }

    // Salário líquido
    let liquido = salario - inss - ir - valorPensao;

    document.getElementById("rSalario").innerHTML =
        salario.toLocaleString('pt-BR',{minimumFractionDigits:2});

    document.getElementById("rINSS").innerHTML =
        inss.toLocaleString('pt-BR',{minimumFractionDigits:2});

    document.getElementById("rBase").innerHTML =
        baseIR.toLocaleString('pt-BR',{minimumFractionDigits:2});

    document.getElementById("rIR").innerHTML =
        ir.toLocaleString('pt-BR',{minimumFractionDigits:2});

    document.getElementById("rLiquido").innerHTML =
        liquido.toLocaleString('pt-BR',{minimumFractionDigits:2});
}