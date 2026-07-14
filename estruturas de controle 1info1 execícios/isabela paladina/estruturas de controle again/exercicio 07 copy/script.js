const G= 5.65;
const E= 4.38;
let combustivel= prompt("insira o tipo de combustível utilizado (G = gasolina, E= etanol):").toUpperCase();
let capacidade= prompt("insira a capacidade do tanque (em litros):")
let valorTotal;
if (combustivel==="G") {
    valorTotal= capacidade* gasolina;
} else if (tipo==="E") {
    valorTotal= capacidade*etanol;
} else{
    alert("tipo de combustível inválido! digite G ou E")
}

