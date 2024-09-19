#!/usr/bin/env node


const args = process.argv.slice(2);

// Default values for password generation
let length = 8, useNumbers = false, useCapitals = false, useSymbols = false;

// Function to generate password
const generatePassword = (length, useNumbers, useCapitals, useSymbols) => {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const symbols = "!@#$%^&*()_+{}:\"<>?|[];',./";
  
  let characters = letters;
  if (useNumbers) characters += numbers;
  if (useCapitals) characters += capitals;
  if (useSymbols) characters += symbols;

  return Array.from({ length }, () => characters[Math.floor(Math.random() * characters.length)]).join('');
};

// Parsing command line arguments
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
    case "-s":
      useSymbols = true;
      break;
    default:
      console.error(`Error: Unknown option '${arg}'`);
      displayHelp();
  }
}

// Function to display help/usage information
const displayHelp = () => {
  console.log(`
Usage: QAP-Password-Gen [options]

Options:
  --help, -h          Display this help message
  --length, -l        Set the desired password length (default: 8)
  --numbers, -n       Add numbers to the generated password
  --capitals, -c      Include uppercase letters in the password
  --symbols, -s       Add special characters to the password

Example(s):
  password-generator-cli --length 12 --numbers --symbols
  password-generator-cli --symbols --capitals
`);
  process.exit(0);
};

// Generate and display password
const password = generatePassword(length, useNumbers, useCapitals, useSymbols);
console.log(`Generated password: ${password}`);