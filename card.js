module.exports = class card {

    constructor({suit,number}){

        // O nome do atributo deve ser diferente do nome do set e get. Card.suit chama o get do atributo suit.
        // Neste caso programa entrará em loop pois o getter chamará a si mesmo.
        this._suit = suit;
        this._number = number;
    }

    get number(){
        return this._number;
    }

    set number(number){
        this._number = number;
    }

    get suit() {
        return this._suit;
    }

    set suit(suit){
        this._suit = suit;
    }

}