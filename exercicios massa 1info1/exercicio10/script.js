let peso = Number(prompt("informe o seu peso em kg"));
let pesoMais = peso * 1.15;
let pesoMenos = peso * 0.8;

alert(
  `o seu peso se você emagrecer 20%, será de ${pesoMenos.toFixed(2)}kg, e se você engordar 15%, será de ${pesoMais.toFixed(2)}kg`,
);
