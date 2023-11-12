// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let PersonName1 = "Ishaq Khan";
// step 1 show in lower case:
let lowercaseName1 = PersonName.toLowerCase();
console.log(lowercaseName);
// step 2 show name in uppercase
let uppercaseName1 = PersonName.toUpperCase();
console.log(uppercaseName);
// step 3 show name in titlecase
let words1 = PersonName.split(" ");
let titlecaseName1 = "";
for (let i = 0; i < words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
;
console.log(titlecaseName);
