#!/usr/bin/env node

const args = process.argv.slice(2);

//Setting the default value for the user
let length = 8
let useNumbers = false, useCapitals = false, useSymbols = false;let useNumbers = false, useCapitals = false;
//Actually generating a password

const generatePassword = (length, useNumbers, useCapitals) => {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //setting values
    let characters  = letters;
    if (useNumbers) characters += numbers;
    if (useCapitals) characters += capitals

