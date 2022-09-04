var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll('.square');
var colorDisplay = document.querySelector('#color-display');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = querySelector('#reset');
var modeButtons = querySelectorAll('.mode');
var easyButton = querySelector('.mode');



function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
        h1.style.backgroundColor = color;
    }
}

function chooseColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function genRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(makeColor());
    }
    return arr;
}

function makeColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
