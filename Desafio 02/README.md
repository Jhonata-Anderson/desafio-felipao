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
📌 Projeto educacional em JavaScript para treinar lógica de programação proporcionado pela DIO.
