let nomeHeroi = "o honrado"
let exp = 8789
let rank

if (exp > 1000 && exp <= 2000) { 
    rank = "bronze";
}
 else if(exp > 2000 && exp <= 5000) {
    rank = "prata";
}
 else if(exp > 5000 && exp <= 7000) {
    rank = "ouro";
}
 else if(exp > 7000 && exp <= 8000) {
    rank = "platina";
}
 else if(exp > 8000 && exp <= 9000) {
    rank = "ascendente";
}
 else if(exp > 9000 && exp <= 10000) {
    rank = "imortal";
}
 else if(exp > 10000) {
    rank = "radiante";
} else 
rank = "ferro"

console.log("O honrado de nome " + nomeHeroi + " é de rank " + rank);