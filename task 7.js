// You are going to write a function which will select a random name from a
// list of names. The person selected will have to pay for everybody's food
// bill.
//     Important: The output should be returned from the function and you do
//     not need alert, prompt or console.log. The output should match the
// example output exactly, including capitalisation and punctuation.
//     Example Input
//     [“Aidana”, “Bekbolat”, “Mariya”, “Aleksandr”, “Diana”]

const names = ["Aidana", "Bekbolat", "Mariya", "Aleksandr", "Diana"];

function getRandomNumber(length){
    return Math.floor(Math.random() * length);
}

function getWhoPay(array){
    if(Array.isArray(array)){
        let number = getRandomNumber(array.length);
        let name = array[number];
        return name + " is going to buy lunch today";
    } else {
        return "Error. Please enter names in array";
    }
}
console.log(getWhoPay(names));
