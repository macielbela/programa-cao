```html id="r8m3v1"
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Jogo de Aventura</title>
</head>
<body>

<h1>🎮 Jogo de Aventura em JavaScript</h1>

<script>

alert("🎮 BEM-VINDO(A) AO REINO MÁGICO! 🎮");

let nome = prompt("👤 Digite o nome do seu herói:");

alert("✨ Seja bem-vindo(a), " + nome + "!");

let idade = parseInt(prompt("📅 Quantos anos você tem?"));

let classe = prompt(
"⚔️ Escolha sua classe:\n\n" +
"🛡️ Guerreiro\n" +
"🧙 Mago\n" +
"🏹 Arqueiro"
);

let poder = prompt(
"⚡ Escolha seu poder:\n\n" +
"🔥 Fogo\n" +
"❄️ Gelo\n" +
"⚡ Raio\n" +
"👻 Invisibilidade"
);

let arma = prompt(
"🗡️ Escolha sua arma:\n\n" +
"Espada\n" +
"Machado\n" +
"Arco\n" +
"Cajado"
);

alert("⏳ Criando personagem...");

console.log("===== PERSONAGEM =====");
console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Classe:", classe);
console.log("Poder:", poder);
console.log("Arma:", arma);

if (idade >= 18) {

    alert(
    "🏆 Você é um(a) herói lendário(a)!\n\n" +
    "👤 Nome: " + nome + "\n" +
    "⚔️ Classe: " + classe + "\n" +
    "⚡ Poder: " + poder + "\n" +
    "🗡️ Arma: " + arma
    );

} else {

    alert(
    "🛡️ Jovem aventureiro(a)!\n\n" +
    "Você ainda está treinando suas habilidades..."
    );
}

let missao = prompt(
"🌍 ESCOLHA SUA MISSÃO:\n\n" +
"1 - Derrotar o Dragão 🐉\n" +
"2 - Explorar a Floresta 🌲\n" +
"3 - Encontrar o Tesouro 💎"
);

if (missao == "1") {

    alert(
    "🐉 Você enfrentou o dragão!\n\n" +
    "⚔️ Após uma batalha épica, venceu o monstro!"
    );

} else if (missao == "2") {

    alert(
    "🌲 A floresta estava cheia de criaturas mágicas!\n\n" +
    "✨ Você encontrou um portal secreto!"
    );

} else if (missao == "3") {

    alert(
    "💎 Você encontrou um tesouro lendário!\n\n" +
    "🏆 Agora está rico(a)!"
    );

} else {

    alert("❌ Missão inválida!");
}

let castelo = prompt(
"🏰 Deseja entrar no castelo mágico?\n\n" +
"Digite: sim ou não"
);

if (castelo.toLowerCase() == "sim") {

    alert(
    "✨ Dentro do castelo havia um mago poderoso!\n\n" +
    "🪄 Ele entregou uma espada lendária para você!"
    );

} else {

    alert(
    "🚶 Você continuou viajando pelo reino..."
    );
}

let final = prompt(
"👑 Deseja se tornar rei do reino?\n\n" +
"Digite: sim ou não"
);

if (final.toLowerCase() == "sim") {

    alert(
    "👑 PARABÉNS!\n\n" +
    nome + " se tornou o(a) novo(a) rei/rainha do reino! 🎉"
    );

} else {

    alert(
    "⚔️ Você escolheu continuar sendo um(a) aventureiro(a) livre!"
    );
}

alert(
"🎉 FIM DA AVENTURA 🎉\n\n" +
"Obrigado por jogar, " + nome + "!"
);

console.log("===== FIM DO JOGO =====");

</script>

</body>
</html>
```
