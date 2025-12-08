const firstName = "Malika";
const lastName = "Zahirah";

function getExuetion (num1, num2){
    const multiply = num1*num2;

// atau return num1*num2;

    return multiply;
}

const hasil = getExuetion(2,3);
console.log(hasil);



// const firstName = "Malika";
// const lastName = "Nashita";

// didalam kurung kurawa ( {} ) itu namanya scope
// misal if (1===1){
//      const nomor = 19;
//
//      if (firstName = "Malika"){
//          console.log("siap ketua");
//      }
// }
// 

// jadi kesumpulannya scope didalam scope bisa reach hingga luar scope tapi variabel diluar scope dalam scope tidak bisa.