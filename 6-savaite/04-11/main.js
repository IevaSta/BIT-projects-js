let a, b, c, d, f;

a = 2;
b = 3;
c = true;
d = [a, b, c];
f = ["js", 7, true, false];

console.log(a, b, c);
console.log(d[0], d[1], d[2]);
console.log(d);
console.log(f);

let x, y, z;

x = 1;
y = 2;
z = 3;

if (x + x > z) {
    console.log("pirmas atsakymas")
} else if (z - x == y) {
    console.log("antras atsakymas")
}

if (z + z > z) {
    console.log("trecias atsakymas")
}

if (x + y == z) {
    console.log("ketvirtas atsakymas")
}

const inputElement = document.getElementById("inputas");

function count() {
    const inputValue = Number(inputElement.value);
    //const inputElementToNumber = Number(inputValue);

    //console.log(a + inputValue);
    //console.log(a + inputElementToNumber);
    //console.log(inputValue);

    if (a + inputValue > 10) {
        console.log("didesnis uz 10")

    } else {
        console.log(a + inputValue)
    }

}