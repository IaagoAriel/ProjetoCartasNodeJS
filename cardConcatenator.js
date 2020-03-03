module.exports = class cardConcatenator{

    constructor(concatenatedString, sum){
        this._concatenatedString = concatenatedString;
        this._sum = sum;
    }

    get concatenatedString(){
        return this._concatenatedString;
    }

    set concatenatedString(concatenatedString){
        this._concatenatedString = concatenatedString;
    }

    get sum(){
        return this._sum;
    }

    set sum(sum){
        this._sum = sum;
    }

}

