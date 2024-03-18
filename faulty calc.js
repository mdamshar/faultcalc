let randoms = Math.random()
let a = prompt("enter first number : ")
let c = prompt("Enter operation : ")
let b = prompt("enter second number : ")

let obj = {
    "+": "-",
    "-": "/",
    "*": "+",
    "/": "**",
}
if (randoms > 0.1) {
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
    
} else {
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
 
}
