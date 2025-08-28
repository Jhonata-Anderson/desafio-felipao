class heroi{                              // Declara uma classe chamada "heroi"
    constructor(nomeHeroi, idade, tipo){  // Define o construtor da classe, recebendo os parâmetros nomeHeroi, idade e tipo
        this.nomeHeroi = nomeHeroi        // Atribui o valor de nomeHeroi ao atributo nomeHeroi do objeto
        this.idade = idade                // Atribui o valor de idade ao atributo idade do objeto
        this.tipo = tipo                  // Atribui o valor de tipo ao atributo tipo do objeto
    }

    atacar() {                           // Declara um método chamado "atacar" dentro da classe
        if (this.tipo === "mago") {       // Verifica se o tipo do herói é "mago"
            let ataque = "magia"          // Se for "mago", define o ataque como "magia"
            console.log(`O ${this.tipo} atacou usando ${ataque}`) // Mostra no console a mensagem informando o ataque
        } else if (this.tipo === "guerreiro") { // Caso contrário, verifica se o tipo é "guerreiro"
            let ataque = "espada"         // Se for "guerreiro", define o ataque como "espada"
            console.log(`O ${this.tipo} atacou usando ${ataque}`) // Mostra no console a mensagem
        } else if (this.tipo === "monge") { // Caso contrário, verifica se o tipo é "monge"
            let ataque = "artes marciais" // Se for "monge", define o ataque como "artes marciais"
            console.log(`O ${this.tipo} atacou usando ${ataque}`) // Mostra no console a mensagem
        } else if (this.tipo === "ninja") { // Caso contrário, verifica se o tipo é "ninja"
            let ataque = "shuriken"       // Se for "ninja", define o ataque como "shuriken"
            console.log(`O ${this.tipo} atacou usando ${ataque}`) // Mostra no console a mensagem
        } 
    }
}

let nossoHeroi = new heroi("Jhonata", 20, "mago") // Cria um novo objeto da classe heroi chamado "nossoHeroi", passando o nome, idade e tipo

nossoHeroi.atacar();                     // Chama o método atacar() para o objeto "nossoHeroi", exibindo a mensagem correspondente
