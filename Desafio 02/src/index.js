function calculoDeRank(vitoria, derrota) {   // Declara uma função chamada calculoDeRank que recebe dois parâmetros: vitórias e derrotas
    let resultado = vitoria - derrota        // Calcula o saldo subtraindo derrotas de vitórias e armazena na variável resultado
    return resultado;                        // Retorna o valor de resultado para quem chamar essa função
}

function nivelDoRank(calculoDeRank) {        // Declara uma função chamada nivelDoRank que recebe como parâmetro o resultado do cálculo (saldo)
    if (calculoDeRank <= 10) {               // Se o saldo for menor ou igual a 10...
        let rank = "Ferro"                   // Define a variável rank como "Ferro"
        return rank                          // Retorna o rank "Ferro"
    } else if (calculoDeRank >= 11 && calculoDeRank <= 20) {   // Senão, se o saldo estiver entre 11 e 20...
        let rank = "Bronze"                  // Define rank como "Bronze"
        return rank                          // Retorna "Bronze"
    } else if (calculoDeRank >= 21 && calculoDeRank <= 50) {   // Se estiver entre 21 e 50...
        let rank = "Prata"                   // Define rank como "Prata"
        return rank                          // Retorna "Prata"
    } else if (calculoDeRank >= 51 && calculoDeRank <= 80) {   // Se estiver entre 51 e 80...
        let rank = "Ouro"                    // Define rank como "Ouro"
        return rank                          // Retorna "Ouro"
    } else if (calculoDeRank >= 81 && calculoDeRank <= 90) {   // Se estiver entre 81 e 90...
        let rank = "Diamante"                // Define rank como "Diamante"
        return rank                          // Retorna "Diamante"
    } else if (calculoDeRank >= 91 && calculoDeRank <= 100) {  // Se estiver entre 91 e 100...
        let rank = "Lendário"                // Define rank como "Lendário"
        return rank                          // Retorna "Lendário"
    } else {                                 // Caso não caia em nenhuma das condições acima (ou seja, acima de 100)...
        let rank = "Imortal"                 // Define rank como "Imortal"
        return rank                          // Retorna "Imortal"
    }
}

let resultadoRank = calculoDeRank(52, 16)      // Chama a função calculoDeRank passando 52 vitórias e 16 derrotas, e armazena o saldo (36) em resultadoRank

console.log("O Herói tem de saldo de " + resultadoRank + " está no nível de " + nivelDoRank(resultadoRank)) // Imprime no console a mensagem contendo o saldo (resultadoRank) e o nível do herói (obtido pela função nivelDoRank)
