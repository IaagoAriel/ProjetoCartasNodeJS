const card = require("./card.js");
const json = require("./cards.json");
const cardConcatenator = require("./cardConcatenator.js");

module.exports = class controller {

    returnFinalString({quantityOfCards}){

        console.log("quantityOfCards="+quantityOfCards);

        let cardArray = [];
        let symbolArray = [];
        let randomArray = [];
        let totalSum = 0;
       
        for(let i = 0; i < quantityOfCards; i++){
            let randomPosition = Math.floor(Math.random() * 20);
            randomArray.push(randomPosition);
            cardArray.push(new card(json[randomPosition]));
            symbolArray.push(cardArray[i].suit);
            totalSum+=cardArray[i].number;
        }

        let symbolConcatenation = symbolArray.join("");

        let result = new cardConcatenator(symbolConcatenation,totalSum);
        console.log(result); // Resultado final!
        console.log(randomArray); // Existe para verificar o código via teste de mesa
        return result;

    }

}