window.onload = function() {
    let form = document.querySelector("form");
    form.onsubmit = function(event) {


        //variables
        const userNums = document.getElementById("userNums").value;
        // split string to array of numbers by space or comma.
        const numArray = userNums.split(/[ ,]+/);
        // convert each text value into a number so that includes() will work
        numArray.forEach(num => Number(num));
        let newArray = [];

        //functions to determine whether value contains number
        function containsOne(num) {
            return num.toString().includes('1');
        }
        function containsTwo(num) {
            return num.toString().includes('2');
        }
        function containsThree(num) {
            return num.toString().includes('3');
        }

        //checks whether each # contains digits below prioritized as requested
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

        //clear span for reuse
        document.getElementById("rogersMsg").innerHTML = "";

        //prints to webpage
        let sentence = newArray.join(" ");
        document.getElementById("rogersMsg").append(sentence); // append the sentence to the span with id rogersMsg

        event.preventDefault();
    };
};


// Need event listener
