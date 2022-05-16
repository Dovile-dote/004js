function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('-----1-----');
// Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis nuo 10 iki 30, o reikšmės atsitiktiniai skaičiai nuo 0 iki 10 (pinigai);
const pinigine = [];
let pinigai = 0;
let popieriniaiPinigai = 0;
let didziausias = 0;
const smulkiuPinigine = [];
const stambiuPinigine = [];

for (let i = 0; i < rand(10, 30); i++) {
  pinigine[i] = rand(0, 10);
  pinigai += pinigine[i];

  if (pinigine[i] > 2) {
    stambiuPinigine.push(pinigine[i]);
    popieriniaiPinigai += pinigine[i];
  } else {
    smulkiuPinigine.push(pinigine[i]);
    pinigine[i] = 0;
  }

  if (pinigine[i] > didziausias) {
    didziausias = pinigine[i];
  }
}
console.log(pinigine);

console.log('-----2-----');
// Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio reikšmių (pinigų esančių piniginėje) sumą;
console.log('Pinigineje yra : ' + pinigai + ' pinigai/u.');

console.log('-----3-----');
// Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio popierinių pinigų (skaičių didesnių už 2 ) reikšmių sumą;
console.log('Pinigineje yra ' + popieriniaiPinigai + ' popieriniais pinigais.');

console.log('-----4-----');
// Išleisti visus metalinius pinigus (reikšmes, kurios yra mažesnės arba lygios 2 padaryti lygias 0) iš 1 uždavinio;
console.log('Pinigine, isleidus metalinius pinigus: ' + pinigine);

console.log('-----5-----');
// Surasti didžiausią reikšmę 1 uždavinio masyve ir paskaičiuoti kiek tokių didžiausių reikšmių masyve yra;
let kiekDidziausiu = 0;
for (let i = 0; i < pinigine.length; i++) {
  if (didziausias === pinigine[i]) {
    kiekDidziausiu++;
  }
}
console.log(
  'Didziausiais pinigas yra: ' +
    didziausias +
    ', pinigineje tokiu ' +
    kiekDidziausiu
);

console.log('-----6-----');
// Visus masyvo elementus, kurie yra lygūs 0, pakeisti į tų elementų indeksų (vietų, numerių) reikšmes;
for (let i = 0; i < pinigine.length; i++) {
  if (pinigine[i] === 0) {
    pinigine[i] = i;
  }
}
console.log(pinigine);

console.log('-----7-----');
// Į 1 uždavinio masyvą pridėti tiek naujų reikšmių (pinigų, atsitiktinių skaičių nuo 0 iki 10), kad masyvo ilgis būtų lygiai 30;
do {
  pinigine.push(rand(0, 10));
} while (pinigine.length !== 30);
console.log(pinigine);

console.log('-----8-----');
// Naudojant 1 uždavinio masyvą iš jo reikšmių sukurti dar du papildomus masyvus. Į vieną iš 1 uždavinio masyvo pridėti reikšmes mažesnes arba lygias 2 (monetas), o į kitą didesnes nei 2 (popierinius pinigus);
console.log(stambiuPinigine.slice());
console.log(smulkiuPinigine);

console.log('-----9-----');
// Sukurti masyvą (piniginę su dviem skyreliais) iš dviejų elementų, kurio pirmas elementas būtų masyvas iš 8 uždavinio su monetom, o antras elementas masyvas iš 8 uždavinio su popieriniais pinigais;
const pinigineSuDviemSkyriais = [smulkiuPinigine, stambiuPinigine];
console.table(pinigineSuDviemSkyriais);

console.log('-----10-----');
// Į 9 uždavinio masyvą, piniginę su dviem skyreliais, pridėti trečią skyrelį- masyvą su kortelėm: ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];
const korteles = [
  'KIKA',
  'Euro Vaistinė',
  'Drogas',
  'Ačiū',
  'Lietuvos Geležinkeliai',
  'Mano RIMI',
];
pinigineSuDviemSkyriais.push(korteles);
console.table(pinigineSuDviemSkyriais);

console.log('-----11-----');
// Korteles skyrelyje sudėlioti (išrūšiuoti) pagal abėcėlę;
pinigineSuDviemSkyriais[2].sort();
console.table(pinigineSuDviemSkyriais);

