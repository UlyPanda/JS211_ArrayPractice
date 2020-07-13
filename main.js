// .length
const carArray = ["Ford", "Honda", "Chevy", "Nissan"];
console.log(carArray.length);

const moreCars = ["Audi", "Buick", "BMW", "Honda"];
let totalCars = carArray.concat(moreCars);
console.log(totalCars);

// .concat()
console.log(moreCars.indexOf("Honda"));
console.log(carArray.lastIndexOf("Ford"));

// .join()
const stringOfCars = totalCars.join();
console.log(stringOfCars);

// .split()
totalCars = stringOfCars.split(",");
console.log(totalCars);

// .reverse()
const carsInReverse = totalCars.reverse();
console.log(carsInReverse);

// .sort()
console.log(carsInReverse.sort());
//alert(carsInReverse.indexOf("Audi"));

// .slice()
const removedCars = carsInReverse.slice(4, 6);
console.log(removedCars);

// .splice()
const newRemoved = carsInReverse.splice(1, 2, "Honda", "Ford");
console.log(newRemoved);

// .push()
carsInReverse.push(newRemoved)
console.log(carsInReverse);

// .pop()
console.log(carsInReverse.pop());

// .unshift()
carsInReverse.unshift("Acura");
console.log(carsInReverse);

// .forEach()
let numbers = [23, 45, 0, 2];
numbers.forEach(number => console.log(number +2));
const addTwo = (number) => {
    console.log(number + 2);
}
numbers.forEach(addTwo);