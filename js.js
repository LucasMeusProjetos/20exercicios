// 1. Verifique se um ano é bissexto.
// 1. Seleciona o botão e o input que você criou no HTML
const botao = document.getElementById('resultado1');
const inputAno = document.getElementById('Anocoletado'); 
const divAlerta = document.querySelector('.alert'); // Seleciona a div de alerta

// 2. Sua função adaptada para a tela
function verificar() {
    // Em vez de prompt, pegamos o valor digitado no input do HTML
    let ano = parseInt(inputAno.value);

    if (isNaN(ano)) {
        divAlerta.innerText = "Por favor, digite um ano válido.";
        return;
    }

    // A sua lógica exata
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        // Em vez de console.log, mostra o texto na tela
        divAlerta.innerText = ano + " é bissexto! 🎉";
    } else {
        // Em vez de console.log, mostra o texto na tela
        divAlerta.innerText = ano + " NÃO é bissexto! ❌";
    }
}

// 3. Ativa a função quando o botão for clicado
botao.addEventListener('click', verificar);
//FIM DA FUNÇÃO 1


// 2. Verifique se um número está entre 100 e 200.
function entre100e200() {
        const botao = document.getElementById('resultado2');
        const inputnumerocoletado = document.getElementById('numerocoletado'); 
        const divAlerta = document.querySelector('.alert'); // Seleciona a div de alerta
    
        let numerocoletado = parseInt(inputnumerocoletado.value);
    if (numerocoletado >= 100 && numerocoletado <= 200) {
        divAlerta.innerText = "O número " + numerocoletado + " ESTÁ entre 100 e 200.";
    } else {
        divAlerta.innerText = "O número " + numerocoletado + " NÃO está entre 100 e 200.";


    }
    // 3. Ativa a função quando o botão for clicado
    botao.addEventListener('click', entre100e200);
}

// 3. Leia a idade e verifique se pode votar.
function votar() {
    const inputidade = document.getElementById('idadecoletada');
    const divAlerta = document.querySelector('.alert');

    let idade = parseInt(inputidade.value);

    if (idade >= 18) {
        if (idade <= 70) {
            divAlerta.innerText = "Voto OBRIGATÓRIO!";
        } else {
            divAlerta.innerText = "Voto OPCIONAL!";
        }
    } else {
        divAlerta.innerText = "Você NÃO pode votar! Idade insuficiente.";
    }
}


// 4. Verifique se um número está dentro de um intervalo.
function intervalo() {
    let limiteMin = parseFloat(prompt("Digite o COMEÇO do intervalo:"));
    let limiteMax = parseFloat(prompt("Digite o FINAL do intervalo:"));

    if (limiteMax < limiteMin) {
        console.log("O final do intervalo não pode ser menor que o começo!");
    } else {
        let numero = parseFloat(prompt("Digite um número para testar:"));
        if (numero >= limiteMin && numero <= limiteMax) {
            console.log(numero + " está DENTRO do intervalo de " + limiteMin + " e " + limiteMax);
        } else {
            console.log(numero + " está FORA do intervalo de " + limiteMin + " e " + limiteMax);
        }
    }
}

// 5. Leia um número e diga se está entre os 10 maiores valores já lidos.
function dezMaioresValores() {
    let target = parseFloat(prompt("Informe o número que você quer verificar:"));
    let valores = [];
    
    // Leitura simplificada com laço de repetição (for)
    for (let i = 1; i <= 10; i++) {
        valores.push(parseFloat(prompt("Informe o " + i + "º número da lista:")));
    }

    if (valores.includes(target)) {
        console.log("O número " + target + " ESTÁ entre os valores informados!");
    } else {
        console.log("O número " + target + " NÃO está entre os valores informados.");
    }
}

