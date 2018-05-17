const square = function (x) {
    return x * x;
};

const squareArrow = (x) => x * x;

console.log(squareArrow(2));


const getFirstName = (fullname) => fullname.split(' ')[0];

console.log(getFirstName('Alex Fadeev'));

//arguments object - no longer bound with arrow functions

const add = (a,b) => {
    //console.log(arguments); Error!!!!
    return a + b;
}
console.log(add(55,1));

// this keyword - no longer bound

const user = {
    name: 'Alex',
    cities: ['New York', 'Moscow', 'California'],
    printPlacesLived() {

        return this.cities.map((city) => this.name + ' has lived in ' + city);

    }
};
console.log(user.printPlacesLived());

const multiplaier = {
    numbers: [1,2,3,4,5],
    multiplyBy: 3,
    multiply(){
        return this.numbers.map((number) => number*this.multiplyBy);
    }
};

console.log(multiplaier.multiply());