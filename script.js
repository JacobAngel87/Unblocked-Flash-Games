// Slider Variables
let redSlider;
let greenSlider;
let blueSlider;
// Page Theme
let r = 0;
let g = 0;
let b = 0;
// Page Variables
let body;
let elements;
let gameContainer;
let title;
let lastGame;
let overLapped;
// Game variables
let twenty = "2048.swf";
let btd5 = "btd5.swf";
let chess = "chess.swf";
let ctc1 = "CTC1.swf";
let ctc2 = "CTC2.swf";
let doom = "doom.swf";
let duckLife2 = "ducklife2.swf";
let duckLife3 = "ducklife3.swf";
let duckLife4 = "duck-life4.swf";
let happyWheels = "happyWheels.swf";
let impossibleQuiz = "impossiblequiz.swf";
let impossibleQuiz2 = "impossiblequiz2.swf";
let isaac = "isaac.swf";
let learnToFly = "learntofly.swf";
let learnToFly2 = "learntofly2.swf";
let learnToFly3 = "learntofly-3.swf";
let PPA_Doughnut = "PPADougnut.swf";
let PPA_Freezeria = "PPAFreezeria.swf";
let PPA_Hotdog = "PPAHotdog.swf";
let PPA_Pizza = "PPAPizza.swf";
let PPA_Scoops = "PPAScoops.swf";
let PPA_Sushi = "PPASushi.swf";
let PPA_Wings = "PPAWings.swf";
let raze3 = "raze3.swf";
let sfh1 = "SFH1.swf";
let sfh2 = "SFH2.swf";
let superMario63 = "supermario63.swf";
let swordsAndSandals2 = "SWAS2.swf";
let swordsAndSandals3 = "swordsandsandals3.swf";
let tankTrouble = "tank-trouble.swf";
let tetris = "tetris.swf";
let poker = "texas-holdem.swf";


