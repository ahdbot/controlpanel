import './assets/sass/style.scss';
import 'normalize.css/normalize.css';
console.log("hello from webpack");


function studentname(firstname, lastname) {
    console.log(firstname + " " + lastname);
}

console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);


var student = require("./studentname");
var student1 = new student("Noor", "hilles");