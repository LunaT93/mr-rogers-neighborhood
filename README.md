Pseudocode:

INPUT > number

SPLIT number by "," or " "
(How do I take a multi digit number and check if it contains below?)
DECLARE newArray
for (i = 1, I < number, ++i)? or forEach loop for.each.number( function(digit) 
IF number CONTAINS 3
    replace number with "Won't you be my neighbor?"
        PUSH to newArray

ELSE IF number CONTAINS 2
    replace number with "Boop!"
        PUSH to newArray

ELSE IF number CONTAINS 1 
    replace number with "Beep!"
        PUSH to newArray

(Only for for loop: return newArray(?))
)

Test No. 1

Can I check if a single number containts a specific digit and replace with phrase?

Test: 2013
Expected Result: "won't you be my neighbor"
Code: 

function containsTwo(num) {
    return (num + ' ').indexOf('2') > -1;
}

works!

But I like this one better

function containsTwo(num) {
    return num.toString().includes('2')
}

let numArray = [1,2,3] //init num array

//copied containsNum function 2 more x.
function containsOne(num) {
    return num.toString().includes('1');
}

function containsTwo(num) {
    return num.toString().includes('2');
}

function containsThree(num) {
    return num.toString().includes('3');
}

let newString = [];
numArray.forEach(function replaceWithWord(num){
    if (containsThree(num) == true){
        newString.push("Will you be my neighbor?");
    }
    else if (containsTwo(num) == true){
        newString.push("Boop!");
    }
    else if (containsOne(num) == true){
        newString.push("Beep!");
    }
    else {
        newString.push(num);
    }
    return newString;
});
Replace with "Boop!" 

function containsTwo(num) {
    return num.toString().includes('2');
}


function replaceWithBoop(num){
    let newString = '';
    if (containsTwo(num) == true){
        newString.push("Boop!");
    else
        newString.push(num);
    }
    return newString;
}

Not quite but here is the solution::
function replaceWithBoop(num){
    let newString = []; // push only works with arrays. Test needed array
    if (containsTwo(num) == true){
        newString.push("Boop!");
    }
    else {
        newString.push(num);
    }
    return newString;
}


full code now:

function containsTwo(num) {
    return num.toString().includes('2');
}

function replaceWithBoop(num){
    let newString = []; // push only works with arrays. Test needed array
    if (containsTwo(num) == true){
        newString.push("Boop!");
    }
    else {
        newString.push(num);
    }
    return newString;
}

Test No. 3

let numArray = [] //init num array

//copied containsNum function 2 more x.
function containsOne(num) {
    return num.toString().includes('1');
}

function containsTwo(num) {
    return num.toString().includes('2');
}

function containsThree(num) {
    return num.toString().includes('3');
}

numArray.forEach(function replaceWithWord(num){
    let newString = [];
    if (containsThree(num) == true){
        newString.push("Will you be my neighbor?");
    }
    else if (containsTwo(num) == true){
        newString.push("Boop!");
    }
    else if (containsOne(num) == true){
        newString.push("Beep!");
    }
    else {
        newString.push(num);
    }
    return newString;
});

Errors: return newString needed to be eliminated (remember because it's a forEach loop which doesn't return anything) and, because it was a forEach loop, let newString = [] needed to be initialized outside of the forEach loop (or you could map it to numArray but that would overwrite initial array which is not best practice)

Working code!!!

let numArray = [1,2,3] //init num array

//copied containsNum function 2 more x.
function containsOne(num) {
    return num.toString().includes('1');
}

function containsTwo(num) {
    return num.toString().includes('2');
}

function containsThree(num) {
    return num.toString().includes('3');
}

let newString = [];
numArray.forEach(function replaceWithWord(num){
    if (containsThree(num) == true){
        newString.push("Will you be my neighbor?");
    }
    else if (containsTwo(num) == true){
        newString.push("Boop!");
    }
    else if (containsOne(num) == true){
        newString.push("Beep!");
    }
    else {
        newString.push(num);
    }
});

Note: changing to new Array*****************

let numArray = [1,2,3] //init num array

//copied containsNum function 2 more x.
function containsOne(num) {
    return num.toString().includes('1');
}

function containsTwo(num) {
    return num.toString().includes('2');
}

function containsThree(num) {
    return num.toString().includes('3');
}

let newArray = [];
numArray.forEach(function replaceWithWord(num){
    if (containsThree(num) == true){
        newArray.push("Will you be my neighbor?");
    }
    else if (containsTwo(num) == true){
        newArray.push("Boop!");
    }
    else if (containsOne(num) == true){
        newArray.push("Beep!");
    }
    else {
        newArray.push(num);
    }
});