function changeGame(game) {
  
  // Checking to see if the game is currently playing
  if(game == lastGame) {
    return;
  }
  
  let currentGame = document.getElementById("game");
  let newGame;
  
  if(currentGame !== null) {
    currentGame.remove();
  }
  
  newGame = document.createElement("embed");
  
  
  newGame.setAttribute("id", "game");
  newGame.setAttribute("src", game);
  
  
  // Swf files do not have set width & height so I have to hard code them all in
  
  switch(game) {
    
    case twenty:
       newGame.setAttribute("height", "550px");
       newGame.setAttribute("width", "475px");
       newGame.style.left = "35%";
       title.innerHTML = "2048";
       break;
       
    case btd5:
      newGame.setAttribute("height", "700px");
      newGame.setAttribute("width", "800px");
      newGame.style.left = "25%";
      title.innerHTML = "Bloons Tower Defence 5";
      break;
      
    case chess:
      newGame.setAttribute("height", "700px");
      newGame.setAttribute("width", "800px");
      newGame.style.left = "25%";
      title.innerHTML = "Chess";
      break;
      
    case ctc1:
      newGame.setAttribute("height", "700px");
      newGame.setAttribute("width", "800px");
      newGame.style.left = "25%";
      title.innerHTML = "Crush The Castle";
      break;
      
    case ctc2:
      newGame.setAttribute("height", "550px");
      newGame.setAttribute("width", "800px");
      newGame.style.left = "25%";
      title.innerHTML = "Crush The Castle 2";
      break;
      
    case doom:
      newGame.setAttribute("height", "525px");
      newGame.setAttribute("width", "800px");
      newGame.style.left = "25%";
      title.innerHTML = "Doom";
      break;
      
    case duckLife2:
      newGame.setAttribute("height", "700px");
      newGame.setAttribute("width", "800px");
      newGame.style.left = "25%";
      title.innerHTML = "Duck Life 2";
      break;
      
    case duckLife3:
      newGame.setAttribute("height", "700px");
      newGame.setAttribute("width", "800px");
      newGame.style.left = "25%";
      title.innerHTML = "Duck Life 3";
      break;
      
    case duckLife4:
      newGame.setAttribute("height", "700px");
      newGame.setAttribute("width", "800px");
      newGame.style.left = "25%";
      title.innerHTML = "Duck Life 4";
      break;
      
    case happyWheels:
      newGame.setAttribute("height", "500px");
      newGame.setAttribute("width", "800px");
      newGame.style.left = "25%";
      title.innerHTML = "Happy Wheels";
      break;
      
    case impossibleQuiz:
      newGame.setAttribute("height", "700px");
      newGame.setAttribute("width", "800px");
      newGame.style.left = "25%";
      title.innerHTML = "The Impossible Quiz";
      break;
      
    case impossibleQuiz2:
      newGame.setAttribute("height", "550px");
      newGame.setAttribute("width", "750px");
      newGame.style.left = "25%";
      title.innerHTML = "The Impossible Quiz 2";
      break;
    
    case isaac:
      newGame.setAttribute("height", "650px");
      newGame.setAttribute("width", "800px");
      newGame.style.left = "25%";
      title.innerHTML = "The Binding of Isaac";
      break;
      
    case learnToFly:
      newGame.setAttribute("height", "600px");
      newGame.setAttribute("width", "800px");
      newGame.style.left = "25%";
      title.innerHTML = "Learn To Fly";
      break;
      
    case learnToFly2:
      newGame.setAttribute("height", "600px");
      newGame.setAttribute("width", "800px");
      newGame.style.left = "25%";
      title.innerHTML = "Learn To Fly 2";
      break;
      
    case learnToFly3:
      newGame.setAttribute("height", "600px");
      newGame.setAttribute("width", "800px");
      newGame.style.left = "25%";
      title.innerHTML = "Learn To Fly 3";
      break;
      
    case PPA_Doughnut:
      newGame.setAttribute("height", "600px");
      newGame.setAttribute("width", "800px");
      newGame.style.left = "25%";
      title.innerHTML = "Papa's Doughnuteria";
      break;
      
    case PPA_Freezeria:
      newGame.setAttribute("height", "600px");
      newGame.setAttribute("width", "800px");
      newGame.style.left = "25%";
      title.innerHTML = "Papa's Freezeria";
      break;
      
    case PPA_Hotdog:
      newGame.setAttribute("height", "600px");
      newGame.setAttribute("width", "800px");
      newGame.style.left = "25%";
      title.innerHTML = "Papa's Hotdogeria";
      break;
      
    case PPA_Pizza:
      newGame.setAttribute("height", "600px");
      newGame.setAttribute("width", "800px");
      newGame.style.left = "25%";
      title.innerHTML = "Papa's Pizzeria";
      break;
      
    case PPA_Scoops:
      newGame.setAttribute("height", "600px");
      newGame.setAttribute("width", "800px");
      newGame.style.left = "25%";
      title.innerHTML = "Papa's Scooperia";
      break;
      
    case PPA_Sushi:
      newGame.setAttribute("height", "600px");
      newGame.setAttribute("width", "800px");
      newGame.style.left = "25%";
      title.innerHTML = "Papa's Sushieria";
      break;
      
    case PPA_Wings:
      newGame.setAttribute("height", "600px");
      newGame.setAttribute("width", "800px");
      newGame.style.left = "25%";
      title.innerHTML = "Papa's Wingeria";
      break;
      
    case raze3:
      newGame.setAttribute("height", "600px");
      newGame.setAttribute("width", "800px");
      newGame.style.left = "25%";
      title.innerHTML = "Raze 3";
      break;
      
    case sfh1:
      newGame.setAttribute("height", "600px");
      newGame.setAttribute("width", "800px");
      newGame.style.left = "25%";
      title.innerHTML = "Strike Force Heros 1";
      break;
      
    case sfh2:
      newGame.setAttribute("height", "600px");
      newGame.setAttribute("width", "800px");
      newGame.style.left = "25%";
      title.innerHTML = "Strike Force Heros 2";
      break;
      
    case superMario63:
      newGame.setAttribute("height", "600px");
      newGame.setAttribute("width", "800px");
      newGame.style.left = "25%";
      title.innerHTML = "Super Mario 63";
      break;
      
    case swordsAndSandals2:
      newGame.setAttribute("height", "550px");
      newGame.setAttribute("width", "800px");
      newGame.style.left = "25%";
      title.innerHTML = "Swords And Sandals 2";
      break;
      
    case swordsAndSandals3:
      newGame.setAttribute("height", "550px");
      newGame.setAttribute("width", "800px");
      newGame.style.left = "25%";
      title.innerHTML = "Swords And Sandals 1";
      break;
      
    case tankTrouble:
      newGame.setAttribute("height", "600px");
      newGame.setAttribute("width", "800px");
      newGame.style.left = "25%";
      title.innerHTML = "Tank Trouble";
      break;
      
    case tetris:
      newGame.setAttribute("height", "700px");
      newGame.setAttribute("width", "750px");
      newGame.style.left = "25%";
      title.innerHTML = "Tetris";
      break;
      
    case poker:
      newGame.setAttribute("height", "425px");
      newGame.setAttribute("width", "625px");
      newGame.style.left = "30%";
      title.innerHTML = "Texas Holdem Poker";
      break;
      
    default:
      break;
  }
  

  gameContainer.appendChild(newGame);
  lastGame = game;
}

function updateTheme() {
  r = redSlider.value;
  g = greenSlider.value;
  b = blueSlider.value;
  
  newTheme = "rgb(" + r + ", " + g + ", " + b + ")";
  
  var i;
  
  for(i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = newTheme;
  }
  changeForeground();
}

function randomTheme() {
  r = Math.floor(Math.random() * 255);
  g = Math.floor(Math.random() * 255);
  b = Math.floor(Math.random() * 255);
  
  newTheme = "rgb(" + r + ", " + g + ", " + b + ")";
  
  for(let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = newTheme;
  }
  
  redSlider.value = r;
  greenSlider.value = g;
  blueSlider.value = b;
  
  changeForeground();
}

function changeForeground() {
  let newColor;
  
  
  if(r >= 140 && g >= 180) {
    newColor = "black";
  }
  
  else if(r >= 120 && g >= 160 && b >= 160) {
    newColor = "black";
  }
  
  else{
    newColor = "white";
  }
  
  for(i = 0; i < elements.length; i++) {
    elements[i].style.color = newColor;
  }
}

window.onload = function() {
  redSlider = document.getElementById("redSlider");
  greenSlider = document.getElementById("greenSlider");
  blueSlider = document.getElementById("blueSlider");
  body = document.getElementById("body");
  gameContainer = document.getElementById("Game");
  title = document.getElementById("title");
  elements = document.querySelectorAll("body, h1, h3, button");
};




// 1460 Stuff look bad

// > 1460 We good
