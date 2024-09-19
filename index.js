#!/usr/bin/env node

const args = process.argv.slice(2);

//Setting the default value for the user
let length = 8
let useNumbers = false, useCapitals = false, useSymbols = false;