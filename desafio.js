let nome = prompt("Digite o nome do herói: ");

let xp = parseInt(prompt("Digite o xp atual: "));

let nivel;

switch (true) {
    case (xp < 250):
        nivel = "Ferro";
        break;
    case (xp <= 700):
        nivel = "Bronze";
        break;
    case (xp <= 2500):
        nivel = "Prata";
        break;
    case (xp <= 10000):
        nivel = "Ouro";
        break;
    case (xp <= 25000):
        nivel = "Platina";
        break;
    case (xp <= 50000):
        nivel = "Imortal";
        break;
    case (xp <= 100000):
        nivel = "Radiante";
        break;
    case (xp > 100000):
        nivel = "DEUS SUPREMO";
        break;
    
}   

alert("O Heroi de nome **${nome}** esta no nivel **${nivel}**");