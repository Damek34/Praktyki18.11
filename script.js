const arr1 = ["Anna", "Maria"];
const arr2 = ["Adam", "Marek", "Bartek", "Tomek"];
const numbers = [1, 2, 3, 4, 5];


const polacz = (array, array2) =>  [...array, ...array2];

var ostatni = array => 
{
    array.reverse();
    return array[0];
}


var filtr = (array) => array.filter(array => array.length > 4);


var redukcja = numbers.reduce((previousValue, currentValue) => previousValue + currentValue);



console.log(polacz(arr1, arr2));
console.log(ostatni(arr2));
console.log(filtr(arr2));
console.log(redukcja);