const fs = require('fs');
const source = fs.readFileSync("./fibonacci.wasm");
const typedArray = new Uint8Array(source);

WebAssembly.instantiate(typedArray, {
  env: {
    print: (result) => { console.log(`The result is ${result}`); }
  }}).then(result => {
  const fibo = result.instance.exports.fibo;
  fibo(20,2);
});