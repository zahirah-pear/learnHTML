const number = 5;

if (number < 10 ) {
    console.log('satuan');
} else if (number < 100) {
    console.log('puluhan');
} else if (number >= 100 && number < 1000) {
    console.log('ratusan');
} else {
    console.log(number);
}

//perhatikan runtutannya