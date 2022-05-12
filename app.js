'use strict';
// truputi priziuri kodo teisinguma/naujuma

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const n = ['Petras', 'Asilas', 'Barsukas', 'Kate'];

console.table(n);

console.log(n[1]);

n[1] = 'Kazys';
console.table(n);

n[4] = 'Suo';
console.table(n);

n.pop();
// ismeta paskutini elementa

n.shift();
// ismeta 0 elementa

// n[8] = 'Karlsonas';
n.push('Karlsonas');
// prideda elementa prie array galo
n.push('Karve');
n.push('Ona');
n.push('Gyvate');
n.unshift('Pele');
// prideda elemanta prie array pradzios
// console.log(n);
console.table(n);
console.log(n.length);

// bandom iskraustyti barsuka, gyvenanti 2 aukste

n.splice(2, 1);
// pirmas parametras nurodo nuo kelinto pradedam
// antru parametru nurodom kiek 'aukstu'/ nariu ismesti
console.table(n);

for (let i = 0; i < n.length; i++) {
  console.log(n[i]);
}

const nPlus = [
  [4, 7, 12],
  [85, 17, 12],
  [10, 33, 74],
  [26, 41, 99],
];

console.table(nPlus);
console.log(nPlus[1][0]);
console.log(nPlus[3][2]);

console.log('masyvas - masyve, ciklas - cikle, kad pasiekti visus narius');
for (let i = 0; i < nPlus.length; i++) {
  for (let a = 0; a < nPlus[i].length; a++) {
    console.log(nPlus[i][a]);
  }
}

console.log('tas pats su for each padaryta');
nPlus.forEach((m) => {
  m.forEach((k) => console.log(k));
});
console.log('dar labiau supaprastinta');
nPlus.forEach((m) => m.forEach((k) => console.log(k)));

console.log('------kuriam nauja masyva------');
const naujasNamas = [];
for (let i = 0; i < 30; i++) {
  naujasNamas.push(rand(10, 99));
}
console.table(naujasNamas);

console.log('-----kuriam masyva masyve-----');
const namas = [];

for (let k = 0; k < 10; k++) {
  const aukstas = [];
  for (let i = 0; i < 10; i++) {
    aukstas.push(rand(10, 99));
  }
  namas.push(aukstas);
}
console.table(namas);
