// console.log(arguments);
// console.log(require("module").wrapper);

const C = require("./testmodule1")
const calc1 = new C();
console.log(calc1.add(2,5));

// const calc2 = require("./test-module-2");
const { add, multiply , divide } = require("./testmodule2");
console.log(multiply(2, 5));

// caching
require("./testmodule3")();
require("./testmodule3")();
require("./testmodule3")();