const names = ["Guadalupe","Ollie","Aki"];
const message = [];
function writeCards(names,event = 'surprise'){
    for (let a = 0 ; a < names.length; a++){
        message.push(`Thank you, ${names[a]}, for the wonderful ${event} gift!`);
    }
    return (message);
}
// const number = ['1','2','3','4','5','6','7','8','9','10'];

// function countDown (){
//     let i = 0;
//     while (i <= number.length){
//         console.log (i,[i]);
//         i++
//     }
//     return number;
// }
function countDown(number) {
    while (number > 0) {
        console.log(number);
        number --;
    }
    console.log(number);
}