//
//Berapa kecepatan mesin jika banyak cucian 50 dan tingkat kekotoran 58
//

const pakaian = 50;
const kekotoran = 58;

let vPakaian = {
  value: pakaian,
  sedikit: () => {
    if(vPakaian.value >= 80) return 0;
    if(vPakaian.value >= 40 && vPakaian.value <= 80) return (80 - vPakaian.value) / (80 - 40);
    if(vPakaian.value <= 40) return 1;
  },
  banyak: () => {
    if(vPakaian.value <= 40) return 0;
    if(vPakaian.value >= 40 && vPakaian.value <= 80) return (vPakaian.value - 40) / (80 - 40);
    if(vPakaian.value >= 80) return 1;
  }
}

let vKotor = {
  value: kekotoran,
  rendah: () => {
    if(vKotor.value >= 50) return 0;
    if(vKotor.value >= 40 && vKotor.value <= 50) return (50 - vKotor.value) / (50 - 40);
    if(vKotor.value <= 40) return 1;
  },
  sedang: () => {
    if(vKotor.value <= 40) return 0;
    if(vKotor.value >= 60) return 0;
    if(vKotor.value >= 40 && vKotor.value <= 50) return (vKotor.value - 40) / (50 - 40);
    if(vKotor.value >= 50 && vKotor.value <= 60) return (60 - vKotor.value) / (60 - 50);
  },
  tinggi: () => {
    if(vKotor.value <= 50) return 0;
    if(vKotor.value >= 50 && vKotor.value <= 60) return (vKotor.value - 50) / (60 - 50);
    if(vKotor.value >= 60) return 1;
  }
}

const lambat = (value) => {
  return 1200 - ((1200 - 500) * value);
}

const cepat = (value) => {
  return ((1200 - 500) * value) + 500;
}

let aPreds = [
  Math.min(vPakaian.sedikit(), vKotor.rendah()),
  Math.min(vPakaian.sedikit(), vKotor.sedang()),
  Math.min(vPakaian.sedikit(), vKotor.tinggi()),
  Math.min(vPakaian.banyak(), vKotor.rendah()),
  Math.min(vPakaian.banyak(), vKotor.sedang()),
  Math.min(vPakaian.banyak(), vKotor.tinggi())
]

let zValues = [
  lambat(aPreds[0]),
  lambat(aPreds[1]),
  cepat(aPreds[2]),
  lambat(aPreds[3]),
  cepat(aPreds[4]),
  cepat(aPreds[5])
]

let aPredsSum = 0;
for(let i = 0; i < aPreds.length; i++){
  aPredsSum += aPreds[i];
}

let zSum = 0;
for(let i = 0; i < zValues.length; i++){
  zSum += (zValues[i] * aPreds[i]);
}

const result = zSum/aPredsSum;

console.log(result);