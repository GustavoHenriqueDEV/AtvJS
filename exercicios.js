function calcularTempoSono() {
    let tempoSonoGaroto = parseFloat(prompt("Digite o tempo de sono do garoto em minutos:"));
    let tempoSonoGarota = parseFloat(prompt("Digite o tempo de sono da garota em minutos:"));

    let tempoAcordadoGaroto = 90 - tempoSonoGaroto;
    let tempoAcordadoGarota = 110 - tempoSonoGarota;

    alert("Tempo acordado do garoto no filme romântico: " + tempoAcordadoGaroto + " minutos");
    alert("Tempo acordado da garota no filme de investigação: " + tempoAcordadoGarota + " minutos");
}

function calcularTempoParaCompletarJogo() {
    let horasPorDia = parseFloat(prompt("Digite quantas horas por dia o gamer pode jogar:"));

    let horasParaCompletar = 78 * 60; // Convertendo 78 horas para minutos
    let diasParaCompletar = Math.ceil(horasParaCompletar / horasPorDia);

    alert("O gamer vai demorar " + diasParaCompletar + " dias para completar o jogo.");
}

function calcularSalarioProfessores() {
    let horasAulaProfessor1 = parseFloat(prompt("Digite a quantidade de horas aula do primeiro professor:"));
    let valorHoraProfessor1 = parseFloat(prompt("Digite o valor por hora do primeiro professor:"));

    let horasAulaProfessor2 = parseFloat(prompt("Digite a quantidade de horas aula do segundo professor:"));
    let valorHoraProfessor2 = parseFloat(prompt("Digite o valor por hora do segundo professor:"));

    let salarioTotalProfessor1 = horasAulaProfessor1 * valorHoraProfessor1;
    let salarioTotalProfessor2 = horasAulaProfessor2 * valorHoraProfessor2;

    if (salarioTotalProfessor1 > salarioTotalProfessor2) {
        alert("O primeiro professor tem um salário total maior: " + salarioTotalProfessor1);
    } else if (salarioTotalProfessor2 > salarioTotalProfessor1) {
        alert("O segundo professor tem um salário total maior: " + salarioTotalProfessor2);
    } else {
        alert("Ambos os professores têm o mesmo salário total: " + salarioTotalProfessor1);
    }
}

function verificarParOuImpar() {
    let numero = parseInt(prompt("Digite um número inteiro:"));

    if (numero % 2 === 0) {
        alert("O número " + numero + " é par.");
    } else {
        alert("O número " + numero + " é ímpar.");
    }
}

function calcularAlturaMediaAtletas() {
    let n = parseInt(prompt("Digite a quantidade de pares de valores:"));
    let somaAlturas = 0;

    for (let i = 0; i < n; i++) {
        let altura = parseFloat(prompt("Digite a altura do atleta em cm:"));
        somaAlturas += altura;
    }

    let alturaMedia = somaAlturas / n;
    alert("Altura média do grupo de atletas: " + alturaMedia + " cm");
}

function encontrarAtletasExtremos() {
    let n = parseInt(prompt("Digite a quantidade de pares de valores:"));
    let inscricaoMaisAlto, alturaMaisAlto = Number.NEGATIVE_INFINITY;
    let inscricaoMaisBaixo, alturaMaisBaixo = Number.POSITIVE_INFINITY;

    for (let i = 0; i < n; i++) {
        let inscricao = parseInt(prompt("Digite o número de inscrição do atleta:"));
        let altura = parseFloat(prompt("Digite a altura do atleta em cm:"));

        if (altura > alturaMaisAlto) {
            inscricaoMaisAlto = inscricao;
            alturaMaisAlto = altura;
        }

        if (altura < alturaMaisBaixo) {
            inscricaoMaisBaixo = inscricao;
            alturaMaisBaixo = altura;
        }
    }

    alert("Atleta mais alto - Número de inscrição: " + inscricaoMaisAlto + " - Altura: " + alturaMaisAlto + " cm");
    alert("Atleta mais baixo - Número de inscrição: " + inscricaoMaisBaixo + " - Altura: " + alturaMaisBaixo + " cm");
}

function contarAlunosAcimaDe20() {
    let alunosAcimaDe20 = 0;

    for (let i = 0; i < 50; i++) {
        let idade = parseInt(prompt("Digite a idade do aluno:"));

        if (idade > 20) {
            alunosAcimaDe20++;
        }
    }

    alert("Quantidade de alunos com idade acima de 20 anos: " + alunosAcimaDe20);
}

function testarVerificaDivisibilidade() {
    let num1 = parseInt(prompt("Digite o primeiro número inteiro:"));
    let num2 = parseInt(prompt("Digite o segundo número inteiro:"));

    let resultado = verificaDivisibilidade(num1, num2);

    if (resultado === 1) {
        alert(num1 + " é divisível por " + num2);
    } else {
        alert(num1 + " não é divisível por " + num2);
    }
}

function testarMaiorEntreDois() {
    let valor1 = parseInt(prompt("Digite o primeiro valor:"));
    let valor2 = parseInt(prompt("Digite o segundo valor:"));

    let maior = maiorEntreDois(valor1, valor2);
    alert("O maior entre " + valor1 + " e " + valor2 + " é: " + maior);
}

function verificaDivisibilidade(x, y) {
    return x % y === 0 ? 1 : 0;
}

function maiorEntreDois(x, y) {
    return x > y ? x : y;
}

