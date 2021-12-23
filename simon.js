var gamePattern = [];
var userClickedPattern=[];
var buttonColors=["red", "blue", "green", "yellow"];
var start=false;
var level=0

// if ($(document).keydown(nextSequence))

$(document).keydown(startGame);
 

$('.btn').click(colorChosen)



function startGame(){
    if(!start){
        setTimeout(  nextSequence,300)
        // nextSequence()
        $("#level-title").text('Level '+level)
        start=true
    }
}

function checkAnswer(currentLevel){
    if (gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        // console.log('success');  
        if(gamePattern.length===userClickedPattern.length){
            setTimeout(function (){
                nextSequence();                
            },1000);
            ;
        }      
    }else {
        playSound('wrong');
        animateGameOver();
        startOver();
        // $(document).keydown(startGame);
    };
}

function nextSequence(){
    userClickedPattern=[]
    level++;
    $("#level-title").text('Level '+level)
    var randomNumber=Math.floor(Math.random()*4);    
    var randomChosenColor=buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $('#'+randomChosenColor).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    animatePress(randomChosenColor);
}


function colorChosen(event){
    var color=this.id;
    userClickedPattern.push(color);
    playSound(color);
    animatePress(color);
    checkAnswer(userClickedPattern.length-1);

}

function playSound(name){
    var fileName='./sounds/'+name+'.mp3';
    var sound = new Audio(fileName);
    sound.play();
}

function animatePress(currentColor){
    $('#'+currentColor).addClass('pressed');
    setTimeout(function (){
        $('#'+currentColor).removeClass('pressed')
    },100);
}

function animateGameOver(){
    $('body').addClass('game-over');
    $("#level-title").text("Game Over, Press Any Key to Restart")
    setTimeout(function (){
        $('body').removeClass('game-over')
    },100);
}

function startOver(){
    level=0;
    gamePattern=[];
    userClickedPattern=[];
    start=false
}



