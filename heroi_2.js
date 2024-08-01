function ranqueada(vitoria, derrota){
    let rank = vitoria - derrota
    return rank
}


function nivel(){
    if (ranqueada(quantidadeVitoria, quantidadeDerrota) <= 10){
        return "FERRO"
    } else if (ranqueada(quantidadeVitoria, quantidadeDerrota) <= 20){
        return "BRONZE"
    } else if (ranqueada(quantidadeVitoria, quantidadeDerrota) <= 50){
            return "PRATA"
    } else if (ranqueada(quantidadeVitoria, quantidadeDerrota) <= 80){
            return "OURO"
    } else if (ranqueada(quantidadeVitoria, quantidadeDerrota) <= 90){
            return "DIAMANTE"
    } else if (ranqueada(quantidadeVitoria, quantidadeDerrota) <= 100){
            return "LENDÁRIO"        
    } else if (ranqueada(quantidadeVitoria, quantidadeDerrota) >= 101){
            return "IMORTAL"
    } else {
            return console.log("ERRO INESPERADO")
    }
}

let quantidadeVitoria = //"Digite a quantidade de vitoria "
let quantidadeDerrota = //"Digite a quantidade de derrota "

console.log(`
O Herói tem 
${quantidadeVitoria} de vitórias
${quantidadeDerrota} de derrotas

tem saldo de vitórias de ${ranqueada(quantidadeVitoria, quantidadeDerrota)}
está no nível ${nivel()}!!!
`)

