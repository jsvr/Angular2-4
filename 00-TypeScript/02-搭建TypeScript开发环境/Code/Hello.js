/**
 * Created by 34395 on 2018/2/11.
 */
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
})();
var greeter = new Greeter("world");
var button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function () {
    alert(greeter.greet());
};
document.body.appendChild(button);
var myname = "zhang yang";
var getName = function () {
    return " zhang yang";
};
console.log("hello " + myname);
console.log("hello " + getName());
//# sourceMappingURL=Hello.js.map