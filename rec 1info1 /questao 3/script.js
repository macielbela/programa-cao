let cartazes= parseFloat(prompt("Informe a quantidade total de cartazes a serem digitadas."));
let cartazesFolha= parseFloat(prompt("Informe a quntidade de cartazes que cabem em uma folha de impressão:"));
let folhasHora= parseFloat(prompt("Informe o número de folhas que a máquina imprime por hora:"));
let tempoProd=parseFloat(prompt("Informe o tempo total disponível para produção em horas:"))

let folhasTotal= cartazes/cartazesFolha;
let folhasTempo= Math.ceil(folhasHora*tempoProd);
let cartazesMax= folhasTotal/cartazesFolha;

alert(`A quantidade de folhas necessárias é de ${folhasTotal.toFixed(2)} folhas.`);
alert(`A quantidade máxima de folhas impressas por hora é de ${folhasTempo.toFixed(2)} folhas.`);
alert(`A quantidade de cartazes que serão efetivamente produzidos é de ${cartazesMax.toFixed(2)} cartazes`);