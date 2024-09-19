#!/usr/bin/env node

const args = process.argv.slice(2);

// Setting The Default Value For The User
let length = 8;
let useNumbers = false, useCapitals = false, useSymbols = false;

// Function To Display Help/Usage Information
const displayHelp = () => {
  console.log(`

Help Menu For Password Generator:

    --help, -h       [ Display this help message ]
    --length, -l     [ Set the desired password length (default: 8) ]
    --numbers, -n    [ Add numbers to the generated password ]
    --capitals, -c   [ Include uppercase letters in the password ]
    --symbols, -s    [ Include Symbols in the password ]
  
List Of Example(s) To Use For Passwords
    node index --length 12 --numbers --capitals
    node index --length 28 --capitals
    node index --length 15 --numbers --capitals --symbols
  `);
  process.exit(0);
};

// Actually Generating A Password
const generatePassword = (length, useNumbers, useCapitals, useSymbols) => {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const symbols = "!@#$%^&*()_+";

  // Setting Values
  let characters = letters;
  if (useNumbers) characters += numbers;
  if (useCapitals) characters += capitals;
  if (useSymbols) characters += symbols

  return Array.from({ length }, () => characters[Math.floor(Math.random() * characters.length)]).join('');
};

// Setting Up The Command Line Flags
for (let i = 0; i < args.length; i++) {
  const arg = args[i];
  switch (arg) {
    case "--help":
    case "-h":
      displayHelp();
      break;

    case "--length":
    case "-l":
      length = parseInt(args[++i], 10);
      if (isNaN(length) || length <= 0) {
        console.error("Error: Length must be a positive number.");
        process.exit(1);
      }
      break;

    case "--numbers":
    case "-n":
      useNumbers = true;
      break;

    case "--capitals":
    case "-c":
      useCapitals = true;
      break;

    case "--symbols":
    case "-n":
      useSymbols = true;
      break;

    default:
      console.error(`Error: Unknown option '${arg}'`);
      displayHelp();
  }
}

// Generate Password And Display It
const password = generatePassword(length, useNumbers, useCapitals, useSymbols);
console.log(`Generated User Password: ${password}`);
