// funçao utilizada para calcular
function calcularElo(vitorias, derrotas){
    return vitorias - derrotas;
 
}   
//variaveis utilizadas
let saldoRanqueada = calcularElo(25,0)
let elo

// estrutura para analisar qual o rank do usuario
switch (true){
    case (saldoRanqueada > 10 && saldoRanqueada < 20 ):
        elo = "bronze";
        break;

    case (saldoRanqueada > 20 && saldoRanqueada < 50):
        elo = "prata";
        break;
    
    case (saldoRanqueada > 50 && saldoRanqueada < 80):
        elo = "ouro";
        break;

    case (saldoRanqueada > 80 && saldoRanqueada < 90):
        elo = "diamante";
        break;

    case (saldoRanqueada > 90 && saldoRanqueada < 100):
        elo = "lendario"
        break;

    case (saldoRanqueada > 100):
        elo = "lendario"
        break;
    default:
        elo = "ferro"
        break;

}

// saida :)
console.log ("o heroi tem o elo " + elo + ". Parabens jogador!")