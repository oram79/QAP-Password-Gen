#!/usr/bin/env node

const args = process.argv.slice(2);

//Setting the default value for the user
let length = 8
let useNumbers = false, useCapitals = false;
//Actually generating a password

const generatePassword = (length, useNumbers, useCapitals) => {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //setting values
    let characters  = letters;
    if (useNumbers) characters += numbers;
    if (useCapitals) characters += capitals

    return Array.from({length}, () => characters[Math.floor(Math.random() * characters.length)]).join('');
};

//setting up the command line arguments
for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    switch (arg) {
        
        case "--help":
        case "h":
            displayHelp();
            break;

        case"--length":
        case"-l":
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