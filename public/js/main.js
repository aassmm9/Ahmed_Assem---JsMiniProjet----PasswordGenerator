let passwordGenerate = document.querySelector(".btnGenerate"); // Je crée une variable qui récupere la class ".btnGenerate" !
let firstInput = document.querySelector("#firstInput"); // Je crée une variable qui récupere l'id  ".firstInput" !
let passwordLength = document.querySelector(".inputNumber"); // Je crée une variable qui récupere la class ".inputNumber" !
let checkMaj = document.querySelector(".checkMaj"); // Je crée une variable qui récupere la class ".checkMaj" !
let checkMin = document.querySelector(".checkMin"); // Je crée une variable qui récupere la class ".checkMin" !
let checkNbr = document.querySelector(".checkNbr"); // Je crée une variable qui récupere la class ".checkNbr" !
let checkSym = document.querySelector(".checkSym"); // Je crée une variable qui récupere la class ".checkSym" !


passwordGenerate.addEventListener("click", () => { 
    let length = parseInt(passwordLength.value); // je crée une variable "length" qui me renvoie la longueur du mot de passe !
    let includeMaj = checkMaj.checked; // on me renvoie true ou false si l'input est coché
    let includeMin = checkMin.checked; // on me renvoie true ou false si l'input est coché
    let includeNbr = checkNbr.checked; // on me renvoie true ou false si l'input est coché
    let includeSym = checkSym.checked; // on me renvoie true ou false si l'input est coché


    let allCharacter = "";  // variable ou il y aura tout les characteres autorisée

    if (includeMaj == true) {
        allCharacter = allCharacter +  "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
    }
    if (includeMin == true) {
        allCharacter = allCharacter + "abcdefghijklmnopqrstuvwxyz";
    } 
    if (includeNbr == true) {
        allCharacter = allCharacter + "0123456789";
    } 
    if (includeSym == true) {
        allCharacter = allCharacter + "!@#$%^&*()-_+=";
    } 



    let password = ""; // je crée une variable qui contiendra mon mot de passe
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * allCharacter.length); // je crée un variable "randomIndex" qui va contenir un index aléatoir entre 0 et la taille de "allCharacter.length" (la taille de mon tableau).
        password = password + allCharacter[randomIndex]; // Je rajoute chaque caractere a mon mot de passe
    }

    firstInput.value = password;
});