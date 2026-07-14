let gado = prompt("quantas cabeças de gado você possui?");
let herd = prompt("quantos herdeiros você possui?");
let gadoDoa = gado * 0.85;
let divisão = gadoDoa / herd;
let divisãoResto = gadoDoa % herd;

alert(
  `a quantidade de gado para cada herdeiro é de ${divisão}, a quntidade de gado para a doação é de${gadoDoa} e o resto da divisão é de ${divisãoResto}`,
);
