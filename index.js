const names = ["Guadalupe","Ollie","Aki"];
const message = [];
function writeCards(names,event = 'surprise'){
    for (let a = 0 ; a < names.length; a++){
        message.push(`Thank you, ${names[a]}, for the wonderful ${event} gift!`);
    }
    return (message);
}

function countDown(number) {
    while (number > 0) {
        console.log(number);
        number --;
    }
    console.log(number);
}