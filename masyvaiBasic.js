function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('-----1-----');
// Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.
const masyvas = [];
for (let i = 0; i < 30; i++) {
  masyvas[i] = rand(5, 25);
}
console.log(masyvas);

console.log('-----2-----');
// Naudodamiesi 1 uždavinio masyvu:
console.log('---A---');
// Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;
let didesnisUz10 = 0;
let didziausias = 0;
for (let i = 0; i < masyvas.length; i++) {
  if (masyvas[i] > 10) {
    didesnisUz10++;
  }
  if (masyvas[i] > didziausias) {
    didziausias = masyvas[i];
  }
}
console.log('Didesniu uz 10 masyve yra : ' + didesnisUz10);

console.log('---B---');
// Raskite didžiausią masyvo reikšmę ir jos indeksą;
console.log('Didziausias skaicius masyve: ' + didziausias);
let didziausioIndeksas = [];
for (let i = 0; i < masyvas.length; i++) {
  if (didziausias === masyvas[i]) {
    didziausioIndeksas.push(i);
  }
}
console.log('Jo indeksas/ai: ' + didziausioIndeksas);

console.log('---C---');
// Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;
let poriniuIndeksuSuma = 0;
for (let i = 0; i < masyvas.length; i += 2) {
  poriniuIndeksuSuma += masyvas[i];
}
console.log('Poriniu indexu suma: ' + poriniuIndeksuSuma);

console.log('---D---');
// Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;
const naujasMasyvas = [];
for (let i = 0; i < masyvas.length; i++) {
  naujasMasyvas[i] = masyvas[i] - i;
}
console.log(naujasMasyvas);

console.log('---E---');
// Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;

do {
  masyvas.push(rand(5, 25));
} while (masyvas.length < 40);
console.log(masyvas);

// for (let i = 0; i < 10; i++) {
//   masyvas.push(rand(5, 25));
// }
// console.log(masyvas);

console.log('---F---');
// Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indeksų reikšmių, o kitas iš porinių (pagal neporinį-porinį indeksą, ne reikšmę);
const poriniuIndeksuMasyvas = [];
const neporiniuIndeksuMasyvas = [];
for (let i = 0; i < masyvas.length; i++) {
  if (i % 2 === 0) {
    poriniuIndeksuMasyvas.push(masyvas[i]);
  } else {
    neporiniuIndeksuMasyvas.push(masyvas[i]);
  }
}
console.log('Poriniu: ' + poriniuIndeksuMasyvas);
console.log('Neporiniu: ' + neporiniuIndeksuMasyvas);

console.log('---G---');
// Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;
for (let i = 0; i < masyvas.length; i += 2) {
  if (masyvas[i] > 15) {
    masyvas[i] = 0;
  }
}
console.log(masyvas);

console.log('---H---');
// Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;
let pirmasDidesnisUz10;
for (let i = 0; i < masyvas.length; i++) {
  if (masyvas[i] > 10) {
    pirmasDidesnisUz10 = i;
    break;
  }
}
console.log('Pirmo, didesnio uz 10 indeksas yra: ' + pirmasDidesnisUz10);

console.log('-----3-----');
// Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.
const raidziuMasyvas = [];
let kuriRaide;
let a = 0;
let b = 0;
let c = 0;
let d = 0;
for (let i = 0; i < 200; i++) {
  kuriRaide = rand(0, 3);
  if (kuriRaide === 0) {
    raidziuMasyvas[i] = 'A';
    a++;
  } else if (kuriRaide === 1) {
    raidziuMasyvas[i] = 'B';
    b++;
  } else if (kuriRaide === 2) {
    raidziuMasyvas[i] = 'C';
    c++;
  } else {
    raidziuMasyvas[i] = 'D';
    d++;
  }
}
console.log(raidziuMasyvas);
console.log(`Masyve yra ${a} A, ${b} B, ${c} C ir ${d} D raides/ziu.`);

console.log('-----4-----');
// Sugeneruokite 3 masyvus pagal 3 uždavinio sąlygą. Sudėkite masyvus, sudėdami atitinkamas reikšmes. Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.
const raidziuMasyvas1 = [];
for (let i = 0; i < 200; i++) {
  kuriRaide = rand(0, 3);
  if (kuriRaide === 0) {
    raidziuMasyvas1[i] = 'A';
  } else if (kuriRaide === 1) {
    raidziuMasyvas1[i] = 'B';
  } else if (kuriRaide === 2) {
    raidziuMasyvas1[i] = 'C';
  } else {
    raidziuMasyvas1[i] = 'D';
  }
}
const raidziuMasyvas2 = [];
for (let i = 0; i < 200; i++) {
  kuriRaide = rand(0, 3);
  if (kuriRaide === 0) {
    raidziuMasyvas2[i] = 'A';
  } else if (kuriRaide === 1) {
    raidziuMasyvas2[i] = 'B';
  } else if (kuriRaide === 2) {
    raidziuMasyvas2[i] = 'C';
  } else {
    raidziuMasyvas2[i] = 'D';
  }
}
const raidziuMasyvas3 = [];
for (let i = 0; i < 200; i++) {
  kuriRaide = rand(0, 3);
  if (kuriRaide === 0) {
    raidziuMasyvas3[i] = 'A';
  } else if (kuriRaide === 1) {
    raidziuMasyvas3[i] = 'B';
  } else if (kuriRaide === 2) {
    raidziuMasyvas3[i] = 'C';
  } else {
    raidziuMasyvas3[i] = 'D';
  }
}
console.log(raidziuMasyvas1);
console.log(raidziuMasyvas2);
console.log(raidziuMasyvas3);

