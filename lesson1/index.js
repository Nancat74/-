
//Задание 1:
const cityInfo = {
    name: 'Zlatoust',
    location: 'Russia',
    population: 180000,
    haveStadion: true
}
//Задание 2:

let height = 40;
let width = 70;
    console.log('Площадь прямоугольника = ' + height*width);
    //2800

//Задание 3: 
    let time = 2;
    let speedOfFirst = 95;
    let speedOfSecond = 114;
    const convergenceSpeed = speedOfFirst + speedOfSecond;
    const result = convergenceSpeed * time;
    console.log(result);
    // result = 418;

//Задание 4:
const randomNumber = Math.floor(Math.random() * 100);
if(randomNumber<20){
    console.log("randomNumber меньше 20")
}
else if(randomNumber>50){
    console.log("randomNumber больше 50")
}
else{
    console.log("randomNumber больше 20, и меньше 50") 
}

//Задание 5:
const randomNumber = Math.floor(Math.random() * 100);
switch(randomNumber){
case 1:
    console.log("randomNumber меньше 20");
    break;
case 2:
    console.log("randomNumber больше 50");
    break;
default:
    console.log("randomNumber больше 20, и меньше 50");
    break;
}


