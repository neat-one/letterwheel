function func() {  
  return 0.5 - Math.random();
}

function alphabetOrder() {
  var letters = ['b','c','d','h','n','t','x','y','z'].sort(func)
  return letters
}
function showAlphabet(){
document.getElementById("alphabet").innerHTML = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
}; 

function hideAlphabet(extraInstr){
document.getElementById("alphabet").innerHTML = "";
if (extraInstr == true){
document.getElementById("furtherInstructions").innerHTML = "<p>Good. Press Shift-? again to see the alphabet again, or press Shift-Space</p><p>to continue.</p>";
}
};

function blink(pageType='circle') {
  if (pageType == 'circle'){
  // console.log('blink')
  var cell = document.getElementsByClassName('flash')[0];
  var cent = document.getElementById('center')
  // console.log(cell)
  cent.classList.remove("active");
  // var cont = f.innerHTML
  setTimeout(function() {
    cell.classList.toggle("active");
  setTimeout(function() {
    cell.classList.remove("active");
  }, 50);
  }, 50);
  // f.innerHTML = cont
  }
  else if (pageType == 'stars'){
    // console.log('blinkstars')
    // var cell = document.getElementsByClassName('starFlash')[0];
      var cell = document.getElementsByTagName("BODY")[0];
      // var cent = document.getElementById('center')
    // console.log(cell)
    
    setTimeout(function() {
      // console.log('made1')
      cell.classList.toggle("active");
    setTimeout(function() {
      // console.log('made2')
      cell.classList.remove("active");
    }, 50);
    }, 50);
  }
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

function randomStars(pageType){
  if (pageType == 'stars'){
  
  var number = Math.floor(Math.random() * (10 - 6 )) + 6;
  console.log(number)
  var usedX = []
  var usedY = []
  for (var i = 0; i < number; i++){
    var elementStyle = document.getElementById('star'+i);
    // console.log('star'+i)
    elementStyle.classList.toggle("active")
    next_position = getRandomPosition(i, usedX, usedY)
    // console.log(next_position, i)
    usedX.push(next_position[0])
    usedY.push(next_position[1])
    elementStyle.position = "absolute";
    var x = next_position[0];
    var y = next_position[1];

    elementStyle.style.top = x + 'px';
    elementStyle.style.left = y + 'px';
  }
  
  }

  return [number, usedX, usedY]
  }

function getRandomPosition(element, usedX, usedY) {
var x =  window.screen.width/4;
var xmin = -.5*x;
var xmax = .25*x;
var y =  window.screen.height/3;
var ymin = -y;
var ymax = y;
// console.log(xmin, xmax)
// console.log(ymin, ymax)

var randomX = Math.floor(Math.random() * (xmax - xmin)) +xmin;
randomX = Math.round(randomX);
var randomY = Math.floor(Math.random() * (ymax - ymin)) +ymin;
randomY = Math.round(randomY);

while (usedX.includes(randomX) && usedY.includes(randomY)){
randomX = Math.floor(Math.random() * (xmax - xmin)) +xmin;
randomY = Math.floor(Math.random() * (ymax - ymin)) +ymin;
}
// console.log(randomX,randomY)
return [randomX,randomY];
}

function generateDiv() {
var usedX = []
var usedY = []
var dfrag = document.createDocumentFragment();
var count = Math.floor(Math.random() * (9 - 6 )) + 6;;
var i=0;
for (var i = 0; i < count; i++){
var img = document.createElement("img");
img.setAttribute("class", "asterisk")
img.setAttribute("style", "position:absolute;");
img.setAttribute("src", "images/asterisk.jpg");
img.setAttribute("height", "2%");
img.setAttribute("width", "1%");
document.body.appendChild(img);
var xy = getRandomPosition(img, usedX, usedY);
usedX += xy[0];
usedY += xy[1];
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

function countStars(x){
var numMap = {6:54, 7:55, 8:56, 9:57};
var res = numMap[count1];
if (res == x) {
  }
else if([54, 55, 56, 57].includes(x)){
blink()
}
}

// to make experiment, create loop/sequence that is one time around the letterwheel
// on each trial, have the chance of it being preceded by the star counting task (5x)
// will have to figure out the non-fixed trial numbers
//also add in demographic questions at the end and participant id at the beginning in html forms
//data collection
function circle1(){
  new lab.html.Screen({
    content: '<div id="instructions2">' +
      "<p>Circles just appeared at three locations on the letter wheel. The circled</p>"+
      "<p id='instrAdded'>'letters are '${ parameters.unsortedLetters[0] }', '${ parameters.unsortedLetters[1] }', and '${ parameters.unsortedLetters[2] }'. Type the letters in alphabetical order ('${ parameters.answerLetters[0] }${ parameters.answerLetters[1] }${ parameters.answerLetters[2] }')</p>"+
      '</div>'+

    "<div class='circle-container'>"+

    '<a id="center" class="point"></a>'+
    '<a id="flash" class="point flash"></a>'+
    '<a id="deg0" class="point" >${ parameters.place[0] }</a>'+
    '<a id="deg45" class="point">${ parameters.place[1] }</a>'+
    '<a id="deg80" class="point">${ parameters.place[2] }</a>'+
    '<a id="deg120" class="point">${ parameters.place[3] }</a>'+
    '<a id="deg160" class="point">${ parameters.place[4] }</a>'+
    '<a id="deg200" class="point">${ parameters.place[5] }</a>'+
    '<a id="deg240" class="point pointCircle">${ parameters.place[6] }</a>'+
    '<a id="deg280" class="point pointCircle">${ parameters.place[7] }</a>'+
    '<a id="deg320" class="point pointCircle">${ parameters.place[8] }</a>'+

    '</div>',
    
    parameters: {
      currentLetters: currentLetters = [],
      place: place = ['b','c','d','h','n','t','x','y','z'].sort(func),
      answerLetters: answerLetters = [place[6], place[7], place[8]].sort(),
      unsortedLetters: unsortedLetters = [place[6], place[7], place[8]],       
    },

    events: {
      'keydown': 
      
      function(event) {
        console.log(window.screen.height)
        console.log(window.screen.width)
        x = event.key
        var cent = document.getElementById('center');
        alphPlace = [this.parameters.place[6], this.parameters.place[7], this.parameters.place[8]].sort()
        place1 = alphPlace[0]
        place2 = alphPlace[1]
        place3 = alphPlace[2]

        if (place.includes(x)){
          if (x == place1 && currentLetters.length == 0){
            currentLetters.push(x)
            cent.classList.toggle("active");
            document.getElementById('center').innerHTML = place1
          }
          else if (x == place2 && currentLetters.length == 1){
            currentLetters.push(x)
            document.getElementById('center').innerHTML = place1 + place2
          }
          else if (x == place3 && currentLetters.length == 2){
            cent.classList.remove("active");
            this.end('All keys pressed') 
          }
          else if (this.parameters.place.includes(x)){
            cent.classList.remove("active");
            currentLetters = []
            document.getElementById('center').innerHTML = ''
            blink()
          }
      }
      }
  }
})
}

const study = new lab.flow.Sequence({
    content: [

    new lab.html.Screen({
      content: '<div id="instructions">'+
      'Please click anywhere on the screen to start the study.'+
    '</div>',

        keysSoFar: keyStatus = [],
        condition: condition = [' ', 's'],

        events: {
          'click': 
          
          function(event) {
              var el = document.documentElement
                  , rfs =
                          el.requestFullScreen
                      || el.webkitRequestFullScreen
                      || el.mozRequestFullScreen
              ;
              rfs.call(el);
              this.end('All keys pressed');

            }},
    }),

    // circle1(),
   
    new lab.html.Screen({
      content: '<div id="instructions">' +
        '<p>Please turn off and put away your phone.</p>' +
        '<br>'+
        '<p>There are two tests in this session. Each will take about 15 minutes.</p>' +
        '<br>'+
        '<p>To start, press Shift-Space (that is, press Shift and the spacebar together).</p>'+
        '</div>',

        keysSoFar: keyStatus = [],
        condition: condition = [' ', 's'],

        events: {
          'keypress': 
          
          function(event) {
            x = event.keyCode
            if (x == 32 || x == 115) {
              //ISSUE
                  // alert('space')
                  // document.addEventListener('keydown', function(){
                    
                      // var y = event.keyCode;
                      // alert(y)
                      // if (y == 115 || y == 32) {
                          // document.addEventListener('keyup', function(){
                            // alert('space')
                              this.end('All keys pressed');

                          }}},
    }),
    new lab.html.Screen({
      content: '<div id="instructions2">' +
        "<p>In this test, you'll perform a simple alphabetizing task at different locations"+
        "<p>on a 'letter wheel' like the one below. In the next few minutes you'll see</p>"+
        "<p>how this works. Press Shift-Space to continue.</p>" +
        '</div>'+

      "<div class='circle-container'>"+

      '<a id="center" class="point"></a>'+
      '<a id="deg0" class="point" >${ parameters.place[0] }</a>'+
      '<a id="deg45" class="point">${ parameters.place[1] }</a>'+
      '<a id="deg80" class="point">${ parameters.place[2] }</a>'+
      '<a id="deg120" class="point">${ parameters.place[3] }</a>'+
      '<a id="deg160" class="point">${ parameters.place[4] }</a>'+
      '<a id="deg200" class="point">${ parameters.place[5] }</a>'+
      '<a id="deg240" class="point">${ parameters.place[6] }</a>'+
      '<a id="deg280" class="point">${ parameters.place[7] }</a>'+
      '<a id="deg320" class="point">${ parameters.place[8] }</a>'+

      '</div>',
      
      parameters: {
        place: ['b','c','d','h','n','t','x','y','z'].sort(func)
      },
      responses: {
        'keydown(Space)': 'next page',
      }
    }),

    new lab.html.Screen({
      content: '<div id="instructions2">' +
        "<p>Circles just appeared at three locations on the letter wheel. The circled</p>"+
        "<p id='instrAdded'>'letters are '${ parameters.unsortedLetters[0] }', '${ parameters.unsortedLetters[1] }', and '${ parameters.unsortedLetters[2] }'. Type the letters in alphabetical order ('${ parameters.answerLetters[0] }${ parameters.answerLetters[1] }${ parameters.answerLetters[2] }')</p>"+
        '</div>'+

      "<div class='circle-container'>"+

      '<a id="center" class="point"></a>'+
      '<a id="flash" class="point flash"></a>'+
      '<a id="deg0" class="point" >${ parameters.place[0] }</a>'+
      '<a id="deg45" class="point">${ parameters.place[1] }</a>'+
      '<a id="deg80" class="point">${ parameters.place[2] }</a>'+
      '<a id="deg120" class="point">${ parameters.place[3] }</a>'+
      '<a id="deg160" class="point">${ parameters.place[4] }</a>'+
      '<a id="deg200" class="point">${ parameters.place[5] }</a>'+
      '<a id="deg240" class="point pointCircle">${ parameters.place[6] }</a>'+
      '<a id="deg280" class="point pointCircle">${ parameters.place[7] }</a>'+
      '<a id="deg320" class="point pointCircle">${ parameters.place[8] }</a>'+

      '</div>',
      
      parameters: {
        currentLetters: currentLetters = [],
        place: place = ['b','c','d','h','n','t','x','y','z'].sort(func),
        answerLetters: answerLetters = [place[6], place[7], place[8]].sort(),
        unsortedLetters: unsortedLetters = [place[6], place[7], place[8]],       
      },

      events: {
        'keydown': 
        
        function(event) {
          x = event.key
          var cent = document.getElementById('center');
          alphPlace = [this.parameters.place[6], this.parameters.place[7], this.parameters.place[8]].sort()
          place1 = alphPlace[0]
          place2 = alphPlace[1]
          place3 = alphPlace[2]

          if (place.includes(x)){
            if (x == place1 && currentLetters.length == 0){
              currentLetters.push(x)
              cent.classList.toggle("active");
              document.getElementById('center').innerHTML = place1
            }
            else if (x == place2 && currentLetters.length == 1){
              currentLetters.push(x)
              document.getElementById('center').innerHTML = place1 + place2
            }
            else if (x == place3 && currentLetters.length == 2){
              cent.classList.remove("active");
              this.end('All keys pressed') 
            }
            else if (this.parameters.place.includes(x)){
              cent.classList.remove("active");
              currentLetters = []
              document.getElementById('center').innerHTML = ''
              blink()
            }
        }
        }
    }
  }),

    new lab.html.Screen({
      content: '<div id="instructions2">' +
        "<p>Good. Throughout the test you'll need to put letters in alphabetical order. If</p>"+
        "<p>you want to see the alphabet at any time, press the Shift and ? keys</p>"+
        "<p>together. Try this now: press Shift-? and hold for a second, then release.</p>"+
        '</div>'+

      '<div id=furtherInstructions></div>'+

      "<div class='circle-container'>"+

      '<a id="center" class="point"></a>'+
      '<a id="deg0" class="point" >${ parameters.place[0] }</a>'+
      '<a id="deg45" class="point">${ parameters.place[1] }</a>'+
      '<a id="deg80" class="point">${ parameters.place[2] }</a>'+
      '<a id="deg120" class="point">${ parameters.place[3] }</a>'+
      '<a id="deg160" class="point">${ parameters.place[4] }</a>'+
      '<a id="deg200" class="point">${ parameters.place[5] }</a>'+
      '<a id="deg240" class="point">${ parameters.place[6] }</a>'+
      '<a id="deg280" class="point">${ parameters.place[7] }</a>'+
      '<a id="deg320" class="point">${ parameters.place[8] }</a>'+

      '</div>'+
      "<div id='alphabet'>"+
      '</div>',
      
      parameters: {
        currentLetters: currentLetters = [],
        place: place = alphabetOrder(extraInstr=true),
        answerLetters: answerLetters = [place[6], place[7], place[8]].sort(),
        unsortedLetters: unsortedLetters = [place[6], place[7], place[8]],   
        pressed: pressed = false,
      },

      events: {
        'keydown': 
          function(event){
            x = event.key
            if (x == '?'){
              pressed = true
              showAlphabet()
            }
            else if (x == ' ' && pressed == true){
              this.end('All keys pressed')
            }
          },
        'keyup':
          function(event){
            x = event.key
            if (x == '?'){
              hideAlphabet(true)
            }
          },
        },

  }),

    new lab.html.Screen({
      content: '<div id="instructions2">'+
      '<p>Now the circles have shifted one position clockwise (and the locations of</p>'+
      "<p>the letters have been shifted).The circled letters are now '${ parameters.place[7] }', '${ parameters.place[8] }', and '${ parameters.place[0] }'.</p>"+
      '<p>Again, type the letters in alphabetical order.</p>'+
      '</div>'+

      "<div class='circle-container'>"+
  
      '<a id="center" class="point"></a>'+
      '<a id="flash" class="point flash"></a>'+
      '<a id="deg0" class="point pointCircle" >${ parameters.place[0] }</a>'+
      '<a id="deg45" class="point">${ parameters.place[1] }</a>'+
      '<a id="deg80" class="point">${ parameters.place[2] }</a>'+
      '<a id="deg120" class="point">${ parameters.place[3] }</a>'+
      '<a id="deg160" class="point">${ parameters.place[4] }</a>'+
      '<a id="deg200" class="point">${ parameters.place[5] }</a>'+
      '<a id="deg240" class="point">${ parameters.place[6] }</a>'+
      '<a id="deg280" class="point pointCircle">${ parameters.place[7] }</a>'+
      '<a id="deg320" class="point pointCircle">${ parameters.place[8] }</a>'+

    '</div>'+
    '</div>'+
    '<div id="alphabet" >'+
    '</div>',
      
      parameters: {
        currentLetters2: currentLetters2 = [],
        place: place = alphabetOrder(extraInstr=true),
        answerLetters: answerLetters = [place[7], place[8], place[0]].sort(),
        unsortedLetters: unsortedLetters = [place[7], place[8], place[0]],       
      },
      

      events: {
        'keydown': 
          function(event){
            var x = event.key
            var cent = document.getElementById('center');
            alphPlace = [this.parameters.place[7], this.parameters.place[8], this.parameters.place[0]].sort()
            place1 = alphPlace[0]
            place2 = alphPlace[1]
            console.log(currentLetters2)
            place3 = alphPlace[2]
            if (x == '?'){
              showAlphabet()
            }

            else if (place.includes(x)){
              if (x == place1 && currentLetters2.length == 0){
                console.log('1')
                currentLetters2.push(x)
                cent.classList.toggle("active");
                document.getElementById('center').innerHTML = place1
              }
              else if (x == place2 && currentLetters2.length == 1){
                console.log('2')
                currentLetters2.push(x)
                document.getElementById('center').innerHTML = place1 + place2
              }
              else if (x == place3 && currentLetters2.length == 2){
                console.log('3')
                cent.classList.remove("active");
                this.end('All keys pressed') 
              }
              else if (this.parameters.place.includes(x)){
                console.log('4')
                cent.classList.remove("active");
                currentLetters2 = []
                document.getElementById('center').innerHTML = ''
                blink()
              }
          }

          },

        'keyup':
          function(event){
            x = event.key
            if (x == '?'){
              hideAlphabet(false)
            }
          },
        }

  }),

    new lab.html.Screen({
      content: '<div id="instructions2">'+
      '<p>Now repeat the task at the next three locations.</p>'+
      '</div>'+

      "<div class='circle-container'>"+

      '<a id="center" class="point"></a>'+
      '<a id="flash" class="point flash"></a>'+
      '<a id="deg0" class="point pointCircle" >${ parameters.place[0] }</a>'+
      '<a id="deg45" class="point pointCircle">${ parameters.place[1] }</a>'+
      '<a id="deg80" class="point">${ parameters.place[2] }</a>'+
      '<a id="deg120" class="point">${ parameters.place[3] }</a>'+
      '<a id="deg160" class="point">${ parameters.place[4] }</a>'+
      '<a id="deg200" class="point">${ parameters.place[5] }</a>'+
      '<a id="deg240" class="point">${ parameters.place[6] }</a>'+
      '<a id="deg280" class="point">${ parameters.place[7] }</a>'+
      '<a id="deg320" class="point pointCircle">${ parameters.place[8] }</a>'+

    '</div>'+
    '</div>'+
    '<div id="alphabet" >'+
    '</div>',
      
      parameters: {
        currentLetters3: currentLetters3 = [],
        place: place = alphabetOrder(extraInstr=true),
        answerLetters: answerLetters = [place[8], place[0], place[1]].sort(),
        unsortedLetters: unsortedLetters = [place[8], place[0], place[1]],       
      },
      

      events: {
        'keydown': 
          function(event){
            var x = event.key
            var cent = document.getElementById('center');
            alphPlace = [this.parameters.place[8], this.parameters.place[0], this.parameters.place[1]].sort()
            place1 = alphPlace[0]
            place2 = alphPlace[1]
            place3 = alphPlace[2]
            if (x == '?'){
              showAlphabet()
            }

            else if (place.includes(x)){
              if (x == place1 && currentLetters3.length == 0){
                console.log('1')
                currentLetters3.push(x)
                cent.classList.toggle("active");
                document.getElementById('center').innerHTML = place1
              }
              else if (x == place2 && currentLetters3.length == 1){
                console.log('2')
                currentLetters3.push(x)
                document.getElementById('center').innerHTML = place1 + place2
              }
              else if (x == place3 && currentLetters3.length == 2){
                console.log('3')
                cent.classList.remove("active");
                this.end('All keys pressed') 
              }
              else if (this.parameters.place.includes(x)){
                console.log('4')
                cent.classList.remove("active");
                currentLetters3 = []
                document.getElementById('center').innerHTML = ''
                blink()
              }
          }

          },
        'keyup':
          function(event){
            x = event.key
            if (x == '?'){
              hideAlphabet(false)
            }
          },
        }

  }),

    new lab.html.Screen({
      content: '<div id="instructions2">'+
      '<p>Good. Note that the circles keep shifting one position clockwise each time</p>'+
      "<p>you do the task. You'll follow this pattern for the rest of this test, though</p>"+
      "<p>later the circles won't be there to guide you. Press Shift-Space, then do</p>"+
      "<p>the task at the next circled locations.</p>"+
      "</div>"+

      "<div class='circle-container'>"+

      '<a id="center" class="point"></a>'+
      '<a id="flash" class="point flash"></a>'+
      '<a id="deg0" class="point">${ parameters.place[0] }</a>'+
      '<a id="deg45" class="point">${ parameters.place[1] }</a>'+
      '<a id="deg80" class="point">${ parameters.place[2] }</a>'+
      '<a id="deg120" class="point">${ parameters.place[3] }</a>'+
      '<a id="deg160" class="point">${ parameters.place[4] }</a>'+
      '<a id="deg200" class="point">${ parameters.place[5] }</a>'+
      '<a id="deg240" class="point">${ parameters.place[6] }</a>'+
      '<a id="deg280" class="point">${ parameters.place[7] }</a>'+
      '<a id="deg320" class="point">${ parameters.place[8] }</a>'+

    '</div>'+
    '</div>'+
    '<div id="alphabet" >'+
    '</div>',
      
      parameters: {
        currentLetters5: currentLetters5 = [],
        place: place = alphabetOrder(extraInstr=true),
        answerLetters: answerLetters = [place[0], place[1], place[2]].sort(),
        unsortedLetters: unsortedLetters = [place[0], place[1], place[2]],       
      },
      

      events: {
        'keydown': 
          function(event){
            var x = event.key
            
            if (x == '?'){
              showAlphabet()
            }
            else if (x == ' '){
              element = document.getElementById('deg0').classList.add("pointCircle");
              element2 = document.getElementById('deg45').classList.add("pointCircle");
              element3 = document.getElementById('deg80').classList.add("pointCircle");
            }
            
            else if (place.includes(x)){
              var cent = document.getElementById('center');
              alphPlace = [this.parameters.place[0], this.parameters.place[1], this.parameters.place[2]].sort()
              place1 = alphPlace[0]
              place2 = alphPlace[1]
              place3 = alphPlace[2]
              if (x == place1 && currentLetters5.length == 0){
                currentLetters5.push(x)
                cent.classList.toggle("active");
                document.getElementById('center').innerHTML = place1
              }
              else if (x == place2 && currentLetters5.length == 1){
                currentLetters5.push(x)
                document.getElementById('center').innerHTML = place1 + place2
              }
              else if (x == place3 && currentLetters5.length == 2){
                cent.classList.remove("active");
                this.end('All keys pressed') 
              }
              else if (this.parameters.place.includes(x)){
                cent.classList.remove("active");
                currentLetters5 = []
                document.getElementById('center').innerHTML = ''
                blink()
              }
          }
        },

        'keyup':
          function(event){
            var x = event.key
            if (x == '?'){
              hideAlphabet(false)
            }
            
          }},
    
        }),
    new lab.html.Screen({
      content: '<div id="instructions2">'+
      "</div>"+

      "<div class='circle-container'>"+

      '<a id="center" class="point"></a>'+
      '<a id="flash" class="point flash"></a>'+
      '<a id="deg0" class="point">${ parameters.place[0] }</a>'+
      '<a id="deg45" class="point pointCircle">${ parameters.place[1] }</a>'+
      '<a id="deg80" class="point pointCircle">${ parameters.place[2] }</a>'+
      '<a id="deg120" class="point pointCircle">${ parameters.place[3] }</a>'+
      '<a id="deg160" class="point">${ parameters.place[4] }</a>'+
      '<a id="deg200" class="point">${ parameters.place[5] }</a>'+
      '<a id="deg240" class="point">${ parameters.place[6] }</a>'+
      '<a id="deg280" class="point">${ parameters.place[7] }</a>'+
      '<a id="deg320" class="point">${ parameters.place[8] }</a>'+

    '</div>'+
    '</div>'+
    '<div id="alphabet" >'+
    '</div>',
      
      parameters: {
        currentLetters6: currentLetters6 = [],
        place: place = alphabetOrder(extraInstr=true),
        answerLetters: answerLetters = [place[1], place[2], place[3]].sort(),
        unsortedLetters: unsortedLetters = [place[1], place[2], place[3]],       
      },
      

      events: {
        'keydown': 
          function(event){
            var x = event.key
            var cent = document.getElementById('center');
            alphPlace = [this.parameters.place[1], this.parameters.place[2], this.parameters.place[3]].sort()
            place1 = alphPlace[0]
            place2 = alphPlace[1]
            place3 = alphPlace[2]

            if (x == '?'){
              showAlphabet()
            }
            else if (place.includes(x)){
              if (x == place1 && currentLetters6.length == 0){
                console.log('1')
                currentLetters6.push(x)
                cent.classList.toggle("active");
                document.getElementById('center').innerHTML = place1
              }
              else if (x == place2 && currentLetters6.length == 1){
                console.log('2')
                currentLetters6.push(x)
                document.getElementById('center').innerHTML = place1 + place2
              }
              else if (x == place3 && currentLetters6.length == 2){
                console.log('3')
                cent.classList.remove("active");
                this.end('All keys pressed') 
              }
              else if (this.parameters.place.includes(x)){
                console.log('4')
                cent.classList.remove("active");
                currentLetters6 = []
                document.getElementById('center').innerHTML = ''
                blink()
              }
          }
        },

        'keyup':
          function(event){
            var x = event.key
            if (x == '?'){
              hideAlphabet(false)
            }
            
          }},
    
        }),

    new lab.html.Screen({
      content: '<div id="instructions2">'+
      "</div>"+

      "<div class='circle-container'>"+

      '<a id="center" class="point"></a>'+
      '<a id="flash" class="point flash"></a>'+
      '<a id="deg0" class="point">${ parameters.place[0] }</a>'+
      '<a id="deg45" class="point">${ parameters.place[1] }</a>'+
      '<a id="deg80" class="point pointCircle">${ parameters.place[2] }</a>'+
      '<a id="deg120" class="point pointCircle">${ parameters.place[3] }</a>'+
      '<a id="deg160" class="point pointCircle">${ parameters.place[4] }</a>'+
      '<a id="deg200" class="point">${ parameters.place[5] }</a>'+
      '<a id="deg240" class="point">${ parameters.place[6] }</a>'+
      '<a id="deg280" class="point">${ parameters.place[7] }</a>'+
      '<a id="deg320" class="point">${ parameters.place[8] }</a>'+

    '</div>'+
    '</div>'+
    '<div id="alphabet" >'+
    '</div>',
      
      parameters: {
        currentLetters7: currentLetters7 = [],
        place: place = alphabetOrder(extraInstr=true),
        answerLetters: answerLetters = [place[2], place[3], place[4]].sort(),
        unsortedLetters: unsortedLetters = [place[2], place[3], place[4]],       
      },
      

      events: {
        'keydown': 
          function(event){
            var x = event.key
            var cent = document.getElementById('center');
            alphPlace = [this.parameters.place[2], this.parameters.place[3], this.parameters.place[4]].sort()
            place1 = alphPlace[0]
            place2 = alphPlace[1]
            place3 = alphPlace[2]

            if (x == '?'){
              showAlphabet()
            }
            else if (place.includes(x)){
              if (x == place1 && currentLetters7.length == 0){
                console.log('1')
                currentLetters7.push(x)
                cent.classList.toggle("active");
                document.getElementById('center').innerHTML = place1
              }
              else if (x == place2 && currentLetters7.length == 1){
                console.log('2')
                currentLetters7.push(x)
                document.getElementById('center').innerHTML = place1 + place2
              }
              else if (x == place3 && currentLetters7.length == 2){
                console.log('3')
                cent.classList.remove("active");
                this.end('All keys pressed') 
              }
              else if (this.parameters.place.includes(x)){
                console.log('4')
                cent.classList.remove("active");
                currentLetters7 = []
                document.getElementById('center').innerHTML = ''
                blink()
              }
          }
        },

        'keyup':
          function(event){
            var x = event.key
            if (x == '?'){
              hideAlphabet(false)
            }
            
          }},
    
        }),

    new lab.html.Screen({
      content: '<div id="instructions2">'+
      "</div>"+

      "<div class='circle-container'>"+

      '<a id="center" class="point"></a>'+
      '<a id="flash" class="point flash"></a>'+
      '<a id="deg0" class="point">${ parameters.place[0] }</a>'+
      '<a id="deg45" class="point">${ parameters.place[1] }</a>'+
      '<a id="deg80" class="point">${ parameters.place[2] }</a>'+
      '<a id="deg120" class="point pointCircle">${ parameters.place[3] }</a>'+
      '<a id="deg160" class="point pointCircle">${ parameters.place[4] }</a>'+
      '<a id="deg200" class="point pointCircle">${ parameters.place[5] }</a>'+
      '<a id="deg240" class="point">${ parameters.place[6] }</a>'+
      '<a id="deg280" class="point">${ parameters.place[7] }</a>'+
      '<a id="deg320" class="point">${ parameters.place[8] }</a>'+

    '</div>'+
    '</div>'+
    '<div id="alphabet" >'+
    '</div>',
      
      parameters: {
        currentLetters8: currentLetters8 = [],
        place: place = alphabetOrder(extraInstr=true),
        answerLetters: answerLetters = [place[3], place[4], place[5]].sort(),
        unsortedLetters: unsortedLetters = [place[3], place[4], place[5]],       
      },
      

      events: {
        'keydown': 
          function(event){
            var x = event.key
            var cent = document.getElementById('center');
            alphPlace = [this.parameters.place[3], this.parameters.place[4], this.parameters.place[5]].sort()
            place1 = alphPlace[0]
            place2 = alphPlace[1]
            place3 = alphPlace[2]
            
            if (x == '?'){
              showAlphabet()
            }
            else if (place.includes(x)){
              if (x == place1 && currentLetters8.length == 0){
                console.log('1')
                currentLetters8.push(x)
                cent.classList.toggle("active");
                document.getElementById('center').innerHTML = place1
              }
              else if (x == place2 && currentLetters8.length == 1){
                console.log('2')
                currentLetters8.push(x)
                document.getElementById('center').innerHTML = place1 + place2
              }
              else if (x == place3 && currentLetters8.length == 2){
                console.log('3')
                cent.classList.remove("active");
                this.end('All keys pressed') 
              }
              else if (this.parameters.place.includes(x)){
                console.log('4')
                cent.classList.remove("active");
                currentLetters8 = []
                document.getElementById('center').innerHTML = ''
                blink()
              }
          }
        },

        'keyup':
          function(event){
            var x = event.key
            if (x == '?'){
              hideAlphabet(false)
            }
            
          }},
    
        }),
    new lab.html.Screen({
      content: '<div id="instructions2">'+
      "</div>"+

      "<div class='circle-container'>"+

      '<a id="center" class="point"></a>'+
      '<a id="flash" class="point flash"></a>'+
      '<a id="deg0" class="point">${ parameters.place[0] }</a>'+
      '<a id="deg45" class="point">${ parameters.place[1] }</a>'+
      '<a id="deg80" class="point">${ parameters.place[2] }</a>'+
      '<a id="deg120" class="point">${ parameters.place[3] }</a>'+
      '<a id="deg160" class="point pointCircle">${ parameters.place[4] }</a>'+
      '<a id="deg200" class="point pointCircle">${ parameters.place[5] }</a>'+
      '<a id="deg240" class="point pointCircle">${ parameters.place[6] }</a>'+
      '<a id="deg280" class="point">${ parameters.place[7] }</a>'+
      '<a id="deg320" class="point">${ parameters.place[8] }</a>'+

    '</div>'+
    '</div>'+
    '<div id="alphabet" >'+
    '</div>',
      
      parameters: {
        currentLetters10: currentLetters10 = [],
        place: place = alphabetOrder(extraInstr=true),
        answerLetters: answerLetters = [place[4], place[5], place[6]].sort(),
        unsortedLetters: unsortedLetters = [place[4], place[5], place[6]],       
      },
      

      events: {
        'keydown': 
          function(event){
            var x = event.key
            var cent = document.getElementById('center');
            alphPlace = [this.parameters.place[4], this.parameters.place[5], this.parameters.place[6]].sort()
            place1 = alphPlace[0]
            place2 = alphPlace[1]
            place3 = alphPlace[2]

            if (x == '?'){
              showAlphabet()
            }
            else if (place.includes(x)){
              if (x == place1 && currentLetters10.length == 0){
                console.log('1')
                currentLetters10.push(x)
                cent.classList.toggle("active");
                document.getElementById('center').innerHTML = place1
              }
              else if (x == place2 && currentLetters10.length == 1){
                console.log('2')
                currentLetters10.push(x)
                document.getElementById('center').innerHTML = place1 + place2
              }
              else if (x == place3 && currentLetters10.length == 2){
                console.log('3')
                cent.classList.remove("active");
                this.end('All keys pressed') 
              }
              else if (this.parameters.place.includes(x)){
                console.log('4')
                cent.classList.remove("active");
                currentLetters10 = []
                document.getElementById('center').innerHTML = ''
                blink()
              }
          }
        },

        'keyup':
          function(event){
            var x = event.key
            if (x == '?'){
              hideAlphabet(false)
            }
            
          }},
    
        }),
    new lab.html.Screen({
      content: '<div id="instructions2">'+
      "</div>"+

      "<div class='circle-container'>"+

      '<a id="center" class="point"></a>'+
      '<a id="flash" class="point flash"></a>'+
      '<a id="deg0" class="point">${ parameters.place[0] }</a>'+
      '<a id="deg45" class="point">${ parameters.place[1] }</a>'+
      '<a id="deg80" class="point">${ parameters.place[2] }</a>'+
      '<a id="deg120" class="point">${ parameters.place[3] }</a>'+
      '<a id="deg160" class="point">${ parameters.place[4] }</a>'+
      '<a id="deg200" class="point pointCircle">${ parameters.place[5] }</a>'+
      '<a id="deg240" class="point pointCircle">${ parameters.place[6] }</a>'+
      '<a id="deg280" class="point pointCircle">${ parameters.place[7] }</a>'+
      '<a id="deg320" class="point">${ parameters.place[8] }</a>'+

    '</div>'+
    '</div>'+
    '<div id="alphabet" >'+
    '</div>',
      
      parameters: {
        currentLetters9: currentLetters9 = [],
        place: place = alphabetOrder(extraInstr=true),
        answerLetters: answerLetters = [place[5], place[6], place[7]].sort(),
        unsortedLetters: unsortedLetters = [place[5], place[6], place[7]],       
      },
      

      events: {
        'keydown': 
          function(event){
            var x = event.key
            var cent = document.getElementById('center');
            alphPlace = [this.parameters.place[5], this.parameters.place[6], this.parameters.place[7]].sort()
            place1 = alphPlace[0]
            place2 = alphPlace[1]
            place3 = alphPlace[2]
            
            if (x == '?'){
              showAlphabet()
            }
            else if (place.includes(x)){
              if (x == place1 && currentLetters9.length == 0){
                console.log('1')
                currentLetters9.push(x)
                cent.classList.toggle("active");
                document.getElementById('center').innerHTML = place1
              }
              else if (x == place2 && currentLetters9.length == 1){
                console.log('2')
                currentLetters9.push(x)
                document.getElementById('center').innerHTML = place1 + place2
              }
              else if (x == place3 && currentLetters9.length == 2){
                console.log('3')
                cent.classList.remove("active");
                this.end('All keys pressed') 
              }
              else if (this.parameters.place.includes(x)){
                console.log('4')
                cent.classList.remove("active");
                currentLetters9 = []
                document.getElementById('center').innerHTML = ''
                blink()
              }
          }
        },

        'keyup':
          function(event){
            var x = event.key
            if (x == '?'){
              hideAlphabet(false)
            }
            
          }},
    
        }),
    new lab.html.Screen({
      content: '<div id="instructions2">'+
      "</div>"+
      
      '<div id="instructions2">'+
      "<p>Good! Now you'll have a chance to practice without the circles. On the</p>"+
      "<p>next screen, the circles will show you where to start, but then they will</p>"+
      "<p>disappear and you'll have to keep track of where you are on the letter</p>"+
      "<p>wheel.</p>"+
      "<br>"+
      "<p>While you're practicing, the computer will require correct answers. If you</p>"+
      "<p>make a mistake, the screen will flash and you can try again.</p>"+
      "<br>"+
      "<p>Press Shift-Space to start the practice phase.</p>"+
      "</div>"+

    '<div id="alphabet" >'+
    '</div>',

      events: {
        'keydown': 
          function(event){
            var x = event.key
            if (x == ' '){
              this.end('All keys pressed') 
            }
        },
        },
    
        }),

    new lab.html.Screen({
      content: '<div id="instructions2">'+
      "</div>"+

      "<div class='circle-container'>"+

      '<a id="center" class="point"></a>'+
      '<a id="flash" class="point flash"></a>'+
      '<a id="deg0" class="point">${ parameters.place[0] }</a>'+
      '<a id="deg45" class="point">${ parameters.place[1] }</a>'+
      '<a id="deg80" class="point">${ parameters.place[2] }</a>'+
      '<a id="deg120" class="point">${ parameters.place[3] }</a>'+
      '<a id="deg160" class="point">${ parameters.place[4] }</a>'+
      '<a id="deg200" class="point">${ parameters.place[5] }</a>'+
      '<a id="deg240" class="point pointCircle">${ parameters.place[6] }</a>'+
      '<a id="deg280" class="point pointCircle">${ parameters.place[7] }</a>'+
      '<a id="deg320" class="point pointCircle">${ parameters.place[8] }</a>'+

    '</div>'+
    '</div>'+
    '<div id="alphabet" >'+
    '</div>',
      
      parameters: {
        currentLetters11: currentLetters11 = [],
        place: place = alphabetOrder(extraInstr=true),
        answerLetters: answerLetters = [place[6], place[7], place[8]].sort(),
        unsortedLetters: unsortedLetters = [place[6], place[7], place[8]],       
      },
      

      events: {
        'keydown': 
          function(event){
            var x = event.key
            var cent = document.getElementById('center');
            alphPlace = [this.parameters.place[6], this.parameters.place[7], this.parameters.place[8]].sort()
            place1 = alphPlace[0]
            place2 = alphPlace[1]
            place3 = alphPlace[2]
            
            if (x == '?'){
              showAlphabet()
            }
            else if (place.includes(x)){
              if (x == place1 && currentLetters11.length == 0){
                console.log('1')
                currentLetters11.push(x)
                cent.classList.toggle("active");
                document.getElementById('center').innerHTML = place1
              }
              else if (x == place2 && currentLetters11.length == 1){
                console.log('2')
                currentLetters11.push(x)
                document.getElementById('center').innerHTML = place1 + place2
              }
              else if (x == place3 && currentLetters11.length == 2){
                console.log('3')
                cent.classList.remove("active");
                this.end('All keys pressed') 
              }
              else if (this.parameters.place.includes(x)){
                console.log('4')
                cent.classList.remove("active");
                currentLetters11 = []
                document.getElementById('center').innerHTML = ''
                blink()
              }
          }
        },

        'keyup':
          function(event){
            var x = event.key
            if (x == '?'){
              hideAlphabet(false)
            }
            
          }},
    
        }),

    new lab.html.Screen({
      content: '<div id="instructions2">'+
      "</div>"+

      "<div class='circle-container'>"+

      '<a id="center" class="point"></a>'+
      '<a id="flash" class="point flash"></a>'+
      '<a id="deg0" class="point">${ parameters.place[0] }</a>'+
      '<a id="deg45" class="point">${ parameters.place[1] }</a>'+
      '<a id="deg80" class="point">${ parameters.place[2] }</a>'+
      '<a id="deg120" class="point">${ parameters.place[3] }</a>'+
      '<a id="deg160" class="point">${ parameters.place[4] }</a>'+
      '<a id="deg200" class="point">${ parameters.place[5] }</a>'+
      '<a id="deg240" class="point">${ parameters.place[6] }</a>'+
      '<a id="deg280" class="point">${ parameters.place[7] }</a>'+
      '<a id="deg320" class="point">${ parameters.place[8] }</a>'+

    '</div>'+
    '</div>'+
    '<div id="alphabet" >'+
    '</div>',
      
      parameters: {
        currentLetters12: currentLetters12 = [],
        place: place = alphabetOrder(extraInstr=true),
        answerLetters: answerLetters = [place[7], place[8], place[0]].sort(),
        unsortedLetters: unsortedLetters = [place[7], place[8], place[0]],       
      },
      

      events: {
        'keydown': 
          function(event){
            var x = event.key
            var cent = document.getElementById('center');
            alphPlace = [this.parameters.place[7], this.parameters.place[8], this.parameters.place[0]].sort()
            place1 = alphPlace[0]
            place2 = alphPlace[1]
            place3 = alphPlace[2]
            
            if (x == '?'){
              showAlphabet()
            }
            else if (place.includes(x)){
              if (x == place1 && currentLetters12.length == 0){
                console.log('1')
                currentLetters12.push(x)
                cent.classList.toggle("active");
                document.getElementById('center').innerHTML = place1
              }
              else if (x == place2 && currentLetters12.length == 1){
                console.log('2')
                currentLetters12.push(x)
                document.getElementById('center').innerHTML = place1 + place2
              }
              else if (x == place3 && currentLetters12.length == 2){
                console.log('3')
                cent.classList.remove("active");
                this.end('All keys pressed') 
              }
              else if (this.parameters.place.includes(x)){
                console.log('4')
                cent.classList.remove("active");
                currentLetters12 = []
                document.getElementById('center').innerHTML = ''
                blink()
              }
          }
        },

        'keyup':
          function(event){
            var x = event.key
            if (x == '?'){
              hideAlphabet(false)
            }
            
          }},
    
        }),

    new lab.html.Screen({
      content: '<div id="instructions2">'+
      "</div>"+

      "<div class='circle-container'>"+

      '<a id="center" class="point"></a>'+
      '<a id="flash" class="point flash"></a>'+
      '<a id="deg0" class="point">${ parameters.place[0] }</a>'+
      '<a id="deg45" class="point">${ parameters.place[1] }</a>'+
      '<a id="deg80" class="point">${ parameters.place[2] }</a>'+
      '<a id="deg120" class="point">${ parameters.place[3] }</a>'+
      '<a id="deg160" class="point">${ parameters.place[4] }</a>'+
      '<a id="deg200" class="point">${ parameters.place[5] }</a>'+
      '<a id="deg240" class="point">${ parameters.place[6] }</a>'+
      '<a id="deg280" class="point">${ parameters.place[7] }</a>'+
      '<a id="deg320" class="point">${ parameters.place[8] }</a>'+

    '</div>'+
    '</div>'+
    '<div id="alphabet" >'+
    '</div>',
      
      parameters: {
        currentLetters13: currentLetters13 = [],
        place: place = alphabetOrder(extraInstr=true),
        answerLetters: answerLetters = [place[8], place[0], place[1]].sort(),
        unsortedLetters: unsortedLetters = [place[8], place[0], place[1]],       
      },
      

      events: {
        'keydown': 
          function(event){
            var x = event.key
            var cent = document.getElementById('center');
            alphPlace = [this.parameters.place[8], this.parameters.place[0], this.parameters.place[1]].sort()
            place1 = alphPlace[0]
            place2 = alphPlace[1]
            place3 = alphPlace[2]
            
            if (x == '?'){
              showAlphabet()
            }
            else if (place.includes(x)){
              if (x == place1 && currentLetters13.length == 0){
                console.log('1')
                currentLetters13.push(x)
                cent.classList.toggle("active");
                document.getElementById('center').innerHTML = place1
              }
              else if (x == place2 && currentLetters13.length == 1){
                console.log('2')
                currentLetters13.push(x)
                document.getElementById('center').innerHTML = place1 + place2
              }
              else if (x == place3 && currentLetters13.length == 2){
                console.log('3')
                cent.classList.remove("active");
                this.end('All keys pressed') 
              }
              else if (this.parameters.place.includes(x)){
                console.log('4')
                cent.classList.remove("active");
                currentLetters13 = []
                document.getElementById('center').innerHTML = ''
                blink()
              }
          }
        },

        'keyup':
          function(event){
            var x = event.key
            if (x == '?'){
              hideAlphabet(false)
            }
            
          }},
    
        }),

    new lab.html.Screen({
      content: '<div id="instructions2">'+
      "</div>"+

      "<div class='circle-container'>"+

      '<a id="center" class="point"></a>'+
      '<a id="flash" class="point flash"></a>'+
      '<a id="deg0" class="point">${ parameters.place[0] }</a>'+
      '<a id="deg45" class="point">${ parameters.place[1] }</a>'+
      '<a id="deg80" class="point">${ parameters.place[2] }</a>'+
      '<a id="deg120" class="point">${ parameters.place[3] }</a>'+
      '<a id="deg160" class="point">${ parameters.place[4] }</a>'+
      '<a id="deg200" class="point">${ parameters.place[5] }</a>'+
      '<a id="deg240" class="point">${ parameters.place[6] }</a>'+
      '<a id="deg280" class="point">${ parameters.place[7] }</a>'+
      '<a id="deg320" class="point">${ parameters.place[8] }</a>'+

    '</div>'+
    '</div>'+
    '<div id="alphabet" >'+
    '</div>',
      
      parameters: {
        currentLetters14: currentLetters14 = [],
        place: place = alphabetOrder(extraInstr=false),
        answerLetters: answerLetters = [place[0], place[1], place[2]].sort(),
        unsortedLetters: unsortedLetters = [place[0], place[1], place[2]],       
      },
      

      events: {
        'keydown': 
          function(event){
            var x = event.key
            var cent = document.getElementById('center');
            alphPlace = [this.parameters.place[0], this.parameters.place[1], this.parameters.place[2]].sort()
            place1 = alphPlace[0]
            place2 = alphPlace[1]
            place3 = alphPlace[2]
            
            if (x == '?'){
              showAlphabet()
            }
            else if (place.includes(x)){
              if (x == place1 && currentLetters14.length == 0){
                console.log('1')
                currentLetters14.push(x)
                cent.classList.toggle("active");
                document.getElementById('center').innerHTML = place1
              }
              else if (x == place2 && currentLetters14.length == 1){
                console.log('2')
                currentLetters14.push(x)
                document.getElementById('center').innerHTML = place1 + place2
              }
              else if (x == place3 && currentLetters14.length == 2){
                console.log('3')
                cent.classList.remove("active");
                this.end('All keys pressed') 
              }
              else if (this.parameters.place.includes(x)){
                console.log('4')
                cent.classList.remove("active");
                currentLetters14 = []
                document.getElementById('center').innerHTML = ''
                blink()
              }
          }
        },

        'keyup':
          function(event){
            var x = event.key
            if (x == '?'){
              hideAlphabet(false)
            }
            
          }},
    
        }),  

    new lab.html.Screen({
      content: 

      '<div id="instructions2">'+
          "<p>Good! From now on, every few trials you'll be interrupted with a simple</p>"+
          "<p>counting task. Count the * characters below and then press the</p>"+
          "<p>corresponding number key above the letters on the keyboard. If you make</p>"+
          "<p>an error, the screen will flash and you'll have another chance.</p>"+
          "</div>"+

      "<div class='circle-container'>"+

      '<div id="starFlash" class="star starFlash"></div>'+
      '<div id="star0.active" class="star" style="font-size:24px; top:${ parameters.count[1][0] }px; left:${ parameters.count[2][0] }px; position:absolute;">*</div>'+
      '<div id="star1.active" class="star" style="font-size:24px; top:${ parameters.count[1][1] }px; left:${ parameters.count[2][1] }px; position:absolute;">*</div>'+
      '<div id="star2.active" class="star" style="font-size:24px; top:${ parameters.count[1][2] }px; left:${ parameters.count[2][2] }px; position:absolute;">*</div>'+
      '<div id="star3.active" class="star" style="font-size:24px; top:${ parameters.count[1][3] }px; left:${ parameters.count[2][3] }px; position:absolute;">*</div>'+
      '<div id="star4.active" class="star" style="font-size:24px; top:${ parameters.count[1][4] }px; left:${ parameters.count[2][4] }px; position:absolute;">*</div>'+
      '<div id="star5.active" class="star" style="font-size:24px; top:${ parameters.count[1][5] }px; left:${ parameters.count[2][5] }px; position:absolute;">*</div>'+
      "<div id='star6${ (parameters.count[0] >= 7 ? '.active' : '') }' class='star' style='font-size:24px; top:${ parameters.count[1][6] }px; left:${ parameters.count[2][6] }px; position:absolute;'>${ (parameters.count[0] >= 7 ? '*' : '') }</div>"+
      "<div id='star7${ (parameters.count[0] >= 8 ? '.active' : '') }' class='star' style='font-size:24px; top:${ parameters.count[1][7] }px; left:${ parameters.count[2][7] }px; position:absolute;'>${ (parameters.count[0] >= 8 ? '*' : '') }</div>"+
      "<div id='star8${ (parameters.count[0] >= 9 ? '.active' : '') }' class='star' style='font-size:24px; top:${ parameters.count[1][8] }px; left:${ parameters.count[2][8] }px; position:absolute;'>${ (parameters.count[0] >= 9 ? '*' : '') }</div>"+

    '</div>'+
    '</div>'+
    '</div>',
      
      parameters: {
        count: randomStars(pageType='stars'),
      },

      
      events: {
        'keypress':
          function(event){
            possibleNumbers = [6,7,8,9]
            var x = event.key
            if (x == this.parameters.count[0]){
              this.end('All keys pressed')
            } 
            else if (possibleNumbers.includes(parseInt(x)) && x!= this.parameters.count[0]){
              console.log('wrongnum')
              blink(pageType='stars')
            }
          },
    
        }}),

    new lab.html.Screen({
      content: 

      '<div id="instructions2">'+
          "<p>Good! From now on, every few trials you'll be interrupted with a simple</p>"+
          "<p>counting task. Count the * characters below and then press the</p>"+
          "<p>corresponding number key above the letters on the keyboard. If you make</p>"+
          "<p>an error, the screen will flash and you'll have another chance.</p>"+
          "</div>"+

      "<div class='circle-container'>"+

      '<div id="starFlash" class="star starFlash"></div>'+
      '<div id="star0.active" class="star" style="font-size:24px; top:${ parameters.count[1][0] }px; left:${ parameters.count[2][0] }px; position:absolute;">*</div>'+
      '<div id="star1.active" class="star" style="font-size:24px; top:${ parameters.count[1][1] }px; left:${ parameters.count[2][1] }px; position:absolute;">*</div>'+
      '<div id="star2.active" class="star" style="font-size:24px; top:${ parameters.count[1][2] }px; left:${ parameters.count[2][2] }px; position:absolute;">*</div>'+
      '<div id="star3.active" class="star" style="font-size:24px; top:${ parameters.count[1][3] }px; left:${ parameters.count[2][3] }px; position:absolute;">*</div>'+
      '<div id="star4.active" class="star" style="font-size:24px; top:${ parameters.count[1][4] }px; left:${ parameters.count[2][4] }px; position:absolute;">*</div>'+
      '<div id="star5.active" class="star" style="font-size:24px; top:${ parameters.count[1][5] }px; left:${ parameters.count[2][5] }px; position:absolute;">*</div>'+
      "<div id='star6${ (parameters.count[0] >= 7 ? '.active' : '') }' class='star' style='font-size:24px; top:${ parameters.count[1][6] }px; left:${ parameters.count[2][6] }px; position:absolute;'>${ (parameters.count[0] >= 7 ? '*' : '') }</div>"+
      "<div id='star7${ (parameters.count[0] >= 8 ? '.active' : '') }' class='star' style='font-size:24px; top:${ parameters.count[1][7] }px; left:${ parameters.count[2][7] }px; position:absolute;'>${ (parameters.count[0] >= 8 ? '*' : '') }</div>"+
      "<div id='star8${ (parameters.count[0] >= 9 ? '.active' : '') }' class='star' style='font-size:24px; top:${ parameters.count[1][8] }px; left:${ parameters.count[2][8] }px; position:absolute;'>${ (parameters.count[0] >= 9 ? '*' : '') }</div>"+

    '</div>'+
    '</div>'+
    '</div>',
      
      parameters: {
        count: randomStars(pageType='stars'),
      },

      
      events: {
        'keypress':
          function(event){
            possibleNumbers = [6,7,8,9]
            var x = event.key
            if (x == this.parameters.count[0]){
              this.end('All keys pressed')
            } 
            else if (possibleNumbers.includes(parseInt(x)) && x!= this.parameters.count[0]){
              console.log('wrongnum')
              blink(pageType='stars')
            }
          },
    
        }}),

    new lab.html.Screen({
      content: 

      '<div id="instructions2">'+
          "<p>Good! From now on, every few trials you'll be interrupted with a simple</p>"+
          "<p>counting task. Count the * characters below and then press the</p>"+
          "<p>corresponding number key above the letters on the keyboard. If you make</p>"+
          "<p>an error, the screen will flash and you'll have another chance.</p>"+
          "</div>"+

      "<div class='circle-container'>"+

      '<div id="starFlash" class="star starFlash"></div>'+
      '<div id="star0.active" class="star" style="font-size:24px; top:${ parameters.count[1][0] }px; left:${ parameters.count[2][0] }px; position:absolute;">*</div>'+
      '<div id="star1.active" class="star" style="font-size:24px; top:${ parameters.count[1][1] }px; left:${ parameters.count[2][1] }px; position:absolute;">*</div>'+
      '<div id="star2.active" class="star" style="font-size:24px; top:${ parameters.count[1][2] }px; left:${ parameters.count[2][2] }px; position:absolute;">*</div>'+
      '<div id="star3.active" class="star" style="font-size:24px; top:${ parameters.count[1][3] }px; left:${ parameters.count[2][3] }px; position:absolute;">*</div>'+
      '<div id="star4.active" class="star" style="font-size:24px; top:${ parameters.count[1][4] }px; left:${ parameters.count[2][4] }px; position:absolute;">*</div>'+
      '<div id="star5.active" class="star" style="font-size:24px; top:${ parameters.count[1][5] }px; left:${ parameters.count[2][5] }px; position:absolute;">*</div>'+
      "<div id='star6${ (parameters.count[0] >= 7 ? '.active' : '') }' class='star' style='font-size:24px; top:${ parameters.count[1][6] }px; left:${ parameters.count[2][6] }px; position:absolute;'>${ (parameters.count[0] >= 7 ? '*' : '') }</div>"+
      "<div id='star7${ (parameters.count[0] >= 8 ? '.active' : '') }' class='star' style='font-size:24px; top:${ parameters.count[1][7] }px; left:${ parameters.count[2][7] }px; position:absolute;'>${ (parameters.count[0] >= 8 ? '*' : '') }</div>"+
      "<div id='star8${ (parameters.count[0] >= 9 ? '.active' : '') }' class='star' style='font-size:24px; top:${ parameters.count[1][8] }px; left:${ parameters.count[2][8] }px; position:absolute;'>${ (parameters.count[0] >= 9 ? '*' : '') }</div>"+

    '</div>'+
    '</div>'+
    '</div>',
      
      parameters: {
        count: randomStars(pageType='stars'),
      },

      
      events: {
        'keypress':
          function(event){
            possibleNumbers = [6,7,8,9]
            var x = event.key
            if (x == this.parameters.count[0]){
              this.end('All keys pressed')
            } 
            else if (possibleNumbers.includes(parseInt(x)) && x!= this.parameters.count[0]){
              console.log('wrongnum')
              blink(pageType='stars')
            }
          },
    
        }}),

    new lab.html.Screen({
      content: 

      '<div id="instructions2">'+
          "<p>Good! From now on, every few trials you'll be interrupted with a simple</p>"+
          "<p>counting task. Count the * characters below and then press the</p>"+
          "<p>corresponding number key above the letters on the keyboard. If you make</p>"+
          "<p>an error, the screen will flash and you'll have another chance.</p>"+
          "</div>"+

      "<div class='circle-container'>"+

      '<div id="starFlash" class="star starFlash"></div>'+
      '<div id="star0.active" class="star" style="font-size:24px; top:${ parameters.count[1][0] }px; left:${ parameters.count[2][0] }px; position:absolute;">*</div>'+
      '<div id="star1.active" class="star" style="font-size:24px; top:${ parameters.count[1][1] }px; left:${ parameters.count[2][1] }px; position:absolute;">*</div>'+
      '<div id="star2.active" class="star" style="font-size:24px; top:${ parameters.count[1][2] }px; left:${ parameters.count[2][2] }px; position:absolute;">*</div>'+
      '<div id="star3.active" class="star" style="font-size:24px; top:${ parameters.count[1][3] }px; left:${ parameters.count[2][3] }px; position:absolute;">*</div>'+
      '<div id="star4.active" class="star" style="font-size:24px; top:${ parameters.count[1][4] }px; left:${ parameters.count[2][4] }px; position:absolute;">*</div>'+
      '<div id="star5.active" class="star" style="font-size:24px; top:${ parameters.count[1][5] }px; left:${ parameters.count[2][5] }px; position:absolute;">*</div>'+
      "<div id='star6${ (parameters.count[0] >= 7 ? '.active' : '') }' class='star' style='font-size:24px; top:${ parameters.count[1][6] }px; left:${ parameters.count[2][6] }px; position:absolute;'>${ (parameters.count[0] >= 7 ? '*' : '') }</div>"+
      "<div id='star7${ (parameters.count[0] >= 8 ? '.active' : '') }' class='star' style='font-size:24px; top:${ parameters.count[1][7] }px; left:${ parameters.count[2][7] }px; position:absolute;'>${ (parameters.count[0] >= 8 ? '*' : '') }</div>"+
      "<div id='star8${ (parameters.count[0] >= 9 ? '.active' : '') }' class='star' style='font-size:24px; top:${ parameters.count[1][8] }px; left:${ parameters.count[2][8] }px; position:absolute;'>${ (parameters.count[0] >= 9 ? '*' : '') }</div>"+

    '</div>'+
    '</div>'+
    '</div>',
      
      parameters: {
        count: randomStars(pageType='stars'),
      },

      
      events: {
        'keypress':
          function(event){
            possibleNumbers = [6,7,8,9]
            var x = event.key
            if (x == this.parameters.count[0]){
              this.end('All keys pressed')
            } 
            else if (possibleNumbers.includes(parseInt(x)) && x!= this.parameters.count[0]){
              console.log('wrongnum')
              blink(pageType='stars')
            }
          },
    
        }}),

    new lab.html.Screen({
      content: 

      '<div id="instructions2">'+
          "<p>Good! From now on, every few trials you'll be interrupted with a simple</p>"+
          "<p>counting task. Count the * characters below and then press the</p>"+
          "<p>corresponding number key above the letters on the keyboard. If you make</p>"+
          "<p>an error, the screen will flash and you'll have another chance.</p>"+
          "</div>"+

      "<div class='circle-container'>"+

      '<div id="starFlash" class="star starFlash"></div>'+
      '<div id="star0.active" class="star" style="font-size:24px; top:${ parameters.count[1][0] }px; left:${ parameters.count[2][0] }px; position:absolute;">*</div>'+
      '<div id="star1.active" class="star" style="font-size:24px; top:${ parameters.count[1][1] }px; left:${ parameters.count[2][1] }px; position:absolute;">*</div>'+
      '<div id="star2.active" class="star" style="font-size:24px; top:${ parameters.count[1][2] }px; left:${ parameters.count[2][2] }px; position:absolute;">*</div>'+
      '<div id="star3.active" class="star" style="font-size:24px; top:${ parameters.count[1][3] }px; left:${ parameters.count[2][3] }px; position:absolute;">*</div>'+
      '<div id="star4.active" class="star" style="font-size:24px; top:${ parameters.count[1][4] }px; left:${ parameters.count[2][4] }px; position:absolute;">*</div>'+
      '<div id="star5.active" class="star" style="font-size:24px; top:${ parameters.count[1][5] }px; left:${ parameters.count[2][5] }px; position:absolute;">*</div>'+
      "<div id='star6${ (parameters.count[0] >= 7 ? '.active' : '') }' class='star' style='font-size:24px; top:${ parameters.count[1][6] }px; left:${ parameters.count[2][6] }px; position:absolute;'>${ (parameters.count[0] >= 7 ? '*' : '') }</div>"+
      "<div id='star7${ (parameters.count[0] >= 8 ? '.active' : '') }' class='star' style='font-size:24px; top:${ parameters.count[1][7] }px; left:${ parameters.count[2][7] }px; position:absolute;'>${ (parameters.count[0] >= 8 ? '*' : '') }</div>"+
      "<div id='star8${ (parameters.count[0] >= 9 ? '.active' : '') }' class='star' style='font-size:24px; top:${ parameters.count[1][8] }px; left:${ parameters.count[2][8] }px; position:absolute;'>${ (parameters.count[0] >= 9 ? '*' : '') }</div>"+

    '</div>'+
    '</div>'+
    '</div>',
      
      parameters: {
        count: randomStars(pageType='stars'),
      },

      
      events: {
        'keypress':
          function(event){
            possibleNumbers = [6,7,8,9]
            var x = event.key
            if (x == this.parameters.count[0]){
              this.end('All keys pressed')
            } 
            else if (possibleNumbers.includes(parseInt(x)) && x!= this.parameters.count[0]){
              console.log('wrongnum')
              blink(pageType='stars')
            }
          },
    
        }}),

    new lab.html.Screen({
      content: '<div id="instructions2">'+
      '<p>Good! After this interruption, the letter wheel will reappear. At that point,</p>'+
      '<p>try to continue with the pattern. That is, shift one position clockwise from</p>'+
      '<p>where you were before the interruption.</p>'+
      '<br>'+
      "<p>The correct locations will be circled this time, but the next time you're</p>"+
      "<p>interrupted you'll have to remember where you were.</p>"+
      '<br>'+
      '<p>Press Shift-Space to continue.</p>'+
      
  '</div>',

        events: {
          'keypress': 
          
          function(event) {
            x = event.keyCode
            if (x == 32 || x == 115) {
              //ISSUE
                  // alert('space')
                  // document.addEventListener('keydown', function(){
                    
                      // var y = event.keyCode;
                      // alert(y)
                      // if (y == 115 || y == 32) {
                          // document.addEventListener('keyup', function(){
                            // alert('space')
                              this.end('All keys pressed');

                          }}},
    }),

    new lab.html.Screen({
      content: '<div id="instructions2">'+
      "</div>"+

      "<div class='circle-container'>"+

      '<a id="center" class="point"></a>'+
      '<a id="flash" class="point flash"></a>'+
      '<a id="deg0" class="point">${ parameters.place[0] }</a>'+
      '<a id="deg45" class="pointCircle">${ parameters.place[1] }</a>'+
      '<a id="deg80" class="pointCircle">${ parameters.place[2] }</a>'+
      '<a id="deg120" class="pointCircle">${ parameters.place[3] }</a>'+
      '<a id="deg160" class="point">${ parameters.place[4] }</a>'+
      '<a id="deg200" class="point">${ parameters.place[5] }</a>'+
      '<a id="deg240" class="point">${ parameters.place[6] }</a>'+
      '<a id="deg280" class="point">${ parameters.place[7] }</a>'+
      '<a id="deg320" class="point">${ parameters.place[8] }</a>'+

    '</div>'+
    '</div>'+
    '<div id="alphabet" >'+
    '</div>',
      
      parameters: {
        currentLetters15: currentLetters15 = [],
        place: place = alphabetOrder(extraInstr=false),
        answerLetters: answerLetters = [place[1], place[2], place[3]].sort(),
        unsortedLetters: unsortedLetters = [place[1], place[2], place[3]],       
      },
      

      events: {
        'keydown': 
          function(event){
            var x = event.key
            var cent = document.getElementById('center');
            alphPlace = [this.parameters.place[1], this.parameters.place[2], this.parameters.place[3]].sort()
            place1 = alphPlace[0]
            place2 = alphPlace[1]
            place3 = alphPlace[2]
            
            if (x == '?'){
              showAlphabet()
            }
            else if (place.includes(x)){
              if (x == place1 && currentLetters15.length == 0){
                console.log('1')
                currentLetters15.push(x)
                cent.classList.toggle("active");
                document.getElementById('center').innerHTML = place1
              }
              else if (x == place2 && currentLetters15.length == 1){
                console.log('2')
                currentLetters15.push(x)
                document.getElementById('center').innerHTML = place1 + place2
              }
              else if (x == place3 && currentLetters15.length == 2){
                console.log('3')
                cent.classList.remove("active");
                this.end('All keys pressed') 
              }
              else if (this.parameters.place.includes(x)){
                console.log('4')
                cent.classList.remove("active");
                currentLetters15 = []
                document.getElementById('center').innerHTML = ''
                blink()
              }
          }
        },

        'keyup':
          function(event){
            var x = event.key
            if (x == '?'){
              hideAlphabet(false)
            }
            
          }},
    
        }),

    new lab.html.Screen({
      content: '<div id="instructions2">'+
      "</div>"+

      "<div class='circle-container'>"+

      '<a id="center" class="point"></a>'+
      '<a id="flash" class="point flash"></a>'+
      '<a id="deg0" class="point">${ parameters.place[0] }</a>'+
      '<a id="deg45" class="point">${ parameters.place[1] }</a>'+
      '<a id="deg80" class="point">${ parameters.place[2] }</a>'+
      '<a id="deg120" class="point">${ parameters.place[3] }</a>'+
      '<a id="deg160" class="point">${ parameters.place[4] }</a>'+
      '<a id="deg200" class="point">${ parameters.place[5] }</a>'+
      '<a id="deg240" class="point">${ parameters.place[6] }</a>'+
      '<a id="deg280" class="point">${ parameters.place[7] }</a>'+
      '<a id="deg320" class="point">${ parameters.place[8] }</a>'+

    '</div>'+
    '</div>'+
    '<div id="alphabet" >'+
    '</div>',
      
      parameters: {
        currentLetters16: currentLetters16 = [],
        place: place = alphabetOrder(extraInstr=false),
        answerLetters: answerLetters = [place[2], place[3], place[4]].sort(),
        unsortedLetters: unsortedLetters = [place[2], place[3], place[4]],       
      },
      

      events: {
        'keydown': 
          function(event){
            var x = event.key
            var cent = document.getElementById('center');
            alphPlace = [this.parameters.place[2], this.parameters.place[3], this.parameters.place[4]].sort()
            place1 = alphPlace[0]
            place2 = alphPlace[1]
            place3 = alphPlace[2]
            
            if (x == '?'){
              showAlphabet()
            }
            else if (place.includes(x)){
              if (x == place1 && currentLetters16.length == 0){
                console.log('1')
                currentLetters16.push(x)
                cent.classList.toggle("active");
                document.getElementById('center').innerHTML = place1
              }
              else if (x == place2 && currentLetters16.length == 1){
                console.log('2')
                currentLetters16.push(x)
                document.getElementById('center').innerHTML = place1 + place2
              }
              else if (x == place3 && currentLetters16.length == 2){
                console.log('3')
                cent.classList.remove("active");
                this.end('All keys pressed') 
              }
              else if (this.parameters.place.includes(x)){
                console.log('4')
                cent.classList.remove("active");
                currentLetters16 = []
                document.getElementById('center').innerHTML = ''
                blink()
              }
          }
        },

        'keyup':
          function(event){
            var x = event.key
            if (x == '?'){
              hideAlphabet(false)
            }
            
          }},
    
        }),

    new lab.html.Screen({
      content: '<div id="instructions2">'+
      "</div>"+

      "<div class='circle-container'>"+

      '<a id="center" class="point"></a>'+
      '<a id="flash" class="point flash"></a>'+
      '<a id="deg0" class="point">${ parameters.place[0] }</a>'+
      '<a id="deg45" class="point">${ parameters.place[1] }</a>'+
      '<a id="deg80" class="point">${ parameters.place[2] }</a>'+
      '<a id="deg120" class="point">${ parameters.place[3] }</a>'+
      '<a id="deg160" class="point">${ parameters.place[4] }</a>'+
      '<a id="deg200" class="point">${ parameters.place[5] }</a>'+
      '<a id="deg240" class="point">${ parameters.place[6] }</a>'+
      '<a id="deg280" class="point">${ parameters.place[7] }</a>'+
      '<a id="deg320" class="point">${ parameters.place[8] }</a>'+

    '</div>'+
    '</div>'+
    '<div id="alphabet" >'+
    '</div>',
      
      parameters: {
        currentLetters17: currentLetters17 = [],
        place: place = alphabetOrder(extraInstr=false),
        answerLetters: answerLetters = [place[3], place[4], place[5]].sort(),
        unsortedLetters: unsortedLetters = [place[3], place[4], place[5]],       
      },
      

      events: {
        'keydown': 
          function(event){
            var x = event.key
            var cent = document.getElementById('center');
            alphPlace = [this.parameters.place[3], this.parameters.place[4], this.parameters.place[5]].sort()
            place1 = alphPlace[0]
            place2 = alphPlace[1]
            place3 = alphPlace[2]
            
            if (x == '?'){
              showAlphabet()
            }
            else if (place.includes(x)){
              if (x == place1 && currentLetters17.length == 0){
                console.log('1')
                currentLetters17.push(x)
                cent.classList.toggle("active");
                document.getElementById('center').innerHTML = place1
              }
              else if (x == place2 && currentLetters17.length == 1){
                console.log('2')
                currentLetters17.push(x)
                document.getElementById('center').innerHTML = place1 + place2
              }
              else if (x == place3 && currentLetters17.length == 2){
                console.log('3')
                cent.classList.remove("active");
                this.end('All keys pressed') 
              }
              else if (this.parameters.place.includes(x)){
                console.log('4')
                cent.classList.remove("active");
                currentLetters17 = []
                document.getElementById('center').innerHTML = ''
                blink()
              }
          }
        },

        'keyup':
          function(event){
            var x = event.key
            if (x == '?'){
              hideAlphabet(false)
            }
            
          }},
    
        }),
    new lab.html.Screen({
      content: '<div id="instructions2">'+
      "</div>"+

      "<div class='circle-container'>"+

      '<a id="center" class="point"></a>'+
      '<a id="flash" class="point flash"></a>'+
      '<a id="deg0" class="point">${ parameters.place[0] }</a>'+
      '<a id="deg45" class="point">${ parameters.place[1] }</a>'+
      '<a id="deg80" class="point">${ parameters.place[2] }</a>'+
      '<a id="deg120" class="point">${ parameters.place[3] }</a>'+
      '<a id="deg160" class="point">${ parameters.place[4] }</a>'+
      '<a id="deg200" class="point">${ parameters.place[5] }</a>'+
      '<a id="deg240" class="point">${ parameters.place[6] }</a>'+
      '<a id="deg280" class="point">${ parameters.place[7] }</a>'+
      '<a id="deg320" class="point">${ parameters.place[8] }</a>'+

    '</div>'+
    '</div>'+
    '<div id="alphabet" >'+
    '</div>',
      
      parameters: {
        currentLetters18: currentLetters18 = [],
        place: place = alphabetOrder(extraInstr=false),
        answerLetters: answerLetters = [place[4], place[5], place[6]].sort(),
        unsortedLetters: unsortedLetters = [place[4], place[5], place[6]],       
      },
      

      events: {
        'keydown': 
          function(event){
            var x = event.key
            var cent = document.getElementById('center');
            alphPlace = [this.parameters.place[4], this.parameters.place[5], this.parameters.place[6]].sort()
            place1 = alphPlace[0]
            place2 = alphPlace[1]
            place3 = alphPlace[2]
            
            if (x == '?'){
              showAlphabet()
            }
            else if (place.includes(x)){
              if (x == place1 && currentLetters18.length == 0){
                console.log('1')
                currentLetters18.push(x)
                cent.classList.toggle("active");
                document.getElementById('center').innerHTML = place1
              }
              else if (x == place2 && currentLetters18.length == 1){
                console.log('2')
                currentLetters18.push(x)
                document.getElementById('center').innerHTML = place1 + place2
              }
              else if (x == place3 && currentLetters18.length == 2){
                console.log('3')
                cent.classList.remove("active");
                this.end('All keys pressed') 
              }
              else if (this.parameters.place.includes(x)){
                console.log('4')
                cent.classList.remove("active");
                currentLetters18 = []
                document.getElementById('center').innerHTML = ''
                blink()
              }
          }
        },

        'keyup':
          function(event){
            var x = event.key
            if (x == '?'){
              hideAlphabet(false)
            }
            
          }},
    
        }),


    new lab.html.Screen({
      content: 

      '<div id="instructions2">'+
          "</div>"+

      "<div class='circle-container'>"+

      '<div id="starFlash" class="star starFlash"></div>'+
      '<div id="star0.active" class="star" style="font-size:24px; top:${ parameters.count[1][0] }px; left:${ parameters.count[2][0] }px; position:absolute;">*</div>'+
      '<div id="star1.active" class="star" style="font-size:24px; top:${ parameters.count[1][1] }px; left:${ parameters.count[2][1] }px; position:absolute;">*</div>'+
      '<div id="star2.active" class="star" style="font-size:24px; top:${ parameters.count[1][2] }px; left:${ parameters.count[2][2] }px; position:absolute;">*</div>'+
      '<div id="star3.active" class="star" style="font-size:24px; top:${ parameters.count[1][3] }px; left:${ parameters.count[2][3] }px; position:absolute;">*</div>'+
      '<div id="star4.active" class="star" style="font-size:24px; top:${ parameters.count[1][4] }px; left:${ parameters.count[2][4] }px; position:absolute;">*</div>'+
      '<div id="star5.active" class="star" style="font-size:24px; top:${ parameters.count[1][5] }px; left:${ parameters.count[2][5] }px; position:absolute;">*</div>'+
      "<div id='star6${ (parameters.count[0] >= 7 ? '.active' : '') }' class='star' style='font-size:24px; top:${ parameters.count[1][6] }px; left:${ parameters.count[2][6] }px; position:absolute;'>${ (parameters.count[0] >= 7 ? '*' : '') }</div>"+
      "<div id='star7${ (parameters.count[0] >= 8 ? '.active' : '') }' class='star' style='font-size:24px; top:${ parameters.count[1][7] }px; left:${ parameters.count[2][7] }px; position:absolute;'>${ (parameters.count[0] >= 8 ? '*' : '') }</div>"+
      "<div id='star8${ (parameters.count[0] >= 9 ? '.active' : '') }' class='star' style='font-size:24px; top:${ parameters.count[1][8] }px; left:${ parameters.count[2][8] }px; position:absolute;'>${ (parameters.count[0] >= 9 ? '*' : '') }</div>"+

    '</div>'+
    '</div>'+
    '</div>',
      
      parameters: {
        count: randomStars(pageType='stars'),
      },

      
      events: {
        'keypress':
          function(event){
            possibleNumbers = [6,7,8,9]
            var x = event.key
            if (x == this.parameters.count[0]){
              this.end('All keys pressed')
            } 
            else if (possibleNumbers.includes(parseInt(x)) && x!= this.parameters.count[0]){
              console.log('wrongnum')
              blink(pageType='stars')
            }
          },
    
        }}),
    new lab.html.Screen({
      content: 

      '<div id="instructions2">'+
          "</div>"+

      "<div class='circle-container'>"+

      '<div id="starFlash" class="star starFlash"></div>'+
      '<div id="star0.active" class="star" style="font-size:24px; top:${ parameters.count[1][0] }px; left:${ parameters.count[2][0] }px; position:absolute;">*</div>'+
      '<div id="star1.active" class="star" style="font-size:24px; top:${ parameters.count[1][1] }px; left:${ parameters.count[2][1] }px; position:absolute;">*</div>'+
      '<div id="star2.active" class="star" style="font-size:24px; top:${ parameters.count[1][2] }px; left:${ parameters.count[2][2] }px; position:absolute;">*</div>'+
      '<div id="star3.active" class="star" style="font-size:24px; top:${ parameters.count[1][3] }px; left:${ parameters.count[2][3] }px; position:absolute;">*</div>'+
      '<div id="star4.active" class="star" style="font-size:24px; top:${ parameters.count[1][4] }px; left:${ parameters.count[2][4] }px; position:absolute;">*</div>'+
      '<div id="star5.active" class="star" style="font-size:24px; top:${ parameters.count[1][5] }px; left:${ parameters.count[2][5] }px; position:absolute;">*</div>'+
      "<div id='star6${ (parameters.count[0] >= 7 ? '.active' : '') }' class='star' style='font-size:24px; top:${ parameters.count[1][6] }px; left:${ parameters.count[2][6] }px; position:absolute;'>${ (parameters.count[0] >= 7 ? '*' : '') }</div>"+
      "<div id='star7${ (parameters.count[0] >= 8 ? '.active' : '') }' class='star' style='font-size:24px; top:${ parameters.count[1][7] }px; left:${ parameters.count[2][7] }px; position:absolute;'>${ (parameters.count[0] >= 8 ? '*' : '') }</div>"+
      "<div id='star8${ (parameters.count[0] >= 9 ? '.active' : '') }' class='star' style='font-size:24px; top:${ parameters.count[1][8] }px; left:${ parameters.count[2][8] }px; position:absolute;'>${ (parameters.count[0] >= 9 ? '*' : '') }</div>"+

    '</div>'+
    '</div>'+
    '</div>',
      
      parameters: {
        count: randomStars(pageType='stars'),
      },

      
      events: {
        'keypress':
          function(event){
            possibleNumbers = [6,7,8,9]
            var x = event.key
            if (x == this.parameters.count[0]){
              this.end('All keys pressed')
            } 
            else if (possibleNumbers.includes(parseInt(x)) && x!= this.parameters.count[0]){
              console.log('wrongnum')
              blink(pageType='stars')
            }
          },
    
        }}),
    new lab.html.Screen({
      content: 

      '<div id="instructions2">'+
          "</div>"+

      "<div class='circle-container'>"+

      '<div id="starFlash" class="star starFlash"></div>'+
      '<div id="star0.active" class="star" style="font-size:24px; top:${ parameters.count[1][0] }px; left:${ parameters.count[2][0] }px; position:absolute;">*</div>'+
      '<div id="star1.active" class="star" style="font-size:24px; top:${ parameters.count[1][1] }px; left:${ parameters.count[2][1] }px; position:absolute;">*</div>'+
      '<div id="star2.active" class="star" style="font-size:24px; top:${ parameters.count[1][2] }px; left:${ parameters.count[2][2] }px; position:absolute;">*</div>'+
      '<div id="star3.active" class="star" style="font-size:24px; top:${ parameters.count[1][3] }px; left:${ parameters.count[2][3] }px; position:absolute;">*</div>'+
      '<div id="star4.active" class="star" style="font-size:24px; top:${ parameters.count[1][4] }px; left:${ parameters.count[2][4] }px; position:absolute;">*</div>'+
      '<div id="star5.active" class="star" style="font-size:24px; top:${ parameters.count[1][5] }px; left:${ parameters.count[2][5] }px; position:absolute;">*</div>'+
      "<div id='star6${ (parameters.count[0] >= 7 ? '.active' : '') }' class='star' style='font-size:24px; top:${ parameters.count[1][6] }px; left:${ parameters.count[2][6] }px; position:absolute;'>${ (parameters.count[0] >= 7 ? '*' : '') }</div>"+
      "<div id='star7${ (parameters.count[0] >= 8 ? '.active' : '') }' class='star' style='font-size:24px; top:${ parameters.count[1][7] }px; left:${ parameters.count[2][7] }px; position:absolute;'>${ (parameters.count[0] >= 8 ? '*' : '') }</div>"+
      "<div id='star8${ (parameters.count[0] >= 9 ? '.active' : '') }' class='star' style='font-size:24px; top:${ parameters.count[1][8] }px; left:${ parameters.count[2][8] }px; position:absolute;'>${ (parameters.count[0] >= 9 ? '*' : '') }</div>"+

    '</div>'+
    '</div>'+
    '</div>',
      
      parameters: {
        count: randomStars(pageType='stars'),
      },

      
      events: {
        'keypress':
          function(event){
            possibleNumbers = [6,7,8,9]
            var x = event.key
            if (x == this.parameters.count[0]){
              this.end('All keys pressed')
            } 
            else if (possibleNumbers.includes(parseInt(x)) && x!= this.parameters.count[0]){
              console.log('wrongnum')
              blink(pageType='stars')
            }
          },
    
        }}),
    new lab.html.Screen({
      content: 

      '<div id="instructions2">'+
          "</div>"+

      "<div class='circle-container'>"+

      '<div id="starFlash" class="star starFlash"></div>'+
      '<div id="star0.active" class="star" style="font-size:24px; top:${ parameters.count[1][0] }px; left:${ parameters.count[2][0] }px; position:absolute;">*</div>'+
      '<div id="star1.active" class="star" style="font-size:24px; top:${ parameters.count[1][1] }px; left:${ parameters.count[2][1] }px; position:absolute;">*</div>'+
      '<div id="star2.active" class="star" style="font-size:24px; top:${ parameters.count[1][2] }px; left:${ parameters.count[2][2] }px; position:absolute;">*</div>'+
      '<div id="star3.active" class="star" style="font-size:24px; top:${ parameters.count[1][3] }px; left:${ parameters.count[2][3] }px; position:absolute;">*</div>'+
      '<div id="star4.active" class="star" style="font-size:24px; top:${ parameters.count[1][4] }px; left:${ parameters.count[2][4] }px; position:absolute;">*</div>'+
      '<div id="star5.active" class="star" style="font-size:24px; top:${ parameters.count[1][5] }px; left:${ parameters.count[2][5] }px; position:absolute;">*</div>'+
      "<div id='star6${ (parameters.count[0] >= 7 ? '.active' : '') }' class='star' style='font-size:24px; top:${ parameters.count[1][6] }px; left:${ parameters.count[2][6] }px; position:absolute;'>${ (parameters.count[0] >= 7 ? '*' : '') }</div>"+
      "<div id='star7${ (parameters.count[0] >= 8 ? '.active' : '') }' class='star' style='font-size:24px; top:${ parameters.count[1][7] }px; left:${ parameters.count[2][7] }px; position:absolute;'>${ (parameters.count[0] >= 8 ? '*' : '') }</div>"+
      "<div id='star8${ (parameters.count[0] >= 9 ? '.active' : '') }' class='star' style='font-size:24px; top:${ parameters.count[1][8] }px; left:${ parameters.count[2][8] }px; position:absolute;'>${ (parameters.count[0] >= 9 ? '*' : '') }</div>"+

    '</div>'+
    '</div>'+
    '</div>',
      
      parameters: {
        count: randomStars(pageType='stars'),
      },

      
      events: {
        'keypress':
          function(event){
            possibleNumbers = [6,7,8,9]
            var x = event.key
            if (x == this.parameters.count[0]){
              this.end('All keys pressed')
            } 
            else if (possibleNumbers.includes(parseInt(x)) && x!= this.parameters.count[0]){
              console.log('wrongnum')
              blink(pageType='stars')
            }
          },
    
        }}),
    new lab.html.Screen({
      content: 

      '<div id="instructions2">'+
          "</div>"+

      "<div class='circle-container'>"+

      '<div id="starFlash" class="star starFlash"></div>'+
      '<div id="star0.active" class="star" style="font-size:24px; top:${ parameters.count[1][0] }px; left:${ parameters.count[2][0] }px; position:absolute;">*</div>'+
      '<div id="star1.active" class="star" style="font-size:24px; top:${ parameters.count[1][1] }px; left:${ parameters.count[2][1] }px; position:absolute;">*</div>'+
      '<div id="star2.active" class="star" style="font-size:24px; top:${ parameters.count[1][2] }px; left:${ parameters.count[2][2] }px; position:absolute;">*</div>'+
      '<div id="star3.active" class="star" style="font-size:24px; top:${ parameters.count[1][3] }px; left:${ parameters.count[2][3] }px; position:absolute;">*</div>'+
      '<div id="star4.active" class="star" style="font-size:24px; top:${ parameters.count[1][4] }px; left:${ parameters.count[2][4] }px; position:absolute;">*</div>'+
      '<div id="star5.active" class="star" style="font-size:24px; top:${ parameters.count[1][5] }px; left:${ parameters.count[2][5] }px; position:absolute;">*</div>'+
      "<div id='star6${ (parameters.count[0] >= 7 ? '.active' : '') }' class='star' style='font-size:24px; top:${ parameters.count[1][6] }px; left:${ parameters.count[2][6] }px; position:absolute;'>${ (parameters.count[0] >= 7 ? '*' : '') }</div>"+
      "<div id='star7${ (parameters.count[0] >= 8 ? '.active' : '') }' class='star' style='font-size:24px; top:${ parameters.count[1][7] }px; left:${ parameters.count[2][7] }px; position:absolute;'>${ (parameters.count[0] >= 8 ? '*' : '') }</div>"+
      "<div id='star8${ (parameters.count[0] >= 9 ? '.active' : '') }' class='star' style='font-size:24px; top:${ parameters.count[1][8] }px; left:${ parameters.count[2][8] }px; position:absolute;'>${ (parameters.count[0] >= 9 ? '*' : '') }</div>"+

    '</div>'+
    '</div>'+
    '</div>',
      
      parameters: {
        count: randomStars(pageType='stars'),
      },

      
      events: {
        'keypress':
          function(event){
            possibleNumbers = [6,7,8,9]
            var x = event.key
            if (x == this.parameters.count[0]){
              this.end('All keys pressed')
            } 
            else if (possibleNumbers.includes(parseInt(x)) && x!= this.parameters.count[0]){
              console.log('wrongnum')
              blink(pageType='stars')
            }
          },
    
        }}),


    new lab.html.Screen({
      content: '<div id="instructions2">'+
      "</div>"+

      "<div class='circle-container'>"+

      '<a id="center" class="point"></a>'+
      '<a id="flash" class="point flash"></a>'+
      '<a id="deg0" class="point">${ parameters.place[0] }</a>'+
      '<a id="deg45" class="point">${ parameters.place[1] }</a>'+
      '<a id="deg80" class="point">${ parameters.place[2] }</a>'+
      '<a id="deg120" class="point">${ parameters.place[3] }</a>'+
      '<a id="deg160" class="point">${ parameters.place[4] }</a>'+
      '<a id="deg200" class="point">${ parameters.place[5] }</a>'+
      '<a id="deg240" class="point">${ parameters.place[6] }</a>'+
      '<a id="deg280" class="point">${ parameters.place[7] }</a>'+
      '<a id="deg320" class="point">${ parameters.place[8] }</a>'+

    '</div>'+
    '</div>'+
    '<div id="alphabet" >'+
    '</div>',
      
      parameters: {
        currentLetters195: currentLetters195 = [],
        place: place = alphabetOrder(extraInstr=false),
        answerLetters: answerLetters = [place[5], place[6], place[7]].sort(),
        unsortedLetters: unsortedLetters = [place[5], place[6], place[7]],       
      },
      

      events: {
        'keydown': 
          function(event){
            var x = event.key
            var cent = document.getElementById('center');
            alphPlace = [this.parameters.place[5], this.parameters.place[6], this.parameters.place[7]].sort()
            place1 = alphPlace[0]
            place2 = alphPlace[1]
            place3 = alphPlace[2]
            
            if (x == '?'){
              showAlphabet()
            }
            else if (place.includes(x)){
              if (x == place1 && currentLetters195.length == 0){
                console.log('1')
                currentLetters195.push(x)
                cent.classList.toggle("active");
                document.getElementById('center').innerHTML = place1
              }
              else if (x == place2 && currentLetters195.length == 1){
                console.log('2')
                currentLetters195.push(x)
                document.getElementById('center').innerHTML = place1 + place2
              }
              else if (x == place3 && currentLetters195.length == 2){
                console.log('3')
                cent.classList.remove("active");
                this.end('All keys pressed') 
              }
              else if (this.parameters.place.includes(x)){
                console.log('4')
                cent.classList.remove("active");
                currentLetters195 = []
                document.getElementById('center').innerHTML = ''
                blink()
              }
          }
        },

        'keyup':
          function(event){
            var x = event.key
            if (x == '?'){
              hideAlphabet(false)
            }
            
          }},
    
        }),
    new lab.html.Screen({
      content: '<div id="instructions2">'+
      "</div>"+

      "<div class='circle-container'>"+

      '<a id="center" class="point"></a>'+
      '<a id="flash" class="point flash"></a>'+
      '<a id="deg0" class="point">${ parameters.place[0] }</a>'+
      '<a id="deg45" class="point">${ parameters.place[1] }</a>'+
      '<a id="deg80" class="point">${ parameters.place[2] }</a>'+
      '<a id="deg120" class="point">${ parameters.place[3] }</a>'+
      '<a id="deg160" class="point">${ parameters.place[4] }</a>'+
      '<a id="deg200" class="point">${ parameters.place[5] }</a>'+
      '<a id="deg240" class="point">${ parameters.place[6] }</a>'+
      '<a id="deg280" class="point">${ parameters.place[7] }</a>'+
      '<a id="deg320" class="point">${ parameters.place[8] }</a>'+

    '</div>'+
    '</div>'+
    '<div id="alphabet" >'+
    '</div>',
      
      parameters: {
        currentLetters19: currentLetters19 = [],
        place: place = alphabetOrder(extraInstr=false),
        answerLetters: answerLetters = [place[6], place[7], place[8]].sort(),
        unsortedLetters: unsortedLetters = [place[6], place[7], place[8]],       
      },
      

      events: {
        'keydown': 
          function(event){
            var x = event.key
            var cent = document.getElementById('center');
            alphPlace = [this.parameters.place[6], this.parameters.place[7], this.parameters.place[8]].sort()
            place1 = alphPlace[0]
            place2 = alphPlace[1]
            place3 = alphPlace[2]
            
            if (x == '?'){
              showAlphabet()
            }
            else if (place.includes(x)){
              if (x == place1 && currentLetters19.length == 0){
                console.log('1')
                currentLetters19.push(x)
                cent.classList.toggle("active");
                document.getElementById('center').innerHTML = place1
              }
              else if (x == place2 && currentLetters19.length == 1){
                console.log('2')
                currentLetters19.push(x)
                document.getElementById('center').innerHTML = place1 + place2
              }
              else if (x == place3 && currentLetters19.length == 2){
                console.log('3')
                cent.classList.remove("active");
                this.end('All keys pressed') 
              }
              else if (this.parameters.place.includes(x)){
                console.log('4')
                cent.classList.remove("active");
                currentLetters19 = []
                document.getElementById('center').innerHTML = ''
                blink()
              }
          }
        },

        'keyup':
          function(event){
            var x = event.key
            if (x == '?'){
              hideAlphabet(false)
            }
            
          }},
    
        }),
    new lab.html.Screen({
      content: '<div id="instructions2">'+
      "</div>"+

      "<div class='circle-container'>"+

      '<a id="center" class="point"></a>'+
      '<a id="flash" class="point flash"></a>'+
      '<a id="deg0" class="point">${ parameters.place[0] }</a>'+
      '<a id="deg45" class="point">${ parameters.place[1] }</a>'+
      '<a id="deg80" class="point">${ parameters.place[2] }</a>'+
      '<a id="deg120" class="point">${ parameters.place[3] }</a>'+
      '<a id="deg160" class="point">${ parameters.place[4] }</a>'+
      '<a id="deg200" class="point">${ parameters.place[5] }</a>'+
      '<a id="deg240" class="point">${ parameters.place[6] }</a>'+
      '<a id="deg280" class="point">${ parameters.place[7] }</a>'+
      '<a id="deg320" class="point">${ parameters.place[8] }</a>'+

    '</div>'+
    '</div>'+
    '<div id="alphabet" >'+
    '</div>',
      
      parameters: {
        currentLetters20: currentLetters20 = [],
        place: place = alphabetOrder(extraInstr=false),
        answerLetters: answerLetters = [place[7], place[8], place[0]].sort(),
        unsortedLetters: unsortedLetters = [place[7], place[8], place[0]],       
      },
      

      events: {
        'keydown': 
          function(event){
            var x = event.key
            var cent = document.getElementById('center');
            alphPlace = [this.parameters.place[7], this.parameters.place[8], this.parameters.place[0]].sort()
            place1 = alphPlace[0]
            place2 = alphPlace[1]
            place3 = alphPlace[2]
            
            if (x == '?'){
              showAlphabet()
            }
            else if (place.includes(x)){
              if (x == place1 && currentLetters20.length == 0){
                console.log('1')
                currentLetters20.push(x)
                cent.classList.toggle("active");
                document.getElementById('center').innerHTML = place1
              }
              else if (x == place2 && currentLetters20.length == 1){
                console.log('2')
                currentLetters20.push(x)
                document.getElementById('center').innerHTML = place1 + place2
              }
              else if (x == place3 && currentLetters20.length == 2){
                console.log('3')
                cent.classList.remove("active");
                this.end('All keys pressed') 
              }
              else if (this.parameters.place.includes(x)){
                console.log('4')
                cent.classList.remove("active");
                currentLetters20 = []
                document.getElementById('center').innerHTML = ''
                blink()
              }
          }
        },

        'keyup':
          function(event){
            var x = event.key
            if (x == '?'){
              hideAlphabet(false)
            }
            
          }},
    
        }),
    new lab.html.Screen({
      content: '<div id="instructions2">'+
      "</div>"+

      "<div class='circle-container'>"+

      '<a id="center" class="point"></a>'+
      '<a id="flash" class="point flash"></a>'+
      '<a id="deg0" class="point">${ parameters.place[0] }</a>'+
      '<a id="deg45" class="point">${ parameters.place[1] }</a>'+
      '<a id="deg80" class="point">${ parameters.place[2] }</a>'+
      '<a id="deg120" class="point">${ parameters.place[3] }</a>'+
      '<a id="deg160" class="point">${ parameters.place[4] }</a>'+
      '<a id="deg200" class="point">${ parameters.place[5] }</a>'+
      '<a id="deg240" class="point">${ parameters.place[6] }</a>'+
      '<a id="deg280" class="point">${ parameters.place[7] }</a>'+
      '<a id="deg320" class="point">${ parameters.place[8] }</a>'+

    '</div>'+
    '</div>'+
    '<div id="alphabet" >'+
    '</div>',
      
      parameters: {
        currentLetters21: currentLetters21 = [],
        place: place = alphabetOrder(extraInstr=false),
        answerLetters: answerLetters = [place[8], place[0], place[1]].sort(),
        unsortedLetters: unsortedLetters = [place[8], place[0], place[1]],       
      },
      

      events: {
        'keydown': 
          function(event){
            var x = event.key
            var cent = document.getElementById('center');
            alphPlace = [this.parameters.place[8], this.parameters.place[0], this.parameters.place[1]].sort()
            place1 = alphPlace[0]
            place2 = alphPlace[1]
            place3 = alphPlace[2]
            
            if (x == '?'){
              showAlphabet()
            }
            else if (place.includes(x)){
              if (x == place1 && currentLetters21.length == 0){
                console.log('1')
                currentLetters21.push(x)
                cent.classList.toggle("active");
                document.getElementById('center').innerHTML = place1
              }
              else if (x == place2 && currentLetters21.length == 1){
                console.log('2')
                currentLetters21.push(x)
                document.getElementById('center').innerHTML = place1 + place2
              }
              else if (x == place3 && currentLetters21.length == 2){
                console.log('3')
                cent.classList.remove("active");
                this.end('All keys pressed') 
              }
              else if (this.parameters.place.includes(x)){
                console.log('4')
                cent.classList.remove("active");
                currentLetters21 = []
                document.getElementById('center').innerHTML = ''
                blink()
              }
          }
        },

        'keyup':
          function(event){
            var x = event.key
            if (x == '?'){
              hideAlphabet(false)
            }
            
          }},
    
        }),
    new lab.html.Screen({
      content: '<div id="instructions2">'+
      "</div>"+

      "<div class='circle-container'>"+

      '<a id="center" class="point"></a>'+
      '<a id="flash" class="point flash"></a>'+
      '<a id="deg0" class="point">${ parameters.place[0] }</a>'+
      '<a id="deg45" class="point">${ parameters.place[1] }</a>'+
      '<a id="deg80" class="point">${ parameters.place[2] }</a>'+
      '<a id="deg120" class="point">${ parameters.place[3] }</a>'+
      '<a id="deg160" class="point">${ parameters.place[4] }</a>'+
      '<a id="deg200" class="point">${ parameters.place[5] }</a>'+
      '<a id="deg240" class="point">${ parameters.place[6] }</a>'+
      '<a id="deg280" class="point">${ parameters.place[7] }</a>'+
      '<a id="deg320" class="point">${ parameters.place[8] }</a>'+

    '</div>'+
    '</div>'+
    '<div id="alphabet" >'+
    '</div>',
      
      parameters: {
        currentLetters22: currentLetters22 = [],
        place: place = alphabetOrder(extraInstr=false),
        answerLetters: answerLetters = [place[0], place[1], place[2]].sort(),
        unsortedLetters: unsortedLetters = [place[0], place[1], place[2]],       
      },
      

      events: {
        'keydown': 
          function(event){
            var x = event.key
            var cent = document.getElementById('center');
            alphPlace = [this.parameters.place[0], this.parameters.place[1], this.parameters.place[2]].sort()
            place1 = alphPlace[0]
            place2 = alphPlace[1]
            place3 = alphPlace[2]
            
            if (x == '?'){
              showAlphabet()
            }
            else if (place.includes(x)){
              if (x == place1 && currentLetters22.length == 0){
                console.log('1')
                currentLetters22.push(x)
                cent.classList.toggle("active");
                document.getElementById('center').innerHTML = place1
              }
              else if (x == place2 && currentLetters22.length == 1){
                console.log('2')
                currentLetters22.push(x)
                document.getElementById('center').innerHTML = place1 + place2
              }
              else if (x == place3 && currentLetters22.length == 2){
                console.log('3')
                cent.classList.remove("active");
                this.end('All keys pressed') 
              }
              else if (this.parameters.place.includes(x)){
                console.log('4')
                cent.classList.remove("active");
                currentLetters22 = []
                document.getElementById('center').innerHTML = ''
                blink()
              }
          }
        },

        'keyup':
          function(event){
            var x = event.key
            if (x == '?'){
              hideAlphabet(false)
            }
            
          }},
    
        }),
    new lab.html.Screen({
      content: '<div id="instructions2">'+
      "</div>"+

      "<div class='circle-container'>"+

      '<a id="center" class="point"></a>'+
      '<a id="flash" class="point flash"></a>'+
      '<a id="deg0" class="point">${ parameters.place[0] }</a>'+
      '<a id="deg45" class="point">${ parameters.place[1] }</a>'+
      '<a id="deg80" class="point">${ parameters.place[2] }</a>'+
      '<a id="deg120" class="point">${ parameters.place[3] }</a>'+
      '<a id="deg160" class="point">${ parameters.place[4] }</a>'+
      '<a id="deg200" class="point">${ parameters.place[5] }</a>'+
      '<a id="deg240" class="point">${ parameters.place[6] }</a>'+
      '<a id="deg280" class="point">${ parameters.place[7] }</a>'+
      '<a id="deg320" class="point">${ parameters.place[8] }</a>'+

    '</div>'+
    '</div>'+
    '<div id="alphabet" >'+
    '</div>',
      
      parameters: {
        currentLetters23: currentLetters23 = [],
        place: place = alphabetOrder(extraInstr=false),
        answerLetters: answerLetters = [place[1], place[2], place[3]].sort(),
        unsortedLetters: unsortedLetters = [place[1], place[2], place[3]],       
      },
      

      events: {
        'keydown': 
          function(event){
            var x = event.key
            var cent = document.getElementById('center');
            alphPlace = [this.parameters.place[1], this.parameters.place[2], this.parameters.place[3]].sort()
            place1 = alphPlace[0]
            place2 = alphPlace[1]
            place3 = alphPlace[2]
            
            if (x == '?'){
              showAlphabet()
            }
            else if (place.includes(x)){
              if (x == place1 && currentLetters23.length == 0){
                console.log('1')
                currentLetters23.push(x)
                cent.classList.toggle("active");
                document.getElementById('center').innerHTML = place1
              }
              else if (x == place2 && currentLetters23.length == 1){
                console.log('2')
                currentLetters23.push(x)
                document.getElementById('center').innerHTML = place1 + place2
              }
              else if (x == place3 && currentLetters23.length == 2){
                console.log('3')
                cent.classList.remove("active");
                this.end('All keys pressed') 
              }
              else if (this.parameters.place.includes(x)){
                console.log('4')
                cent.classList.remove("active");
                currentLetters23 = []
                document.getElementById('center').innerHTML = ''
                blink()
              }
          }
        },

        'keyup':
          function(event){
            var x = event.key
            if (x == '?'){
              hideAlphabet(false)
            }
            
          }},
    
        }),
    new lab.html.Screen({
      content: '<div id="instructions2">'+
      "</div>"+

      "<div class='circle-container'>"+

      '<a id="center" class="point"></a>'+
      '<a id="flash" class="point flash"></a>'+
      '<a id="deg0" class="point">${ parameters.place[0] }</a>'+
      '<a id="deg45" class="point">${ parameters.place[1] }</a>'+
      '<a id="deg80" class="point">${ parameters.place[2] }</a>'+
      '<a id="deg120" class="point">${ parameters.place[3] }</a>'+
      '<a id="deg160" class="point">${ parameters.place[4] }</a>'+
      '<a id="deg200" class="point">${ parameters.place[5] }</a>'+
      '<a id="deg240" class="point">${ parameters.place[6] }</a>'+
      '<a id="deg280" class="point">${ parameters.place[7] }</a>'+
      '<a id="deg320" class="point">${ parameters.place[8] }</a>'+

    '</div>'+
    '</div>'+
    '<div id="alphabet" >'+
    '</div>',
      
      parameters: {
        currentLetters24: currentLetters24 = [],
        place: place = alphabetOrder(extraInstr=false),
        answerLetters: answerLetters = [place[2], place[3], place[4]].sort(),
        unsortedLetters: unsortedLetters = [place[2], place[3], place[4]],       
      },
      

      events: {
        'keydown': 
          function(event){
            var x = event.key
            var cent = document.getElementById('center');
            alphPlace = [this.parameters.place[2], this.parameters.place[3], this.parameters.place[4]].sort()
            place1 = alphPlace[0]
            place2 = alphPlace[1]
            place3 = alphPlace[2]
            
            if (x == '?'){
              showAlphabet()
            }
            else if (place.includes(x)){
              if (x == place1 && currentLetters24.length == 0){
                console.log('1')
                currentLetters24.push(x)
                cent.classList.toggle("active");
                document.getElementById('center').innerHTML = place1
              }
              else if (x == place2 && currentLetters24.length == 1){
                console.log('2')
                currentLetters24.push(x)
                document.getElementById('center').innerHTML = place1 + place2
              }
              else if (x == place3 && currentLetters24.length == 2){
                console.log('3')
                cent.classList.remove("active");
                this.end('All keys pressed') 
              }
              else if (this.parameters.place.includes(x)){
                console.log('4')
                cent.classList.remove("active");
                currentLetters24 = []
                document.getElementById('center').innerHTML = ''
                blink()
              }
          }
        },

        'keyup':
          function(event){
            var x = event.key
            if (x == '?'){
              hideAlphabet(false)
            }
            
          }},
    
        }),


  new lab.html.Screen({
      content: 

      '<div id="instructions2">'+
          "</div>"+

      "<div class='circle-container'>"+

      '<div id="starFlash" class="star starFlash"></div>'+
      '<div id="star0.active" class="star" style="font-size:24px; top:${ parameters.count[1][0] }px; left:${ parameters.count[2][0] }px; position:absolute;">*</div>'+
      '<div id="star1.active" class="star" style="font-size:24px; top:${ parameters.count[1][1] }px; left:${ parameters.count[2][1] }px; position:absolute;">*</div>'+
      '<div id="star2.active" class="star" style="font-size:24px; top:${ parameters.count[1][2] }px; left:${ parameters.count[2][2] }px; position:absolute;">*</div>'+
      '<div id="star3.active" class="star" style="font-size:24px; top:${ parameters.count[1][3] }px; left:${ parameters.count[2][3] }px; position:absolute;">*</div>'+
      '<div id="star4.active" class="star" style="font-size:24px; top:${ parameters.count[1][4] }px; left:${ parameters.count[2][4] }px; position:absolute;">*</div>'+
      '<div id="star5.active" class="star" style="font-size:24px; top:${ parameters.count[1][5] }px; left:${ parameters.count[2][5] }px; position:absolute;">*</div>'+
      "<div id='star6${ (parameters.count[0] >= 7 ? '.active' : '') }' class='star' style='font-size:24px; top:${ parameters.count[1][6] }px; left:${ parameters.count[2][6] }px; position:absolute;'>${ (parameters.count[0] >= 7 ? '*' : '') }</div>"+
      "<div id='star7${ (parameters.count[0] >= 8 ? '.active' : '') }' class='star' style='font-size:24px; top:${ parameters.count[1][7] }px; left:${ parameters.count[2][7] }px; position:absolute;'>${ (parameters.count[0] >= 8 ? '*' : '') }</div>"+
      "<div id='star8${ (parameters.count[0] >= 9 ? '.active' : '') }' class='star' style='font-size:24px; top:${ parameters.count[1][8] }px; left:${ parameters.count[2][8] }px; position:absolute;'>${ (parameters.count[0] >= 9 ? '*' : '') }</div>"+

    '</div>'+
    '</div>'+
    '</div>',
      
      parameters: {
        count: randomStars(pageType='stars'),
      },

      
      events: {
        'keypress':
          function(event){
            possibleNumbers = [6,7,8,9]
            var x = event.key
            if (x == this.parameters.count[0]){
              this.end('All keys pressed')
            } 
            else if (possibleNumbers.includes(parseInt(x)) && x!= this.parameters.count[0]){
              console.log('wrongnum')
              blink(pageType='stars')
            }
          },
    
        }}),
  new lab.html.Screen({
    content: 

    '<div id="instructions2">'+
        "</div>"+

    "<div class='circle-container'>"+

    '<div id="starFlash" class="star starFlash"></div>'+
    '<div id="star0.active" class="star" style="font-size:24px; top:${ parameters.count[1][0] }px; left:${ parameters.count[2][0] }px; position:absolute;">*</div>'+
    '<div id="star1.active" class="star" style="font-size:24px; top:${ parameters.count[1][1] }px; left:${ parameters.count[2][1] }px; position:absolute;">*</div>'+
    '<div id="star2.active" class="star" style="font-size:24px; top:${ parameters.count[1][2] }px; left:${ parameters.count[2][2] }px; position:absolute;">*</div>'+
    '<div id="star3.active" class="star" style="font-size:24px; top:${ parameters.count[1][3] }px; left:${ parameters.count[2][3] }px; position:absolute;">*</div>'+
    '<div id="star4.active" class="star" style="font-size:24px; top:${ parameters.count[1][4] }px; left:${ parameters.count[2][4] }px; position:absolute;">*</div>'+
    '<div id="star5.active" class="star" style="font-size:24px; top:${ parameters.count[1][5] }px; left:${ parameters.count[2][5] }px; position:absolute;">*</div>'+
    "<div id='star6${ (parameters.count[0] >= 7 ? '.active' : '') }' class='star' style='font-size:24px; top:${ parameters.count[1][6] }px; left:${ parameters.count[2][6] }px; position:absolute;'>${ (parameters.count[0] >= 7 ? '*' : '') }</div>"+
    "<div id='star7${ (parameters.count[0] >= 8 ? '.active' : '') }' class='star' style='font-size:24px; top:${ parameters.count[1][7] }px; left:${ parameters.count[2][7] }px; position:absolute;'>${ (parameters.count[0] >= 8 ? '*' : '') }</div>"+
    "<div id='star8${ (parameters.count[0] >= 9 ? '.active' : '') }' class='star' style='font-size:24px; top:${ parameters.count[1][8] }px; left:${ parameters.count[2][8] }px; position:absolute;'>${ (parameters.count[0] >= 9 ? '*' : '') }</div>"+

  '</div>'+
  '</div>'+
  '</div>',
    
    parameters: {
      count: randomStars(pageType='stars'),
    },

    
    events: {
      'keypress':
        function(event){
          possibleNumbers = [6,7,8,9]
          var x = event.key
          if (x == this.parameters.count[0]){
            this.end('All keys pressed')
          } 
          else if (possibleNumbers.includes(parseInt(x)) && x!= this.parameters.count[0]){
            console.log('wrongnum')
            blink(pageType='stars')
          }
        },

      }}),
  new lab.html.Screen({
    content: 

    '<div id="instructions2">'+
        "</div>"+

    "<div class='circle-container'>"+

    '<div id="starFlash" class="star starFlash"></div>'+
    '<div id="star0.active" class="star" style="font-size:24px; top:${ parameters.count[1][0] }px; left:${ parameters.count[2][0] }px; position:absolute;">*</div>'+
    '<div id="star1.active" class="star" style="font-size:24px; top:${ parameters.count[1][1] }px; left:${ parameters.count[2][1] }px; position:absolute;">*</div>'+
    '<div id="star2.active" class="star" style="font-size:24px; top:${ parameters.count[1][2] }px; left:${ parameters.count[2][2] }px; position:absolute;">*</div>'+
    '<div id="star3.active" class="star" style="font-size:24px; top:${ parameters.count[1][3] }px; left:${ parameters.count[2][3] }px; position:absolute;">*</div>'+
    '<div id="star4.active" class="star" style="font-size:24px; top:${ parameters.count[1][4] }px; left:${ parameters.count[2][4] }px; position:absolute;">*</div>'+
    '<div id="star5.active" class="star" style="font-size:24px; top:${ parameters.count[1][5] }px; left:${ parameters.count[2][5] }px; position:absolute;">*</div>'+
    "<div id='star6${ (parameters.count[0] >= 7 ? '.active' : '') }' class='star' style='font-size:24px; top:${ parameters.count[1][6] }px; left:${ parameters.count[2][6] }px; position:absolute;'>${ (parameters.count[0] >= 7 ? '*' : '') }</div>"+
    "<div id='star7${ (parameters.count[0] >= 8 ? '.active' : '') }' class='star' style='font-size:24px; top:${ parameters.count[1][7] }px; left:${ parameters.count[2][7] }px; position:absolute;'>${ (parameters.count[0] >= 8 ? '*' : '') }</div>"+
    "<div id='star8${ (parameters.count[0] >= 9 ? '.active' : '') }' class='star' style='font-size:24px; top:${ parameters.count[1][8] }px; left:${ parameters.count[2][8] }px; position:absolute;'>${ (parameters.count[0] >= 9 ? '*' : '') }</div>"+

  '</div>'+
  '</div>'+
  '</div>',
    
    parameters: {
      count: randomStars(pageType='stars'),
    },

    
    events: {
      'keypress':
        function(event){
          possibleNumbers = [6,7,8,9]
          var x = event.key
          if (x == this.parameters.count[0]){
            this.end('All keys pressed')
          } 
          else if (possibleNumbers.includes(parseInt(x)) && x!= this.parameters.count[0]){
            console.log('wrongnum')
            blink(pageType='stars')
          }
        },

      }}),
  new lab.html.Screen({
    content: 

    '<div id="instructions2">'+
        "</div>"+

    "<div class='circle-container'>"+

    '<div id="starFlash" class="star starFlash"></div>'+
    '<div id="star0.active" class="star" style="font-size:24px; top:${ parameters.count[1][0] }px; left:${ parameters.count[2][0] }px; position:absolute;">*</div>'+
    '<div id="star1.active" class="star" style="font-size:24px; top:${ parameters.count[1][1] }px; left:${ parameters.count[2][1] }px; position:absolute;">*</div>'+
    '<div id="star2.active" class="star" style="font-size:24px; top:${ parameters.count[1][2] }px; left:${ parameters.count[2][2] }px; position:absolute;">*</div>'+
    '<div id="star3.active" class="star" style="font-size:24px; top:${ parameters.count[1][3] }px; left:${ parameters.count[2][3] }px; position:absolute;">*</div>'+
    '<div id="star4.active" class="star" style="font-size:24px; top:${ parameters.count[1][4] }px; left:${ parameters.count[2][4] }px; position:absolute;">*</div>'+
    '<div id="star5.active" class="star" style="font-size:24px; top:${ parameters.count[1][5] }px; left:${ parameters.count[2][5] }px; position:absolute;">*</div>'+
    "<div id='star6${ (parameters.count[0] >= 7 ? '.active' : '') }' class='star' style='font-size:24px; top:${ parameters.count[1][6] }px; left:${ parameters.count[2][6] }px; position:absolute;'>${ (parameters.count[0] >= 7 ? '*' : '') }</div>"+
    "<div id='star7${ (parameters.count[0] >= 8 ? '.active' : '') }' class='star' style='font-size:24px; top:${ parameters.count[1][7] }px; left:${ parameters.count[2][7] }px; position:absolute;'>${ (parameters.count[0] >= 8 ? '*' : '') }</div>"+
    "<div id='star8${ (parameters.count[0] >= 9 ? '.active' : '') }' class='star' style='font-size:24px; top:${ parameters.count[1][8] }px; left:${ parameters.count[2][8] }px; position:absolute;'>${ (parameters.count[0] >= 9 ? '*' : '') }</div>"+

  '</div>'+
  '</div>'+
  '</div>',
    
    parameters: {
      count: randomStars(pageType='stars'),
    },

    
    events: {
      'keypress':
        function(event){
          possibleNumbers = [6,7,8,9]
          var x = event.key
          if (x == this.parameters.count[0]){
            this.end('All keys pressed')
          } 
          else if (possibleNumbers.includes(parseInt(x)) && x!= this.parameters.count[0]){
            console.log('wrongnum')
            blink(pageType='stars')
          }
        },

      }}),
  new lab.html.Screen({
    content: 

    '<div id="instructions2">'+
        "</div>"+

    "<div class='circle-container'>"+

    '<div id="starFlash" class="star starFlash"></div>'+
    '<div id="star0.active" class="star" style="font-size:24px; top:${ parameters.count[1][0] }px; left:${ parameters.count[2][0] }px; position:absolute;">*</div>'+
    '<div id="star1.active" class="star" style="font-size:24px; top:${ parameters.count[1][1] }px; left:${ parameters.count[2][1] }px; position:absolute;">*</div>'+
    '<div id="star2.active" class="star" style="font-size:24px; top:${ parameters.count[1][2] }px; left:${ parameters.count[2][2] }px; position:absolute;">*</div>'+
    '<div id="star3.active" class="star" style="font-size:24px; top:${ parameters.count[1][3] }px; left:${ parameters.count[2][3] }px; position:absolute;">*</div>'+
    '<div id="star4.active" class="star" style="font-size:24px; top:${ parameters.count[1][4] }px; left:${ parameters.count[2][4] }px; position:absolute;">*</div>'+
    '<div id="star5.active" class="star" style="font-size:24px; top:${ parameters.count[1][5] }px; left:${ parameters.count[2][5] }px; position:absolute;">*</div>'+
    "<div id='star6${ (parameters.count[0] >= 7 ? '.active' : '') }' class='star' style='font-size:24px; top:${ parameters.count[1][6] }px; left:${ parameters.count[2][6] }px; position:absolute;'>${ (parameters.count[0] >= 7 ? '*' : '') }</div>"+
    "<div id='star7${ (parameters.count[0] >= 8 ? '.active' : '') }' class='star' style='font-size:24px; top:${ parameters.count[1][7] }px; left:${ parameters.count[2][7] }px; position:absolute;'>${ (parameters.count[0] >= 8 ? '*' : '') }</div>"+
    "<div id='star8${ (parameters.count[0] >= 9 ? '.active' : '') }' class='star' style='font-size:24px; top:${ parameters.count[1][8] }px; left:${ parameters.count[2][8] }px; position:absolute;'>${ (parameters.count[0] >= 9 ? '*' : '') }</div>"+

  '</div>'+
  '</div>'+
  '</div>',
    
    parameters: {
      count: randomStars(pageType='stars'),
    },

    
    events: {
      'keypress':
        function(event){
          possibleNumbers = [6,7,8,9]
          var x = event.key
          if (x == this.parameters.count[0]){
            this.end('All keys pressed')
          } 
          else if (possibleNumbers.includes(parseInt(x)) && x!= this.parameters.count[0]){
            console.log('wrongnum')
            blink(pageType='stars')
          }
        },

      }}),

  new lab.html.Screen({
    content: '<div id="instructions2">'+
    "</div>"+

    "<div class='circle-container'>"+

    '<a id="center" class="point"></a>'+
    '<a id="flash" class="point flash"></a>'+
    '<a id="deg0" class="point">${ parameters.place[0] }</a>'+
    '<a id="deg45" class="point">${ parameters.place[1] }</a>'+
    '<a id="deg80" class="point">${ parameters.place[2] }</a>'+
    '<a id="deg120" class="point">${ parameters.place[3] }</a>'+
    '<a id="deg160" class="point">${ parameters.place[4] }</a>'+
    '<a id="deg200" class="point">${ parameters.place[5] }</a>'+
    '<a id="deg240" class="point">${ parameters.place[6] }</a>'+
    '<a id="deg280" class="point">${ parameters.place[7] }</a>'+
    '<a id="deg320" class="point">${ parameters.place[8] }</a>'+

  '</div>'+
  '</div>'+
  '<div id="alphabet" >'+
  '</div>',
    
    parameters: {
      currentLetters26: currentLetters26 = [],
      place: place = alphabetOrder(extraInstr=false),
      answerLetters: answerLetters = [place[3], place[4], place[5]].sort(),
      unsortedLetters: unsortedLetters = [place[3], place[4], place[5]],       
    },
    

    events: {
      'keydown': 
        function(event){
          var x = event.key
          var cent = document.getElementById('center');
          alphPlace = [this.parameters.place[3], this.parameters.place[4], this.parameters.place[5]].sort()
          place1 = alphPlace[0]
          place2 = alphPlace[1]
          place3 = alphPlace[2]
          
          if (x == '?'){
            showAlphabet()
          }
          else if (place.includes(x)){
            if (x == place1 && currentLetters26.length == 0){
              console.log('1')
              currentLetters26.push(x)
              cent.classList.toggle("active");
              document.getElementById('center').innerHTML = place1
            }
            else if (x == place2 && currentLetters26.length == 1){
              console.log('2')
              currentLetters26.push(x)
              document.getElementById('center').innerHTML = place1 + place2
            }
            else if (x == place3 && currentLetters26.length == 2){
              console.log('3')
              cent.classList.remove("active");
              this.end('All keys pressed') 
            }
            else if (this.parameters.place.includes(x)){
              console.log('4')
              cent.classList.remove("active");
              currentLetters26 = []
              document.getElementById('center').innerHTML = ''
              blink()
            }
        }
      },

      'keyup':
        function(event){
          var x = event.key
          if (x == '?'){
            hideAlphabet(false)
          }
          
        }},
  
      }),
  new lab.html.Screen({
    content: '<div id="instructions2">'+
    "</div>"+

    "<div class='circle-container'>"+

    '<a id="center" class="point"></a>'+
    '<a id="flash" class="point flash"></a>'+
    '<a id="deg0" class="point">${ parameters.place[0] }</a>'+
    '<a id="deg45" class="point">${ parameters.place[1] }</a>'+
    '<a id="deg80" class="point">${ parameters.place[2] }</a>'+
    '<a id="deg120" class="point">${ parameters.place[3] }</a>'+
    '<a id="deg160" class="point">${ parameters.place[4] }</a>'+
    '<a id="deg200" class="point">${ parameters.place[5] }</a>'+
    '<a id="deg240" class="point">${ parameters.place[6] }</a>'+
    '<a id="deg280" class="point">${ parameters.place[7] }</a>'+
    '<a id="deg320" class="point">${ parameters.place[8] }</a>'+

  '</div>'+
  '</div>'+
  '<div id="alphabet" >'+
  '</div>',
    
    parameters: {
      currentLetters18: currentLetters18 = [],
      place: place = alphabetOrder(extraInstr=false),
      answerLetters: answerLetters = [place[4], place[5], place[6]].sort(),
      unsortedLetters: unsortedLetters = [place[4], place[5], place[6]],       
    },
    

    events: {
      'keydown': 
        function(event){
          var x = event.key
          var cent = document.getElementById('center');
          alphPlace = [this.parameters.place[4], this.parameters.place[5], this.parameters.place[6]].sort()
          place1 = alphPlace[0]
          place2 = alphPlace[1]
          place3 = alphPlace[2]
          
          if (x == '?'){
            showAlphabet()
          }
          else if (place.includes(x)){
            if (x == place1 && currentLetters18.length == 0){
              console.log('1')
              currentLetters18.push(x)
              cent.classList.toggle("active");
              document.getElementById('center').innerHTML = place1
            }
            else if (x == place2 && currentLetters18.length == 1){
              console.log('2')
              currentLetters18.push(x)
              document.getElementById('center').innerHTML = place1 + place2
            }
            else if (x == place3 && currentLetters18.length == 2){
              console.log('3')
              cent.classList.remove("active");
              this.end('All keys pressed') 
            }
            else if (this.parameters.place.includes(x)){
              console.log('4')
              cent.classList.remove("active");
              currentLetters18 = []
              document.getElementById('center').innerHTML = ''
              blink()
            }
        }
      },

      'keyup':
        function(event){
          var x = event.key
          if (x == '?'){
            hideAlphabet(false)
          }
          
        }},
  
      }),
  new lab.html.Screen({
    content: '<div id="instructions2">'+
    "</div>"+

    "<div class='circle-container'>"+

    '<a id="center" class="point"></a>'+
    '<a id="flash" class="point flash"></a>'+
    '<a id="deg0" class="point">${ parameters.place[0] }</a>'+
    '<a id="deg45" class="point">${ parameters.place[1] }</a>'+
    '<a id="deg80" class="point">${ parameters.place[2] }</a>'+
    '<a id="deg120" class="point">${ parameters.place[3] }</a>'+
    '<a id="deg160" class="point">${ parameters.place[4] }</a>'+
    '<a id="deg200" class="point">${ parameters.place[5] }</a>'+
    '<a id="deg240" class="point">${ parameters.place[6] }</a>'+
    '<a id="deg280" class="point">${ parameters.place[7] }</a>'+
    '<a id="deg320" class="point">${ parameters.place[8] }</a>'+

  '</div>'+
  '</div>'+
  '<div id="alphabet" >'+
  '</div>',
    
    parameters: {
      currentLetters195: currentLetters195 = [],
      place: place = alphabetOrder(extraInstr=false),
      answerLetters: answerLetters = [place[5], place[6], place[7]].sort(),
      unsortedLetters: unsortedLetters = [place[5], place[6], place[7]],       
    },
    

    events: {
      'keydown': 
        function(event){
          var x = event.key
          var cent = document.getElementById('center');
          alphPlace = [this.parameters.place[5], this.parameters.place[6], this.parameters.place[7]].sort()
          place1 = alphPlace[0]
          place2 = alphPlace[1]
          place3 = alphPlace[2]
          
          if (x == '?'){
            showAlphabet()
          }
          else if (place.includes(x)){
            if (x == place1 && currentLetters195.length == 0){
              console.log('1')
              currentLetters195.push(x)
              cent.classList.toggle("active");
              document.getElementById('center').innerHTML = place1
            }
            else if (x == place2 && currentLetters195.length == 1){
              console.log('2')
              currentLetters195.push(x)
              document.getElementById('center').innerHTML = place1 + place2
            }
            else if (x == place3 && currentLetters195.length == 2){
              console.log('3')
              cent.classList.remove("active");
              this.end('All keys pressed') 
            }
            else if (this.parameters.place.includes(x)){
              console.log('4')
              cent.classList.remove("active");
              currentLetters195 = []
              document.getElementById('center').innerHTML = ''
              blink()
            }
        }
      },

      'keyup':
        function(event){
          var x = event.key
          if (x == '?'){
            hideAlphabet(false)
          }
          
        }},
  
      }),
  new lab.html.Screen({
    content: '<div id="instructions2">'+
    "</div>"+

    "<div class='circle-container'>"+

    '<a id="center" class="point"></a>'+
    '<a id="flash" class="point flash"></a>'+
    '<a id="deg0" class="point">${ parameters.place[0] }</a>'+
    '<a id="deg45" class="point">${ parameters.place[1] }</a>'+
    '<a id="deg80" class="point">${ parameters.place[2] }</a>'+
    '<a id="deg120" class="point">${ parameters.place[3] }</a>'+
    '<a id="deg160" class="point">${ parameters.place[4] }</a>'+
    '<a id="deg200" class="point">${ parameters.place[5] }</a>'+
    '<a id="deg240" class="point">${ parameters.place[6] }</a>'+
    '<a id="deg280" class="point">${ parameters.place[7] }</a>'+
    '<a id="deg320" class="point">${ parameters.place[8] }</a>'+

  '</div>'+
  '</div>'+
  '<div id="alphabet" >'+
  '</div>',
    
    parameters: {
      currentLetters19: currentLetters19 = [],
      place: place = alphabetOrder(extraInstr=false),
      answerLetters: answerLetters = [place[6], place[7], place[8]].sort(),
      unsortedLetters: unsortedLetters = [place[6], place[7], place[8]],       
    },
    

    events: {
      'keydown': 
        function(event){
          var x = event.key
          var cent = document.getElementById('center');
          alphPlace = [this.parameters.place[6], this.parameters.place[7], this.parameters.place[8]].sort()
          place1 = alphPlace[0]
          place2 = alphPlace[1]
          place3 = alphPlace[2]
          
          if (x == '?'){
            showAlphabet()
          }
          else if (place.includes(x)){
            if (x == place1 && currentLetters19.length == 0){
              console.log('1')
              currentLetters19.push(x)
              cent.classList.toggle("active");
              document.getElementById('center').innerHTML = place1
            }
            else if (x == place2 && currentLetters19.length == 1){
              console.log('2')
              currentLetters19.push(x)
              document.getElementById('center').innerHTML = place1 + place2
            }
            else if (x == place3 && currentLetters19.length == 2){
              console.log('3')
              cent.classList.remove("active");
              this.end('All keys pressed') 
            }
            else if (this.parameters.place.includes(x)){
              console.log('4')
              cent.classList.remove("active");
              currentLetters19 = []
              document.getElementById('center').innerHTML = ''
              blink()
            }
        }
      },

      'keyup':
        function(event){
          var x = event.key
          if (x == '?'){
            hideAlphabet(false)
          }
          
        }},
  
      }),

  new lab.html.Screen({
    content: '<div id="instructions2">' +
      "<p>Good! You're done with practice. The rest of this test will be the same,</p>"+
      "<p>except that the computer won't prevent you from making mistakes.</p>"+
      "<br>"+
      "<p>This portion of the test will take about 10 more minutes to finish.</p>"+
      "<br>"+
      "<p>Please work as quickly and as accurately as you can. Move around the</p>"+
      "<p>wheel as you've been doing, and after each interruption shift one position</p>"+
      "<p>clockwise from where you were before the interruption.</p>"+
      '<br>'+
      "<p>If you have any questions, please ask the proctor now. Otherwise press</p>"+
      '<p>Shift-Space to continue.</p>'+
      '</div>'+

    '<div id=furtherInstructions></div>'+

    "<div id='alphabet'>"+
    '</div>',

    events: {
      'keydown': 
        function(event){
          x = event.key
          if (x == ' '){
            this.end('All keys pressed')
          }
        },
      },

}),

  new lab.html.Screen({
    content: '<div id="instructions2">' +
      "<p>Good! You're done with practice. The rest of this test will be the same,</p>"+
      "<p>except that the computer won't prevent you from making mistakes.</p>"+
      "<br>"+
      "<p>This portion of the test will take about 10 more minutes to finish.</p>"+
      "<br>"+
      "<p>Please work as quickly and as accurately as you can. Move around the</p>"+
      "<p>wheel as you've been doing, and after each interruption shift one position</p>"+
      "<p>clockwise from where you were before the interruption.</p>"+
      '<br>'+
      "<p>If you have any questions, please ask the proctor now. Otherwise press</p>"+
      '<p>Shift-Space to continue.</p>'+
      '</div>'+

      '<div id=lastInstruction><p>On the next screen, start with the circled locations and continue from</p>'+
      "<p>there. When you're ready, press Shift-Space to begin.</p></div>"+

      "<div id='alphabet'>"+
      '</div>',

      events: {
        'keydown': 
          function(event){
            x = event.key
            if (x == ' '){
              this.end('All keys pressed')
            }
          },
        },

}),
  ]
  })
  
  
  //   ],
  // })
  // data.Store.download(filetype='csv', filename='data.csv')
  
  study.prepare()
  study.run()
  