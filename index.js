'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'flippingBits' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER n as parameter.
 */

function flippingBits(n) {
    // Write your code here
    //convert base 10 to base 2
    var binario=n.toString(2);
   //add ceros to complete 32 bits
  var missingCeros= 32-(binario.length);
  binario='0'.repeat(missingCeros)+binario;
  
  //flip ceros to 1 and 1 to ceros
  var flipBinarioArray=[...binario]
    
    for(let i=0;i<flipBinarioArray.length;i++){
        flipBinarioArray[i]=flipBinarioArray[i]==="1" ? "0" : "1";
    }
    var flipBinario= parseInt(flipBinarioArray.join(''),2);
    return flipBinario;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const n = parseInt(readLine().trim(), 10);

        const result = flippingBits(n);

        ws.write(result + '\n');
    }

    ws.end();
}