// 6. Verifique se um triângulo é equilátero, isósceles ou escaleno.
function triangulo() {
    let a = parseFloat(prompt("Digite o tamanho do 1º lado:"));
    let b = parseFloat(prompt("Digite o tamanho do 2º lado:"));
    let c = parseFloat(prompt("Digite o tamanho do 3º lado:"));

    // Condição de existência de um triângulo
    if (a < b + c && b < a + c && c < a + b) {
        if (a === b && b === c) {
            console.log("Triângulo EQUILÁTERO (todos os lados iguais)!");
        } else if (a === b || a === c || b === c) {
            console.log("Triângulo ISÓSCELES (dois lados iguais)!");
        } else {
            console.log("Triângulo ESCALENO (todos os lados diferentes)!");
        }
    } else {
        console.log("Os valores informados NÃO formam um triângulo válido.");
    }
}

// 7. Leia um número de 1 a 7 e mostre o dia da semana.
function semana() {
    let dia = parseInt(prompt("Digite um número de 1 a 7 para o dia da semana:"));
    switch (dia) {
        case 1: console.log("DOMINGO!"); break;
        case 2: console.log("SEGUNDA-FEIRA!"); break;
        case 3: console.log("TERÇA-FEIRA!"); break;
        case 4: console.log("QUARTA-FEIRA!"); break;
        case 5: console.log("QUINTA-FEIRA!"); break;
        case 6: console.log("SEXTA-FEIRA!"); break;
        case 7: console.log("SÁBADO!"); break;
        default: console.log("Opção inválida! Digite apenas números de 1 a 7.");
    }
}

// 8. Verifique se uma senha digitada é válida.
function senha() {
    let senhaCorreta = "1234abc"; // Exemplo de regra/senha esperada
    let entrada = prompt("Digite a senha:");
    if (entrada === senhaCorreta) {
        console.log("Senha VÁLIDA! Acesso liberado.");
    } else {
        console.log("Senha INVÁLIDA!");
    }
}

// 9. Leia 2 horários e determine qual é mais tarde.
function compararHorarios() {
    alert("Informe o 1º horário:");
    let h1 = parseInt(prompt("Hora (0 a 23):"));
    let m1 = parseInt(prompt("Minutos (0 a 59):"));

    alert("Informe o 2º horário:");
    let h2 = parseInt(prompt("Hora (0 a 23):"));
    let m2 = parseInt(prompt("Minutos (0 a 59):"));

    let totalMinutos1 = (h1 * 60) + m1;
    let totalMinutos2 = (h2 * 60) + m2;

    if (totalMinutos1 > totalMinutos2) {
        console.log("O primeiro horário (" + h1 + ":" + m1 + ") é mais tarde.");
    } else if (totalMinutos2 > totalMinutos1) {
        console.log("O segundo horário (" + h2 + ":" + m2 + ") é mais tarde.");
    } else {
        console.log("Os dois horários são EXATAMENTE iguais.");
    }
}

// 10. Leia dois números e exiba o maior.
function maiorDeDois() {
    let n1 = parseFloat(prompt("Digite o primeiro número:"));
    let n2 = parseFloat(prompt("Digite o segundo número:"));

    if (n1 > n2) {
        console.log("O maior número é: " + n1);
    } else if (n2 > n1) {
        console.log("O maior número é: " + n2);
    } else {
        console.log("Ambos os números são iguais.");
    }
}

// 11. Leia 5 números e calcule a média.
function mediaCincoNumeros() {
    let soma = 0;
    for (let i = 1; i <= 5; i++) {
        soma += parseFloat(prompt("Digite o " + i + "º número:"));
    }
    let media = soma / 5;
    console.log("A média dos 5 números é: " + media);
}

// 12. Leia números até que a soma ultrapasse 100.
function somaAteCem() {
    let acumulador = 0;
    let quantidade = 0;
    
    while (acumulador <= 100) {
        let n = parseFloat(prompt("Soma atual: " + acumulador + "\nDigite um número para somar:"));
        acumulador += n;
        quantidade++;
    }

    console.log("A soma ultrapassou 100! Total final: " + acumulador + " (foram lidos " + quantidade + " números)");
}

// 13. Solicite senhas até que uma válida seja informada.
function senhaValidacaoLoop() {
    let senhaReal = "admin123";
    let tentativa;
    do {
        tentativa = prompt("Digite a senha de acesso:");
        if (tentativa !== senhaReal) {
            console.log("Senha INCORRETA! Tente novamente.");
        }
    } while (tentativa !== senhaReal);

    console.log("Senha correta! Acesso concedido.");
}

