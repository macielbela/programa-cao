let volumeInicial = parseFloat(prompt("Insira o volume inicial (em litros):"));
let litrosAdicionados = parseFloat(
  prompt("Insira a quantidade de litros adicionados por hora:"));
let tempoAbastecimento = parseFloat(prompt("Insira o tempo de abastecimento (em horas):"));
console.log("oi, meu nome é isabela, e vou tirar zero em física");

let volumeFinal = volumeInicial + litrosAdicionados * tempoAbastecimento;
alert(`O volume final é de ${volumeFinal} litros.`);