console.log('-----12-----');
// Į kortelių skyrelį pridėti mokėjimo kortelių 'MasterCard', 'Visa' (su rand generuokite atsitiktines reikšmes 'MasterCard' arba 'Visa' ir rašykite į masyvą) iš skirtingų bankų tiek, kad skyrelis (masyvo ilgis) pasidarytų lygus 20;
do {
  if (rand(0, 1) === 0) {
    pinigineSuDviemSkyriais[2].push('MasterCard');
  } else {
    pinigineSuDviemSkyriais[2].push('Visa');
  }
} while (pinigineSuDviemSkyriais[2].length !== 20);
console.table(pinigineSuDviemSkyriais);

console.log('-----13-----');
// Paskaičiuokite, kokio tipo kortelių ('MasterCard' arba 'Visa') yra daugiau;
let visa = 0;
let masterCard = 0;
for (let i = 0; i < pinigineSuDviemSkyriais[2].length; i++) {
  if (pinigineSuDviemSkyriais[2][i] === 'MasterCard') {
    masterCard++;
  } else if (pinigineSuDviemSkyriais[2][i] === 'Visa') {
    visa++;
  }
}

console.log(
  'Pinigineje yra ' + visa + ' Visa ir ' + masterCard + ' MasterCard korteliu.'
);

if (visa > masterCard) {
  console.log('Visa korteliu daugiau');
} else if (masterCard > visa) {
  console.log('MasterCard korteliu daugiau');
} else {
  console.log('Korteliu po lygiai');
}

console.log('-----14-----');
// Sukurkite masyve (piniginėje) ketvirtą elementą (skyrelį) į kurį įdėkite 10 loterijos bilietų, kurių numerius sugeneruokite atsitiktinai su rand funkcija nuo 1000000000 iki 9999999999;
const bilietai = [];
for (let i = 0; i < 10; i++) {
  bilietai[i] = rand(1000000000, 9999999999);
}
pinigineSuDviemSkyriais.push(bilietai);
console.table(pinigineSuDviemSkyriais);

console.log('-----15-----');
// Loterijos bilietų masyvą išrūšiuoti nuo didžiausio numerio iki mažiausio;
pinigineSuDviemSkyriais[3].sort((a, b) => a - b);
console.log(pinigineSuDviemSkyriais[3]);

console.log('-----16-----');
// Į piniginės popierinių pinigų skyrelį įdėti 500 pinigų mažom kupiūrom ( generuoti atsitiktinius skaičius nuo 3 iki 10 ir dėti kaip naujus elementus, kol įdėta suma bus lygi 500);
console.log(popieriniaiPinigai);
let naujasPinigas;
while (popieriniaiPinigai < 490) {
  naujasPinigas = rand(3, 10);
  pinigineSuDviemSkyriais[1].push(naujasPinigas);
  popieriniaiPinigai += naujasPinigas;
}

// console.log(pinigineSuDviemSkyriais[1]);
// console.log(popieriniaiPinigai);

while (popieriniaiPinigai !== 500) {
  naujasPinigas = rand(3, 10);
  if (popieriniaiPinigai + naujasPinigas !== 500) {
    naujasPinigas = 0;
  } else {
    popieriniaiPinigai += naujasPinigas;
    pinigineSuDviemSkyriais[1].push(naujasPinigas);
  }
}
console.log(pinigineSuDviemSkyriais[1]);
console.log(popieriniaiPinigai);

console.log('-----17-----');
// Patikrinti ar ką nors laimėjote. Bilieto numerius dalinkite iš 777 ir jeigu numeris išsidalins be liekanos - jūs laimėjote! Suskaičiuokite, kiek buvo laimingų bilietų.
let laimingiBilietai = 0;
for (let i = 0; i < pinigineSuDviemSkyriais[3].length; i++) {
  if (pinigineSuDviemSkyriais[3][i] % 777 === 0) {
    laimingiBilietai++;
  }
}
if (laimingiBilietai > 0) {
  console.log(
    'Jusu pinigineje yra ' + laimingiBilietai + ' laimingas/u bilietu.'
  );
} else {
  console.log('laimingu bilietu nera :(');
}

console.log('-----18-----');
//  Sukurkite penktą skyrelį ir į jį sudėkite nuotraukas: ['šuo', 'katė', 'automobilis', 'namas', 'kiemas'] ir jas išrūšiuokite pagal žodžių ilgį taip, kad pirma eitų trumpiausi žodžiai;
const nuotraukos = ['šuo', 'katė', 'automobilis', 'namas', 'kiemas'];
pinigineSuDviemSkyriais.push(nuotraukos.sort((a, b) => a.length - b.length));
console.table(pinigineSuDviemSkyriais);
