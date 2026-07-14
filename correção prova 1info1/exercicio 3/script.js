let entregasRealizadas= parseInt(prompt("Insira o número de entregas realizadas"));
let tempoMedio= parseFloat( prompt("Insira o tempo médio por entrega (em minutos):"));
let consumoMedio= parseFloat(prompt("Insira o consumo médio por entrega (em litros):"));
let preco= parseFloat(prompt("Insira o custo do combustível:"));

let tempoTotal= (tempoMedio/60);
let consumoTotal= (consumoMedio*tempoTotal);
let custoTotal= (consumoTotal*preco);
let custoMedio= (custoTotal/entregasRealizadas);

alert(`O tempo total é de ${tempoTotal.toFixed(2)} horas.`);
alert(`O consumo total é de ${consumoMedio.toFixed(2)} litros.`);
alert(`O cuto total é de R$ ${custoTotal.toFixed(2)}.`);
alert(`O custo médio é de R$ ${custoMedio.toFixed(2)}.`);
