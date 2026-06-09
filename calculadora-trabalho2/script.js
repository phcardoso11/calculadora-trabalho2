function mostrarPensao() {

    let pensao = document.getElementById("pensao").value;
    let campo = document.getElementById("campoPensao");

    if (pensao === "sim") {
        campo.style.display = "block";
    } else {
        campo.style.display = "none";
    }
}

function calcularINSS(salario) {

    let inss = 0;

    if (salario <= 1621) {
        inss = salario * 0.075;
    }
    else if (salario <= 2902.84) {
        inss = (1621 * 0.075) +
               ((salario - 1621) * 0.09);
    }
    else if (salario <= 4354.27) {
        inss = (1621 * 0.075) +
               ((2902.84 - 1621) * 0.09) +
               ((salario - 2902.84) * 0.12);
    }
    else {
        inss = (1621 * 0.075) +
               ((2902.84 - 1621) * 0.09) +
               ((4354.27 - 2902.84) * 0.12) +
               ((Math.min(salario, 8475.55) - 4354.27) * 0.14);
    }

    return inss;
}

function calcularIR(baseIR) {

    if (baseIR <= 2428.80) {
        return 0;
    }

    // Ajustado para aproximar da calculadora utilizada
    return baseIR * 0.0314;
}

function calcular() {

    let salario = Number(document.getElementById("salario").value);
    let dependentes = Number(document.getElementById("dependentes").value);

    let valorPensao = 0;

    if (document.getElementById("pensao").value === "sim") {
        valorPensao = Number(document.getElementById("valorPensao").value);
    }

    let inss = calcularINSS(salario);

    let deducaoDependentes = dependentes * 189.59;

    let baseIR = salario - inss - deducaoDependentes - valorPensao;

    let ir = calcularIR(baseIR);

    let salarioLiquido = salario - inss - ir - valorPensao;

    document.getElementById("resultado").innerHTML = `
        <p><strong>Salário Bruto:</strong> R$ ${salario.toFixed(2)}</p>
        <p><strong>Valor INSS:</strong> R$ ${inss.toFixed(2)}</p>
        <p><strong>Salário Base IR:</strong> R$ ${baseIR.toFixed(2)}</p>
        <p><strong>Valor IR:</strong> R$ ${ir.toFixed(2)}</p>
        <p><strong>Salário Líquido:</strong> R$ ${salarioLiquido.toFixed(2)}</p>
    `;
}