# 🧙‍♂️ Classe de Herói em JavaScript

## 📖 Descrição do Projeto

Este projeto em **JavaScript** implementa uma classe chamada **heroi**, que representa personagens com atributos de nome, idade e tipo.  
Cada herói pode **atacar** com base em seu tipo, exibindo mensagens personalizadas no console.

---

## 🧠 O Que Foi Utilizado

- **Classes e Objetos**: Estrutura orientada a objetos para criar personagens.
- **Construtor**: Define os atributos `nomeHeroi`, `idade` e `tipo` para cada herói criado.
- **Método**:  
  - `atacar()` → Exibe no console o ataque específico conforme o tipo de herói.
- **Estruturas Condicionais**: `if / else if` para definir os ataques.

---

## 📂 Estrutura do Código

```javascript
class heroi {
    constructor(nomeHeroi, idade, tipo) {
        this.nomeHeroi = nomeHeroi
        this.idade = idade
        this.tipo = tipo
    }

    atacar() {
        if (this.tipo === "mago") {
            let ataque = "magia"
            console.log(`O ${this.tipo} atacou usando ${ataque}`)
        } else if (this.tipo === "guerreiro") {
            let ataque = "espada"
            console.log(`O ${this.tipo} atacou usando ${ataque}`)
        } else if (this.tipo === "monge") {
            let ataque = "artes marciais"
            console.log(`O ${this.tipo} atacou usando ${ataque}`)
        } else if (this.tipo === "ninja") {
            let ataque = "shuriken"
            console.log(`O ${this.tipo} atacou usando ${ataque}`)
        }
    }
}

let nossoHeroi = new heroi("Jhonata", 20, "mago")

nossoHeroi.atacar();
```

---

## ✅ Exemplo de Saída

```bash
O mago atacou usando magia
```

---

## ✨ Personalização

Você pode criar novos personagens alterando os parâmetros do construtor:

```javascript
let novoHeroi = new heroi("Kenshin", 25, "ninja");
novoHeroi.atacar();
```

Isso exibirá:

```bash
O ninja atacou usando shuriken
```

---

## 📬 Contato

Criado por **Jhonata Anderson dos Santos Silva**  
📌 Projeto educacional para prática de programação orientada a objetos em JavaScript proporcionada pela DIO.
