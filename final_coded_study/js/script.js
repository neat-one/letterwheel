function func() {  
            return 0.5 - Math.random();
        }

function alphabetOrder(extraInstr=false) {
    var letters = ['b','c','d','h','n','t','x','y','z'].sort(func);
    if (extraInstr == true){
    document.getElementById("instrAdded").innerHTML = "letters are '"+ letters[6] + "', '"+letters[7]+"', and '"+letters[8]+"'. Type the letters in alphabetical order ('"+[letters[6],letters[7],letters[8]].sort()[0]+[letters[6],letters[7],letters[8]].sort()[1]+[letters[6],letters[7],letters[8]].sort()[2]+"')."
    }
    return letters
    }
function showAlphabet(x){
    if (x == 16) {
        document.addEventListener("keydown", function(){
        var y = event.keyCode;
        if (y== 191) {
        document.getElementById("alphabet").innerHTML = "abcdefghijklmnopqrstuvwxyz";
    }})}}; 

function hideAlphabet(z, extraInstr){
    if (z == 191) {
        document.addEventListener("keyup", function(){
        var g = event.keyCode;
        if (g == 16) {
          document.getElementById("alphabet").innerHTML = "";
          if (extraInstr == true){
          document.getElementById("furtherInstructions").innerHTML = "<p>Good. Press Shift-? again to see the alphabet again, or press Shift-Space</p><p>to continue.</p>";

          }
      }})
    }};

function placeLetters(){
    window.addEventListener('load', function(){
    
    document.getElementById('deg0').innerHTML= place[0];
    document.getElementById('deg45').innerHTML= place[1];
    document.getElementById('deg80').innerHTML= place[2];
    document.getElementById('deg120').innerHTML= place[3];
    document.getElementById('deg160').innerHTML= place[4];
    document.getElementById('deg200').innerHTML= place[5];
    document.getElementById('deg240').innerHTML= place[6];
    document.getElementById('deg280').innerHTML= place[7];
    document.getElementById('deg320').innerHTML= place[8];
    }
)};

function blink() {
    var f = document.getElementsByClassName('flash')[0];
    // var cont = f.innerHTML
    setTimeout(function() {
        f.style.backgroundColor = (f.style.backgroundColor == 'white' ? '' : 'white');
        setTimeout(function() {
            f.style.backgroundColor = (f.style.backgroundColor == 'black' ? '' : 'black');
        }, 50);
    }, 50);
    // f.innerHTML = cont
    };


function checkString(x, page){
        var mapcenter = {66: 'b', 67: 'c', 68: 'd', 72: 'h', 78: 'n', 84: 't', 88: 'x', 89: 'y', 90: 'z'};
        // var x = event.keyCode;
        var f = document.getElementsByClassName('center')[0];
        if (currentLetters.length == 0 && mapcenter[x] == answerLetters[0]){
            currentLetters = mapcenter[x]
            f.style.backgroundColor = 'white'
            f.innerHTML += mapcenter[x];
            console.log(f.style.backgroundColor)
            console.log(currentLetters)
        }
        else if (currentLetters.length == 1 && mapcenter[x] == answerLetters[1]){
            currentLetters += mapcenter[x]
            f.innerHTML += mapcenter[x];
            console.log(currentLetters)
            }
        else if (currentLetters.length == 2 && mapcenter[x] == answerLetters[2]){
            currentLetters += mapcenter[x]
            console.log(currentLetters)
            location=page
            }
        else{
            if (x in mapcenter){
                currentLetters = [];
                f.style.backgroundColor = 'black'
                console.log(currentLetters)
                blink()
            }      
        }
    };

function generateRandom(min, max) {
    var number = Math.floor(Math.random() * (max - min )) + min;
    return number;
    }
function getRandomPosition(element) {
    var x =  window.screen.height/5;
    var xmin = x*2;
    var xmax = x*3;
    var y =  window.screen.width/4;
    var ymin = y;
    var ymax = y*3;
    
    var randomX = Math.floor(Math.random() * (xmax - xmin)) +xmin;
    var randomY = Math.floor(Math.random() * (ymax - ymin)) +ymin;
    
    while (randomX == usedX && randomY == usedY){
        randomX = Math.floor(Math.random() * (xmax - xmin)) +xmin;
        randomY = Math.floor(Math.random() * (ymax - ymin)) +ymin;
    }
        return [randomX,randomY];
    }

function generateDiv(count) {
    var dfrag = document.createDocumentFragment();
    var count = count;
    var i=0;
    for (var i = 0; i < count; i++){
        var img = document.createElement("img");
        img.setAttribute("class", "asterisk")
        img.setAttribute("style", "position:absolute;");
        img.setAttribute("src", "images/asterisk.jpg");
        img.setAttribute("height", "2%");
        img.setAttribute("width", "1%");
        document.body.appendChild(img);
        var xy = getRandomPosition(img);
        usedX += xy[0];
        usedY += xy[1]
        img.style.top = xy[0] + 'px';
        img.style.left = xy[1] + 'px';
        dfrag.appendChild(img);
    }
    for (i = 0; i < dfrag.childNodes.length; i++) {
        div = dfrag.childNodes[i];
    }
    document.body.appendChild(dfrag);
    return count
    }

function countStars(x, page){
    var numMap = {6:54, 7:55, 8:56, 9:57};
    var res = numMap[count1];
    if (res == x) {
        location=page; 
            }
    else if([54, 55, 56, 57].includes(x)){
        blink()
    }
    }