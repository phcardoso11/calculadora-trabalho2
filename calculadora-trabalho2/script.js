function mostrarPensao() {

    let pensao = document.getElementById("pensao").value;
    let campo = document.getElementById("campoPensao");

    if (pensao == "sim") {
        campo.style.display = "block";
    } else {
        campo.style.display = "none";
    }
}

function calcular() {

    let salario = Number(document.getElementById("salario").value);
    let dependentes = Number(document.getElementById("dependentes").value);

    let valorPensao = 0;

    if(document.getElementById("pensao").value == "sim"){
        valorPensao = Number(document.getElementById("valorPensao").value);
    }

    let inss = salario * 0.14;

    let deducao = dependentes * 189.59;

    let baseIR = salario - inss - deducao - valorPensao;

    let ir = baseIR * 0.275;

    let salarioLiquido = salario - inss - ir - valorPensao;

    document.getElementById("resultado").innerHTML =
    `
    <p>Salário Bruto: R$ ${salario.toFixed(2)}</p>
    <p>Valor INSS: R$ ${inss.toFixed(2)}</p>
    <p>Salário Base IR: R$ ${baseIR.toFixed(2)}</p>
    <p>Valor IR: R$ ${ir.toFixed(2)}</p>
    <p>Salário Líquido: R$ ${salarioLiquido.toFixed(2)}</p>
    `;
}