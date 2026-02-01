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
      typeText("Hi ra mowa.", () => {
        addButton("Continue", 1);
      });
      break;

    case 1:
      typeText("Do you want to play a small game?", () => {
        addButton("Yes", 2);
        addButton("Yes, nigger", 2);
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
        addButton("Late night music 🎧", 4);
        addButton("Quiet café ☕", 4);
        addButton("Laughing at erripuku things 😂", 4);
      });
      break;

    case 4:
      typeText("Analyzing choices...\nundu ra mowa", () => {
        setTimeout(() => showStep(5), 2000);
      });
      break;

    case 5:
      typeText(
`According to this game,
you’re short💀.

And according to my critical thinking calculations…`,
() => addButton("Continue", 6)
      );
      break;

    case 6:   
      typeText(
`I like you.`,
() => addButton("Continue", 7)
      );
      break;

    case 7:
      typeText(
`I don’t know what happened, or how it happened,
but I think I fell for you.`,
() => addButton("Continue", 8)
      );
      break;

    case 8:
      typeText(
`I've liked you since the beginning of 2025.
I'm not forcing you, I'm not asking for anything,
and I'm not expecting anything from you. I just wanted to let you know that I like you... and by liking you I mean a LOT.`,
() => addButton("Continue", 9)
      );
      break;

    case 9:
      typeText(
`If you feel the same way, you can email me saying "hello".
If you’re confused, you can send "meh".
But if you never liked me or like someone else you can send anything else or just nothing.

Email: rishwanth0205@gmail.com`,
() => addButton("Continue", 10)
      );
      break;

    case 10:
      typeText(
`The next one may sound cringe and it probably is but I really do feel like it.`,
() => addButton("Continue", 11)
      );
      break;

    case 11:
      typeText(
`I never bought any kind of gift for anyone with the sole exception of you.
I want to buy things for you, I want to see you smile, I want to go to movies with you, I want to hang out with you, I want to be with you.
I feel like I would do whatever I can for you.`,
() => addButton("Continue", 12)
      );
      break;

    case 12:
      typeText(
`Take all the time you need. I will be waiting for your response.
Happy Valentine’s Day ❤️`
      );
      break;
  }
}

showStep(0);
