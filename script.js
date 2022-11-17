const arr1 = ["Anna", "Maria"];
const arr2 = ["Adam", "Marek", "Bartek", "Tomek"];
const numbers = [1, 2, 3, 4, 5];


const polacz = (array, array2) =>  [...array, ...array2];

var ostatni = array => 
{
    array.reverse();
    return array[0];
}


var filtr = array => array.filter(array => array.length > 4);


var redukcja = numbers.reduce((previousValue, currentValue) => previousValue + currentValue);

var tabMap = [...numbers].map(x => x*x+3);



var dodatkowe1 = array => array.filter(arrayElement => arrayElement.length == 5 && arrayElement.endsWith("ek"));

var dodatkowe2 = array => array.filter(arrayElement => arrayElement%2 == 0);

var dodatkowe3 = (array, min, i) => 
{
    if(i == array.length)
    {
        return min;
    }
    if(array[i] < min)
    {
        min = array[i];
    }

   return dodatkowe3(array, min, i+1)
}

console.log(polacz(arr1, arr2));
console.log(ostatni(arr2));
console.log(filtr(arr2));
console.log(redukcja);
console.log(tabMap);

console.log("Dodatkowe1:   " + dodatkowe1(arr2));
console.log("Dodatkowe2:   " +dodatkowe2(numbers));
console.log("Dodatkowe3:   " +dodatkowe3(numbers, numbers[0], 0));