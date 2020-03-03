module.exports = class Card {

    constructor({suit,number}){
        this.number = number;
        this.suit = suit;
    }

    get number(){
        return this.number;
    }

    set number(number){
        this.number = number;
    }

    get suit(){
        return this.suit;
    }

    set suit(suit){
        this.suit = suit;
    }

}