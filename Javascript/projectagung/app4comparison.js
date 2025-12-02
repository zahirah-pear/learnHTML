const stock = 10;

if (stock === 0) {
    console.log("Produk sudah habis");
}

else {
    console.log("Produk masih tersedia");
}

const test1 = 10 > 5;
const test2 = 8 < 4;
const test3 = -1 >= 2;
const test4 = 0.5 <= 0;
if (test4) {
    console.log("benar");
}
else {
    console.log("salah");
}
// atau 

console.log(10 > 5)

const test5 = 'abc' === 'abc';
const test6 = false !== true;
const test7 = 'cab' === 'cba';
const test8 = false === false;

console.log(test8);
// sama dengan ==> (===)
// tidak sama dengan ==> (!==)
// lebih dari ==> (>)
// kurang dari ==> (<)
// lebih dari sama dengan ==> (>=)
// kurang dari sama dengan ==> (<=)
// sama dengan (loose) ==> (==)
// tidak sama dengan (loose) ==> (!=)