let nome = prompt("Digite o nome do herói: ");

let xp = parseInt(prompt("Digite o xp atual: "));

let nivel;

switch (true) {
    case (xp < 1000):
        nivel = "Ferro";
        break;
    case (xp <= 2000):
        nivel = "Bronze";
        break;
    case (xp <= 3000):
        nivel = "safdsa";
        break;
}

alert("O Heroi de nome **${nome}** esta no nivel **${nivel}**");