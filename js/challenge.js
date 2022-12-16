

// set timer
const timer = document.getElementById("counter")
let counter = 0
let intervalId = null

function startTimer() {
  intervalId = setInterval(pageTimer, 1000);
}

function stopTimer() {
  clearInterval(intervalId);
  intervalId = null;
}

function pageTimer() {
  counter++;
  timer.innerText = counter;
}

startTimer();

// manually use the counter 
const minusButton = document.getElementById("minus");
minusButton.addEventListener("click", function() {
  counter--;
  timer.innerText = counter;
});

const addButton = document.getElementById("plus");
addButton.addEventListener("click", function() {
  counter++;
  timer.innerText = counter;
});

// like number
const likeButton = document.querySelector("#heart");
const likesList = document.querySelector(".likes");

likeButton.addEventListener("click", function() {
  list.innerText = `${counter} has given you 1 like!`;
});

// pause the counter and disable buttons
const pauseButton = document.getElementById("pause");

function pauseTimer() {
  if (intervalId) {
  
    stopTimer();
    pauseButton.innerText = "Resume";
    disableButtons();
  } else {

    startTimer();
    pauseButton.innerText = "Pause";
    enableButtons();
  }
}

function disableButtons() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach(button => {
    if (button !== pauseButton) {
      button.disabled = true;
    }
  });
}

function enableButtons() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach(button => {
    button.disabled = false;
  });
}

pauseButton.addEventListener("click", pauseTimer);

const restartButton = document.getElementById("restart");
restartButton.addEventListener("click", function() {
  counter = 0;
  timer.innerText = counter;
  enableButtons();
});

//add comment

const commentInput = document.getElementById("comment-input");

commentInput.addEventListener("submit", function(event) {
  event.preventDefault();
  const comment = commentInput.value;
  commentInput.value = "";

  const commentElement = document.createElement("p");
  commentElement.innerText = comment;


  const commentsContainer = document.querySelector("#comment-input");
  commentsContainer.appendChild(commentElement);
});