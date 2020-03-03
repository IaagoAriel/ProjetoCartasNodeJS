const card = require("./card.js");
const json = require("./cards.json");
const cardConcatenator = require("./cardConcatenator.js");

module.exports = class controller {

    returnFinalString({quantityOfCards}){
        console.log({quantityOfCards});
        console.log(quantityOfCards);
        console.log("q="+quantityOfCards);

        let cardArray = [];
        let symbolArray = [];
        let totalSum = 0;
       
        for(let i = 0; i < quantityOfCards; i++){
            console.log("i="+i);
            var randomPosition = Math.floor(Math.random() * 20);
            console.log(randomPosition);
            cardArray.push(new card(json[randomPosition]));
        }
        
        for(let i = 0; i < quantityOfCards; i++){
            symbolArray.push(cardArray[i].getSymbol());
            totalSum+=cardArray[i].getNumber();
        }
        console.log("app 5");
        let symbolConcatenation = symbolArray.join();

        let result = new cardConcatenator(symbolConcatenation,totalSum);
        console.log("app 6");
        return result;

    }

}