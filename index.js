// random number and concat


var count = 1;

var tot = Math.floor(Math.random(count)*6);

var randomDiceNumber = "dice"+tot+".png";
var randomImage = "images/" + randomDiceNumber;



console.log(randomImage);

document.querySelectorAll("img")[0].setAttribute("src" , randomImage);

// -----------

var count2 = 1;

var tot2 = Math.floor(Math.random(count2)*6);

var randomDiceNumber2 = "dice"+tot2+".png";
var randomImage2 = "images/" + randomDiceNumber2;

document.querySelectorAll("img")[1].setAttribute("src" , randomImage2);



// -----------


if (tot > tot2){
    document.querySelector("h1").innerHTML = "Player 1 Is Won";
    console.log("1 won");
}
else if (tot2 > tot){
    document.querySelector("h1").innerHTML = "Player 2 Is Won";
    console.log("2 won");

} else{
    document.querySelector("h1").innerHTML = "Draw";
    console.log("draw");
}