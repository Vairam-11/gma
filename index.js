var randomNumber = Math.floor(Math.random() * 100) + 1;
var attempts = 0;
var timeLeft = 30;
var timerId;
function startTimer(){
    timerId = setInterval(function(){
        timeLeft--;
        document.getElementById('timer').textContent = timeLeft;

        if(timeLeft <= 0){
            clearInterval(timerId);
            document.getElementById('btn').disabled = true;
            display("Time's up! Game Over. The number was " + randomNumber);
        }
    }, 1000);
}
function guessing(msg){
    document.getElementById('msg').textContent=msg;
}
function guessing() {
  const input = document.getElementById("guessInput").value;
  const msg = document.getElementById("msg");
  const correctNumber                                                                                                              = 42;

  if (Number(input) === correctNumber) {
    msg.innerHTML = "<div class='congrats'>🎉 Congratulations! You guessed it right!</div>";
  } else if (Number(input) > correctNumber) {
    msg.innerHTML = "❌ Too high! Try a lower number.";
  } else {
    msg.innerHTML = "❌ Too low! Try a higher number.";
  }
}

