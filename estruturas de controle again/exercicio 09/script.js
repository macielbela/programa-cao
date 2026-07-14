let saldo= parseFloat(prompt("insira a quantidade de dinheiro disponível:"));
let produtos= parseInt(prompt("insira a quantidade de produtos a ser comprada:"));
let preco= parseFloat(prompt("insira o valor de cada unidade"));
let valor= produtos*preco;
if (valor > 0.8 * saldo) {
    let total= valor+ ((valor*10)/100)
    let parcela = (valor * 1.10) / 3;
    alert(`a compra ultrapassou o limite. o total com juros foi de R$ ${total.toFixed(2)}. a compra dividida em 3x, ficou com o valor de R$ ${parcela.toFixed(2)} por parcela.`);
} else if (valor<= 0.8*saldo){
    let aVista= valor- (valor*0.05);
    alert(`a compra pode ser paga a vista, e com um desconto de 5% do valor, o total é de R$ ${aVista.toFixed(2)}.`)
}