// 14. Leia 10 números e exiba o maior e o menor.
function maiorEMenorDeDez() {
    let maior = -Infinity;
    let menor = Infinity;

    for (let i = 1; i <= 10; i++) {
        let val = parseFloat(prompt("Digite o " + i + "º número de 10:"));
        if (val > maior) maior = val;
        if (val < menor) menor = val;
    }

    console.log("Maior valor lido: " + maior);
    console.log("Menor valor lido: " + menor);
}

// 15. Classifique uma pessoa com base na idade: criança, jovem, adulto, idoso.
function classificarFaixaEtaria() {
    let idade = parseInt(prompt("Informe a idade da pessoa:"));

    if (idade < 0) {
        console.log("Idade inválida!");
    } else if (idade <= 12) {
        console.log("Classificação: Criança");
    } else if (idade <= 17) {
        console.log("Classificação: Jovem (Adolescente)");
    } else if (idade <= 59) {
        console.log("Classificação: Adulto");
    } else {
        console.log("Classificação: Idoso");
    }
}

// 16. Calcule o IMC e classifique o resultado.
function calcularIMC() {
    let peso = parseFloat(prompt("Digite o peso em kg (Ex: 70.5):"));
    let altura = parseFloat(prompt("Digite a altura em metros (Ex: 1.75):"));

    let imc = peso / (altura * altura);
    console.log("Seu IMC é: " + imc.toFixed(2));

    if (imc < 18.5) {
        console.log("Classificação: Abaixo do peso");
    } else if (imc < 25) {
        console.log("Classificação: Peso normal");
    } else if (imc < 30) {
        console.log("Classificação: Sobrepeso");
    } else {
        console.log("Classificação: Obesidade");
    }
}

// 17. Verifique se um número é positivo, negativo ou zero.
function positivoNegativoZero() {
    let num = parseFloat(prompt("Digite um número:"));
    if (num > 0) {
        console.log("O número " + num + " é POSITIVO.");
    } else if (num < 0) {
        console.log("O número " + num + " é NEGATIVO.");
    } else {
        console.log("O número é ZERO.");
    }
}

// 18. Verifique se um número é par ou ímpar.
function parOuImpar() {
    let num = parseInt(prompt("Digite um número inteiro:"));
    if (num % 2 === 0) {
        console.log("O número " + num + " é PAR.");
    } else {
        console.log("O número " + num + " é ÍMPAR.");
    }
}

// 19. Leia três números e exiba o maior, menor, média, soma e potência.
function operacoesTresNumeros() {
    let a = parseFloat(prompt("Digite o 1º número:"));
    let b = parseFloat(prompt("Digite o 2º número:"));
    let c = parseFloat(prompt("Digite o 3º número:"));

    let maior = Math.max(a, b, c);
    let menor = Math.min(a, b, c);
    let soma = a + b + c;
    let media = soma / 3;
    let potencia = Math.pow(a, b); // Exemplo: 1º número elevado ao 2º número

    console.log("Resultados para (" + a + ", " + b + ", " + c + "):");
    console.log("Maior: " + maior);
    console.log("Menor: " + menor);
    console.log("Soma: " + soma);
    console.log("Média: " + media);
    console.log("Potência (" + a + " elevado a " + b + "): " + potencia);
}

// 20. Calcule a tarifa de ônibus com base na idade.
function tarifaOnibus() {
    let tarifaBase = 5.00; // Valor base hipotético da passagem
    let idade = parseInt(prompt("Informe a idade do passageiro:"));

    if (idade < 6 || idade >= 65) {
        console.log("Passe LIVRE! Valor a pagar: R$ 0,00");
    } else if (idade >= 6 && idade <= 17) {
        console.log("Estudante / Meia-entrada! Valor a pagar: R$ " + (tarifaBase / 2).toFixed(2));
    } else {
        console.log("Tarifa normal! Valor a pagar: R$ " + tarifaBase.toFixed(2));
    }
}

// Executar o programa
executar();
