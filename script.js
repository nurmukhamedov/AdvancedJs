// template literal

const firstName = "Muhammadrasul";
const job = "teacher";
const birthYear = 2000;
const year = 2022;

const me = " I'm " + firstName + " ,a " + job;
console.log(me);

const newMe = ` Men ${firstName}, ${job}, men ${year - birthYear} yoshdaman `;
console.log(newMe);

// statements if else

const age = 25;
const yearsLeft = 18 - age;

// if (age >= 18) {
//   console.log("Men mashina boshqara olaman");
// } else {
//   console.log(`Hali yoshman, guvohnoma olishimga ${18 - age} yil bor`);
// }

// age >= 18
//   ? console.log("Men mashina boshqara olaman")
//   : console.log(`Hali yoshman, guvohnoma olishimga ${18 - age} yil bor`);
  
  const isAvailableDrive = age >= 18 ? "Men mashina boshqara olaman" : "piyoda yurish";
  console.log(isAvailableDrive);
  
  // switch case 
  
const day = 'monday';

switch (day) {
    case 'monday':
        console.log("Kurs planini tuzaman");
        break;
    case 'tuesday':
        console.log('Teoria tushuntiraman');
        break;
    case 'wednesday':
        console.log('video yozib olish');
        break
    default:
        console.log('Berilmagan kun');
}


// Data transforming methods

// map, filter

movements = [2, 4, 5, 7, 9, 10, 15, -15, -20 -1, 0];

euroToUsd = 2;

const movementToUsd = movements.map(mov => mov * euroToUsd);
console.log(movementToUsd);
console.log(movements); 

movements.map((mov, index) => {
    if(mov > 0){
        console.log(` siz ${index + 1} urinishda ${mov *euroToUsd} dollar topdingiz `);
    } else{
        console.log('hech narsa yoq');
    }
}) 

const positiveNum = movements.filter(function(mov){
    return mov > 0;
})
const negativeNum = movements.filter(function(mov){
    return mov < 0;
})
console.log(positiveNum);
console.log(negativeNum);
console.log(movements);
