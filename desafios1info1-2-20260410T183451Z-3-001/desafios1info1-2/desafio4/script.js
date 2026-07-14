let quiloPreco = parseFloat(prompt("qual o valor do quilo do produto?"));
let quiloConsumido = parseFloat(
  prompt("quantos quilos do produto foram consumidos?"),
);
const resultado = quiloPreco * quiloConsumido;
console.log(`o valor final a ser pago é de ${resultado} reais.`);
alert(`o valor final a ser pago é de ${resultado} reais.`);
