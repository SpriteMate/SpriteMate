$(document).ready(function () {
var intervals = []
var pos = 0; 
var playerDirection; 
var jumping; 
var coinSound = new Audio('audio/coin.wav'); 
var jumpSound = new Audio('audio/jump.wav');
var breakSound = new Audio('audio/break.wav'); 
var coin = true; 
var brick = true;
var score = 0 ; 

var player = {
    
    name: 'lopez',  

  animateSprite :function(direction){
      console.log('position:',pos); 
      var player = document.getElementById('player');
      var cx = player.getContext("2d");
      var img = document.createElement("img");
      img.src = "img/player.png";
      var spriteW = 47.5, spriteH = 60;
      img.addEventListener("load", function() {
        var cycle = 0;
       var transformImg = function() {
            if(pos >= 0){
                          cx.clearRect(0, 0, spriteW, spriteH);
          cx.drawImage(img,
                       cycle * spriteW, 0, spriteW, spriteH,    
                       0, 0, spriteW, spriteH);
          cycle = (cycle + 1) % 8;
                
            var windowWidth = window.innerWidth;
           if(direction === 'right' && pos < windowWidth -70 ){
               pos+=16;
               console.log('moving right =>'); 
           }else if(direction === 'left' && pos != 0){
               pos-=16; 
               console.log('moving left <='); 
           }
           player.style.left = pos + 'px'; 
               if(coin){
                    if(pos > 425){
                   coin = false;
                   console.log('coin picked up *')
                   coinSound.play(); 
                   var container = document.querySelector('.sandbox'); 
                   var elm =  document.getElementById('coin'); 
                   container.removeChild(elm);
                   score++;
                   scoreUpdate(score); 
               }
           }
            }
        }
        var animating = setInterval(transformImg, 120);
          intervals.push(animating); 

      });
} , 

    displayIdle : function(){
      var player = document.getElementById('player'); 
     //turns juming off
        if(jumping){
          player.classList.toggle('jumping'); 
      }
      jumping = false; 
    
      var cx = player.getContext("2d");
      var img = document.createElement("img");
      img.src = "img/player.png";
       var spriteW = 47.5, spriteH = 60;
            img.addEventListener("load", function() {
              cx.clearRect(0, 0, spriteW, spriteH);
              cx.drawImage(img, 381 , 0 , spriteW , spriteH , 0 , 0 , spriteW , spriteH);           
          });
    } , 
     
    flip: function(){
        var player = document.getElementById('player'); 
        player.classList.toggle('flipped');
        
    
    }, 
    
    flipped: false , 
        
    unflip : function(){
        var player = document.getElementById('player'); 
        player.className ='player'; 
    } , 
    
    action: {
        jump: function(){
                jumping = true; 
                jumpSound.play();
                var player  = document.getElementById('player');
                var cx = player.getContext('2d'); 
                var img = document.createElement("img");
                img.src = "img/player.png";
                var spriteW = 47.5, spriteH = 60;
                img.addEventListener("load", function() {
                cx.clearRect(0, 0, spriteW, spriteH);
                cx.drawImage(img, 333 , 0 , spriteW , spriteH , 0 , 0 , spriteW , spriteH);         
              });
                player.classList.toggle('jumping');
                console.log('jumping'); 
                var windowWidth = window.innerWidth;
            
                if(pos >=90 && pos < 144 && jumping){
                       setTimeout(function(){
                            var container = document.querySelector('.sandbox');
                            var brick = document.getElementById('brick'); 
                            container.removeChild(brick); 
                            brick = false; 
                            console.log('brick destroyed');
                            breakSound.play(); 
                            score++;
                           scoreUpdate(score); 
                   } , 150); 
                }
            
                else if(pos > windowWidth - 150 && pos < windowWidth - 100){
                    score++; 
                    scoreUpdate(score);
                    coinSound.play();  
                }
            
        }
    }, 
    

}

var pressed = false; 
document.addEventListener("keypress" , function(event){
    var keycode = event.keyCode; 
    
   if(!pressed){
        if(keycode == '100'){
            if(player.flipped){
                player.unflip();
                player.flipped = false; 
            }
            playerDirection = 'right'; 
            player.animateSprite(playerDirection);
           pressed = true; 
           
       }else if(keycode == '97'){
           if(playerDirection == 'left'){
                player.animateSprite(playerDirection); 
                pressed = true;
           }else{
               playerDirection = 'left'; 
               player.flip(); 
               player.flipped = true; 
               player.animateSprite(playerDirection); 
               pressed = true;
           }
       }
       
       if(keycode == '119'){
           player.action.jump();
           setTimeout(function(){apex=true} , 300); 
       }
   }
    console.log('pressed',keycode); 
})

document.addEventListener('keyup' , function(event) {
    pressed = false; 
   intervals.forEach(function(interval){
       clearInterval(interval); 
   })
   intervals = []; 
    if(jumping){
        setTimeout(player.displayIdle , 350)
    }else{
        player.displayIdle(); 
        console.log('released key'); 
    }
})

function scoreUpdate(score){
        var elm = document.querySelector('.score'); 
           while (elm.hasChildNodes()) {   
            elm.removeChild(elm.firstChild);
       }
        var p = document.createElement('P'); 
        var text = document.createTextNode('Score:'+ score); 
        p.appendChild(text); 
        elm.appendChild(p); 
        console.log('score updated'); 

}

function init(){
    player.displayIdle();
    scoreUpdate(score); 
}

//main call 
init(); 

});//end doc . ready








