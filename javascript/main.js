// var surname = prompt('greetings friend, may I enquire as to your surname?');
var name = "Tom";
var age = 20;

name = "Andy";
age = 43;

var apples = 5, pears = 10;
var piecesOfFruit = apples + pears;
console.log(`Pieces of Fruit: ${piecesOfFruit}`);
var piecesForEachPerson = piecesOfFruit / 3;
console.log(`Pieces For Each Person: ${piecesForEachPerson}`);
// LOGIC //
    // To find out when two values are equal, use the triple equals operator (“===”).

    console.log(`15.234 === 15.234 = ${15.234 === 15.234}`); 

    // We can also determine if two values are not equal using the triple not equal operator (“!==”).

    console.log(`15.234 !== 18.4545 = ${15.234 !== 18.4545}`);

    // It’s important to know that strings containing a number and an actual number are not equal.

    console.log(`'10' === 10 = ${'10' === 10}`);

    // Greater than and less than //

        // This first example is a comparison of 10 and 5 to see if 10 is larger, using the greater than operator (“>”).

        console.log(`10 > 5 = ${10 > 5}`);

        // Next we use the less than operator (“<”) to determine if the left value is smaller.

        console.log(`20.4 < 20.2 = ${20.4 < 20.2}`);

    // Combined comparisons

        // Combining a comparison of equality and size can be done with the greater than or equal to and less than or equal to operators (“>=” and “<=” respectively).

        console.log(`10 >= 10 = ${10 >= 10}`);
        console.log(`10 <= 5 = ${10 <= 5}`);

// CONDITIONALS //
    // If
        // The most simple if statement looks something like this:
        if (10 > 5) {
            // Run the code in here
        }

    // If... else...
        // The if-else form of an if statement is used to run an alternative piece of code if the conditional is not true. The code in the if block below will be ignored, for example - only the code in the else block will be run.

        if (43 < 2) {
            // Run the code in here
        } else {
            // Run a different bit of code
        }

// LOOPING //
    //While
        //A while loop repeats a block of code while a condition is true. Like an if statement, the condition is found in parentheses.

        var i = 1;
        while (i < 10) {
            console.log(`i = ${i}`);
            i = i + 1;
        }
        // i is now 10
        
    //For
        for (var j = 1; j < 10; j++) {
            console.log(`j = ${j}`);
        }

// FUNCTIONS //
    var add = function (a, b) {
        return a + b;
    };

    var result = add(1, 2); // result is now 3
    console.log(`result = ${result}`);

// OBJECTS //
    var jedi = {
        name: "Yoda",
        age: 899,
        talk: function () { alert("another... Sky... walk..."); }
    };

    //You can get data back out of an object using the dot syntax:
    console.log(`jedi.name = ${jedi.name}`);
    console.log(`jedi.age = ${jedi.age}`);
    jedi.talk();

    //You can also reassign properties of an object:
    
    jedi.name = "Mace Windu";
    
    //And add new ones on the fly:
    
    jedi.lightsaber = "purple";

    //Properties can be any kind of data including objects and arrays. Adding an object as a property of another object creates a nested object:

    var person = {
        age: 122
    };
    
    person.name = {
        first: "Jeanne",
        last: "Calment"
    };

    //Creating an empty object and adding properties and methods to it is possible too:

    var dog = {};

    dog.bark = function () { alert("Woof!"); };

// ARRAYS //
    var emptyArray = [];

    var shoppingList = ['Milk', 'Bread', 'Beans'];

    //You retrieve a specific element from an array using square bracket syntax:

    console.log(`shoppingList[0] = ${shoppingList[0]}`);

    // It’s also possible to set the value at a particular index, again using the square bracket syntax:

    shoppingList[1] = 'Cookies';

    // shoppingList is now ['Milk', 'Cookies', 'Beans']

    // You can find the number of elements in the array using its length property:

    console.log(`shoppingList.length = ${shoppingList.length}`);

    //You can use push and pop methods to add and remove elements from the end of the array:

    shoppingList.push('A new car');
    // shoppingList is now ['Milk', 'Bread', 'Beans', 'A new car']

    shoppingList.pop();
    // shoppingList is back to ['Milk', 'Bread', 'Beans']

    //Here’s an example that creates, pushes, pops and iterates over an array, passing each name to a function called helloFrom. helloFrom returns a string with a greeting: “Hello from ” and then the person’s name. After the pushing and popping, the final list of people is: “Tom”, “Yoda”, “Ron” and “Bob”.

    var helloFrom = function (personName) {
        return "Hello from " + personName;
    }

    var people = ['Tom', 'Yoda', 'Ron'];

    people.push('Bob');
    people.push('Dr Evil');

    people.pop();

    for (var i=0; i < people.length; i++) {
        var greeting = helloFrom(people[i]);
        console.log(`greeting #${i + 1} = ${greeting}`);
    }

