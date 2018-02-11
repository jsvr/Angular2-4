/**
 * Created by 34395 on 2018/2/11.
 */
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");

let button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function() {
    alert(greeter.greet());
}

document.body.appendChild(button);

var myname = "zhang yang";
var getName = () => {
    return " zhang yang"
}

console.log(`hello ${myname}`);
console.log(`hello ${getName()}`);