const text = document.getElementById("text");
const buttons = document.getElementById("buttons");

function clearButtons() {
  buttons.innerHTML = "";
}

function addButton(label, next) {
  const btn = document.createElement("button");
  btn.innerText = label;
  btn.onclick = () => showStep(next);
  buttons.appendChild(btn);
}

function typeText(message, callback) {
  text.classList.remove("fade");
  text.textContent = ""; 
  let i = 0;

  const interval = setInterval(() => {
    text.textContent += message.charAt(i); 
    i++;
    if (i === message.length) {
      clearInterval(interval);
      text.classList.add("fade");
      if (callback) callback();
    }
  }, 35);
}


function showStep(step) {
  clearButtons();

  switch (step) {

    case 0:
      typeText("Hello, Sneha(Laddu).", () => {
        addButton("Continue", 1);
      });
      break;

    case 1:
      typeText("Do you want to play a small game?", () => {
        addButton("Yes", 2);
        addButton("Yes", 2);
      });
      break;

    case 2:
      typeText("Pick a superpower:", () => {
        addButton("Time travel ⏳", 3);
        addButton("Mind reading 🧠", 3);
        addButton("Knowing when someone likes you 😌", 3);
      });
      break;

    case 3:
      typeText("Pick a vibe:", () => {
        addButton("Late-night music 🎧", 4);
        addButton("Quiet café ☕", 4);
        addButton("Laughing at dumb things 😂", 4);
      });
      break;

    case 4:
      typeText("Analyzing choices...\nRunning emotional algorithm 🤖", () => {
        setTimeout(() => showStep(5), 2000);
      });
      break;

    case 5:
      typeText(
`According to this game,
you’re someone who’s easy to like.

And according to me…

I like you, Sneha.`,
        () => addButton("Continue", 6)
      );
      break;

    case 6:
      typeText(
`I don’t know what happened, or how it happened,
but I think I fell for you.

I’m not forcing you, I’m not asking for anything,
and I’m not expecting anything from you.

If you feel the same way, you can email me saying "hello".
If you’re confused, you can send "meh".

Email: rishwanth0205@gmail.com

Take all the time you need.
Happy Valentine’s Day ❤️`
      );
      break;
  }
}

showStep(0);
