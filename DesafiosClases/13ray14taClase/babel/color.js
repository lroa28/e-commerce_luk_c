class RandomColor {
    constructor(red, blue, green) {
        this.red= red;
        this.blue= blue;
        this.green = green;
    }

    getRandomColor(red, blue, green) {
        this.red = red;
        this.blue = blue;
        this.green = green;
        return this;
    }
}

module.exports = RandomColor;

const RandomColor = require('./classes/RandomColor.js');

const red = Math.floor((Math.random() * 255));
const blue = Math.floor((Math.random() * 255));c
const green = Math.floor((Math.random() * 255));

const theColor = new RandomColor(red, blue, green);

console.log("%c This color",`color: rgb(${theColor.red},${theColor.blue},${theColor.green})`);
console.log(`${theColor.red} ${theColor.blue} ${theColor.green}`)

//http://kangax.github.io/compat-table/es6/