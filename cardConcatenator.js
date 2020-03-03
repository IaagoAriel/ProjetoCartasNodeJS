module.exports = class cardConcatenator{

    constructor({concatenatedString, sum}){
        this.concatenatedString = concatenatedString;
        this.sum = sum;
    }

    get concatenatedString(){
        return this.concatenatedString;
    }

    set concatenatedString(concatenatedString){
        this.concatenatedString = concatenatedString;
    }

    get sum(){
        return this.sum;
    }

    set sum(sum){
        this.sum = sum;
    }

}

