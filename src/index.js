let nomeDoHeroi = "Jhonata"; // Declara uma variável chamada 'nomeDoHeroi' e atribui a ela o valor de string "Jhonata".
let nivel = 9.020;         // Declara uma variável chamada 'nivel' e atribui a ela o valor numérico 9.020.
let classificacao = "";    // Declara uma variável chamada 'classificacao' e a inicializa como uma string vazia.

switch (true) {            // Inicia uma estrutura 'switch' que avalia com base na veracidade de seus casos.
    case nivel <= 1.000:   // Verifica se 'nivel' é menor ou igual a 1.000.
        classificacao = "Ferro" // Se o caso acima for verdadeiro, atribui "Ferro" à 'classificacao'.
        console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + classificacao) // Imprime uma mensagem no console mostrando o nome do herói e sua classificação.
        break              // Sai da estrutura 'switch'.

    case nivel >= 1.001 && nivel <= 2.000: // Verifica se 'nivel' está entre 1.001 e 2.000 (inclusive).
        classificacao = "Bronze" // Se o caso acima for verdadeiro, atribui "Bronze" à 'classificacao'.
        console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + classificacao) // Imprime uma mensagem no console.
        break              // Sai da estrutura 'switch'.

    case nivel >= 2.001 && nivel <= 5.000: // Verifica se 'nivel' está entre 2.001 e 5.000 (inclusive).
        classificacao = "Prata"  // Se o caso acima for verdadeiro, atribui "Prata" à 'classificacao'.
        console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + classificacao) // Imprime uma mensagem no console.
        break              // Sai da estrutura 'switch'.

    case nivel >= 5.001 && nivel <= 7.000: // Verifica se 'nivel' está entre 5.001 e 7.000 (inclusive).
        classificacao = "Ouro"   // Se o caso acima for verdadeiro, atribui "Ouro" à 'classificacao'.
        console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + classificacao) // Imprime uma mensagem no console.
        break              // Sai da estrutura 'switch'.

    case nivel >= 7.001 && nivel <= 8.000: // Verifica se 'nivel' está entre 7.001 e 8.000 (inclusive).
        classificacao = "Platina" // Se o caso acima for verdadeiro, atribui "Platina" à 'classificacao'.
        console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + classificacao) // Imprime uma mensagem no console.
        break              // Sai da estrutura 'switch'.

    case nivel >= 8.001 && nivel <= 9.000: // Verifica se 'nivel' está entre 8.001 e 9.000 (inclusive).
        classificacao = "Ascendente" // Se o caso acima for verdadeiro, atribui "Ascendente" à 'classificacao'.
        console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + classificacao) // Imprime uma mensagem no console.
        break              // Sai da estrutura 'switch'.

    case nivel >= 9.001 && nivel <= 10.000: // Verifica se 'nivel' está entre 9.001 e 10.000 (inclusive).
        classificacao = "Imortal" // Se o caso acima for verdadeiro, atribui "Imortal" à 'classificacao'.
        console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + classificacao) // Imprime uma mensagem no console.
        break              // Sai da estrutura 'switch'.

    case nivel >= 10.001:  // Verifica se 'nivel' é maior ou igual a 10.001.
        classificacao = "Radiante" // Se o caso acima for verdadeiro, atribui "Radiante" à 'classificacao'.
        console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + classificacao) // Imprime uma mensagem no console.
        break              // Sai da estrutura 'switch'.
}