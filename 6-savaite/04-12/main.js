const numerZone = document.getElementById('numberZone');
let prevNumber;
let symbol;
let isEqualsClicked = false;

function addNumber(number) {
    if (Number(numberZone.textContent) == 0) {
        numberZone.textContent = number;
    } else {
        numberZone.textContent += number;
    }
}

function deleteNumber() {
    numberZone.textContent = numberZone.textContent.slice(0, -1);

    if (numberZone.textContent.length == 0) {
        numberZone.textContent = 0;
    }
}

function mathActions(symbolParam) {
    if (prevNumber && !isEqualsClicked) {
        equals(false);
    }
    prevNumber = Number(numberZone.textContent);
    symbol = symbolParam;
    console.log(symbol);
    numberZone.textContent = 0;
}

function equals(clicked) {
    isEqualsClicked = clicked;
    if (symbol == '+') {
        numberZone.textContent = prevNumber + Number(numberZone.textContent);
    } else if (symbol == '-') {
        numberZone.textContent = prevNumber - Number(numberZone.textContent);
    } else if (symbol == 'x') {
        numberZone.textContent = prevNumber * Number(numberZone.textContent);
    }
}

