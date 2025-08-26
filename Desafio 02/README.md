# 🏆 Classificador de Rank de Herói

## 📖 Descrição do Projeto

Este projeto em **JavaScript** implementa um sistema de classificação de **heróis** com base em suas vitórias e derrotas.  
O programa calcula o **saldo de vitórias** e, a partir desse valor, determina o **nível do herói** dentro de uma escala pré-definida.

---

## ⚔️ Regras de Classificação

A classificação é feita de acordo com o **saldo de vitórias** (vitórias - derrotas):

- **Ferro** → saldo **≤ 10**  
- **Bronze** → saldo entre **11 e 20**  
- **Prata** → saldo entre **21 e 50**  
- **Ouro** → saldo entre **51 e 80**  
- **Diamante** → saldo entre **81 e 90**  
- **Lendário** → saldo entre **91 e 100**  
- **Imortal** → saldo **> 100**

---

## 🧠 O Que Foi Utilizado

- **Funções**:  
  - `calculoDeRank(vitoria, derrota)` → calcula o saldo de vitórias.  
  - `nivelDoRank(resultado)` → define o nível do herói com base no saldo.  

- **Variáveis locais**: Para armazenar resultados temporários como `resultado` e `rank`.  

- **Estruturas de decisão**: `if / else if / else` para verificar os intervalos de saldo.  

- **Console**: Para exibir a mensagem final ao usuário.

---

## 📂 Estrutura do Código

```javascript
function calculoDeRank(vitoria, derrota) {
    let resultado = vitoria - derrota
    return resultado;
}

function nivelDoRank(calculoDeRank) {
    if (calculoDeRank <= 10) {
        return "Ferro"
    } else if (calculoDeRank >= 11 && calculoDeRank <= 20) {
        return "Bronze"
    } else if (calculoDeRank >= 21 && calculoDeRank <= 50) {
        return "Prata"
    } else if (calculoDeRank >= 51 && calculoDeRank <= 80) {
        return "Ouro"
    } else if (calculoDeRank >= 81 && calculoDeRank <= 90) {
        return "Diamante"
    } else if (calculoDeRank >= 91 && calculoDeRank <= 100) {
        return "Lendário"
    } else {
        return "Imortal"
    }
}

let resultadoRank = calculoDeRank(52, 16)

console.log("O Herói tem de saldo de " + resultadoRank + " está no nível de " + nivelDoRank(resultadoRank))
```

---

## ▶️ Como Executar o Projeto

1. Crie um arquivo chamado `classificadorDeRank.js` e copie o código acima.
2. Certifique-se de ter o **Node.js** instalado ([baixe aqui](https://nodejs.org)).
3. Abra o terminal na pasta onde o arquivo foi salvo.
4. Execute o comando:

```bash
node classificadorDeRank.js
```

---

## ✅ Exemplo de Saída

```bash
O Herói tem de saldo de 36 está no nível de Prata
```

---

## ✨ Personalização

Altere os valores dentro de:

```javascript
let resultadoRank = calculoDeRank(52, 16)
```

para simular diferentes cenários de vitórias e derrotas.  

---

## 📬 Contato

Criado por **Jhonata Anderson dos Santos Silva**  
📌 Projeto educacional em JavaScript para treinar lógica de programação.
