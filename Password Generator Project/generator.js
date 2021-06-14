const numberOfCharacters = document.getElementById("numberOfCharacters");
const form = document.getElementById("passwortGeneratorForm");
const displayPassword = document.getElementById("displayPassword");
const includingUppercase = document.getElementById("includingUppercase");
const includingNumbers = document.getElementById("includingNumbers");
const includingSymbols = document.getElementById("includingSymbols");

const Uppercase_Char = arrayHighLow(65, 90);
const Lowercase_Char = arrayHighLow(97, 122);
const Number_Char = arrayHighLow(48, 57);
const Symbol_Char = arrayHighLow(33, 47).concat(
    arrayHighLow(58, 64)
    ).concat(
        arrayHighLow(91, 96)
        ).concat(arrayHighLow(123,126));

numberOfCharacters.addEventListener(`input`, syncCharacterAmount);

form.addEventListener(`submit`, e => {
    e.preventDefault()
    let characterAmount = numberOfCharacters.value;
    let includeUppercase = includingUppercase.checked;
    let includeNumbers = includingNumbers.checked;
    let includeSymbols = includingSymbols.checked;

    const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols);
    displayPassword.innerText = password;
})

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
    let charCodes = Lowercase_Char;
    if (includeUppercase) {
        charCodes = charCodes.concat(Uppercase_Char);
    }
    if (includeNumbers) {
        charCodes = charCodes.concat(Number_Char);
    }
    if (includeSymbols) {
        charCodes = charCodes.concat(Symbol_Char);
    }

    const passwordCharacters = [];

    for (let i = 0; i < characterAmount; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
        passwordCharacters.push(String.fromCharCode(characterCode));
    }
    return passwordCharacters.join("");
}

function arrayHighLow(low, high) {
    const array = [];
    for (let i = low; i <= high; i++) {
        array.push(i);
    }
    return array;
}

function syncCharacterAmount(e) {
    const value = e.target.value;
    numberOfCharacters.value = value;

}

