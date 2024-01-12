var people = [
    { name: 'Jack', age: 50 },
    { name: 'Michael', age: 9 },
    { name: 'John', age: 40 },
    { name: 'Ann', age: 19 },
    { name: 'Elisabeth', age: 16 }
]

function findFirstTeenager(array) {
    for (var i = 0; i < array.length; i++) {
        var person = array[i];
        if (person.age >= 10 && person.age <= 20) { 
            return person;
        }
    }
} 

function findAllTeenager(array) {
    let arrayTeener = [];
    for (var i = 0; i < array.length; i++) {
        var person = array[i];
        if (person.age >= 10 && person.age <= 20) { 
            arrayTeener.push(person);
        }
    }
    return arrayTeener;
} 

const teenerArray = findAllTeenager(people);

console.log(findFirstTeenager(people).name + " is first teenager");
console.log("list teenerager: \n _________________________" );
for(var i = 0; i <teenerArray.length; i++){
    console.log(teenerArray[i])
}