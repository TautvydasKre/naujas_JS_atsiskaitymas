/** @format */

"use strict";

// pirma uzduotis...

// let skaiciukas;

// for (let i = 0; ; i++) {
//   skaiciukas = parseInt(
//     prompt(`Iveskite skaicioka... isrysiu katras pirmas neigiamas... `)
//   );
//   if (skaiciukas < 0) {
//     console.log(skaiciukas);
//     break;
//   }
// }

//  antra uzduotis...

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 !== 0) {
//     console.log(i);
//   }
// }

//  trecia uzduotis

// for (let i = 2; i < 12; i++) {
//   console.log(i ** 3);
// }

// ketvirta uzduotis

// const persons = {
//   jonas: 30,
//   petras: 26,
//   ona: 45,
//   maryte: 36,
//   antanas: 77,
//   "teta zita": 86,
// };

// for (let vardas in persons) {
//   const amzius = persons[vardas];
//   console.log(`Vardas: ${vardas}, Amzius: ${amzius}`);
// }

// penkta uzduotis

// const pokemonai = {
//   Pikaciu: "kovos gale 999",
//   Balbazauras: "kovos gale 875",
//   Cikorita: "kovos gale 798",
//   MewTwo: "kovos gale 9999",
// };

// let pokemonuSK = 0;

// for (let reiksmes in pokemonai) {
//   console.log(`${reiksmes}: ${pokemonai[reiksmes]}`);
//   pokemonuSK++;
// }

// console.log(`yra ovatiekvat reiksmiuuu: ${pokemonuSK}`);

// sesta uzduotis

// const sakinuks = prompt(`Iveskite savo nuostabiausia sakinuka:... `);
// const zodeliai = sakinuks.split(" ");
// for (const zodis of zodeliai) {
//   console.log(zodis);
// }

// septinta uzduotis

// const sakiniuks = prompt(`Iveskite dar viena savo nuostabiausia sakinuka:... `);
// let ilgis = 0;
// for (const raideles of sakiniuks) {
//   ilgis++;
// }
// console.log(`Sakinuko ilgis: ${sakiniuks.length}`);
// console.log(`Funkcijos length ilgis: ${ilgis}`);

//  astunta uzduotis

// let sk1 = 20;
// do {
//   if (sk1 % 2 === 0) {
//     console.log(sk1);
//   }
//   sk1++;
// } while (sk1 <= 50);

// devinta uzduotis

// for (let i = 0; ; i++) {
//   let sk2 = parseInt(
//     prompt(`Iveskite skaicioka... isrysiu katra pirmas nelyginis... `)
//   );
//   if (sk2 % 2 !== 0) {
//     alert(sk2);
//     break;
//   }
// }

// desimta uzduotis

// let suma = 0;
// let sk3;
// do {
//   sk3 = parseInt(
//     prompt(`Ivesk teigiamus skaicius. Jei ivesi 0, gausi atsakyma`)
//   );

//   if (sk3 < 0) {
//     alert(`Sakiau teigiamus skaicius pokstininke!!`);
//   } else {
//     suma += sk3;
//   }
// } while (sk3 !== 0);

// console.log(`Skaiciu suma: ${suma}`);