const bendrasRaidziuMasyvas = [];
let unikaliosKombinacijos = [];
for (let i = 0; i < 200; i++) {
  let kombinacijos =
    raidziuMasyvas1[i] + raidziuMasyvas2[i] + raidziuMasyvas3[i];
  if (!bendrasRaidziuMasyvas.includes(kombinacijos)) {
    unikaliosKombinacijos.push(kombinacijos);
  }
  bendrasRaidziuMasyvas[i] = kombinacijos;
}
console.log(bendrasRaidziuMasyvas);
console.log(unikaliosKombinacijos);

console.log('Unikaliu kombinaciju: ' + unikaliosKombinacijos.length);
let kazkas = 0;
for (let i = 0; i < unikaliosKombinacijos.length; i++) {
  //   if (bendrasRaidziuMasyvas.filter((v) => v == unikaliosKombinacijos[i])) {
  //     kazkas++;
  //   }
  //   console.log(kazkas);
  // for (let a = 0; a < bendrasRaidziuMasyvas.length; a++) {
  //   if (unikaliosKombinacijos[i] === bendrasRaidziuMasyvas[a]) {
  //     kazkas++;
  //   }
  // }
  // console.log(unikaliosKombinacijos[i], kazkas);
}

console.log('-----5-----');
// Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).
const masyvas1 = [];
let randomSkaicius;
for (let i = 0; i < 100; i++) {
  randomSkaicius = rand(100, 999);
  do {
    masyvas1[i] = randomSkaicius;
  } while (!masyvas1.includes(randomSkaicius));
}
console.log(masyvas1);

const masyvas2 = [];
for (let i = 0; i < 100; i++) {
  randomSkaicius = rand(100, 999);
  do {
    masyvas2[i] = randomSkaicius;
  } while (!masyvas2.includes(randomSkaicius));
}
console.log(masyvas2);

console.log('-----6-----');
// Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 5 uždavinio masyve, bet nėra antrame 5 uždavinio masyve.
const masyvas3 = [];
for (let i = 0; i < masyvas1.length; i++) {
  if (!masyvas2.includes(masyvas1[i])) {
    masyvas3.push(masyvas1[i]);
  }
}
console.log(masyvas3);

console.log('-----7-----');
// Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 5 uždavinio masyvuose.
const masyvas4 = [];
for (let i = 0; i < masyvas1.length; i++) {
  if (masyvas2.includes(masyvas1[i])) {
    masyvas4.push(masyvas1[i]);
  }
}
console.log(masyvas4);

console.log('-----8-----');
// Sugeneruokite masyvą, kurio indeksus sudarytų pirmo 5 uždavinio masyvo reikšmės, o jo reikšmės būtų iš antrojo masyvo.
const megaGigantas = [];
let didziausiaPirmoMasyvoReiksme = 0;
for (let i = 0; i < masyvas1.length; i++) {
  if (didziausiaPirmoMasyvoReiksme < masyvas1[i]) {
    didziausiaPirmoMasyvoReiksme = masyvas1[i];
  }
}
console.log('Didziausias indeksas: ' + didziausiaPirmoMasyvoReiksme);
for (let i = 0; i < didziausiaPirmoMasyvoReiksme; i++) {
  if (masyvas1.includes(i)) {
    for (let a = 0; a < masyvas2.length; a++) {
      megaGigantas[i] = masyvas2[a];
    }
  }
}

console.log('Mega:' + megaGigantas);

console.log('-----9-----');
// Sugeneruokite 10 skaičių masyvą pagal taisyklę: Du pirmi skaičiai- atsitiktiniai nuo 5 iki 25. Trečias, pirmo ir antro suma. Ketvirtas- antro ir trečio suma. Penktas trečio ir ketvirto suma ir t.t.
const paskutinis = [];
for (let i = 0; i < 10; i++) {
  if (i < 2) {
    paskutinis[i] = rand(5, 25);
  } else {
    paskutinis[i] = paskutinis[i - 1] + paskutinis[i - 2];
  }
}
console.log(paskutinis);
