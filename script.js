const storyElement = document.getElementById("story");
const choicesElement = document.getElementById("choices");

const story = {
  start: {
    text: "You are in a dark forest. You see two paths ahead.",
        choices: [
        { text: "Take the left path", next: "leftPath" },
      { text: "Take the right path", next: "rightPath" },
    ],
  },
  leftPath: {
    text: "You encounter a wild animal.",
    choices: [
      { text: "Fight the animal", next: "fight" },
      { text: "Run away", next: "run" },
    ],
  },
  rightPath: {
    text: "You find a treasure chest.",
    choices: [
      { text: "Open the chest", next: "openChest" },
      { text: "Leave it and continue", next: "leaveChest" },
    ],
  },
  fight: {
    text: "You fought bravely but got injured. Game Over.",
    choices: [],
  },
  run: {
    text: "You safely escaped. Game Over.",
    choices: [],
  },
  openChest: {
    text: "You found gold! You win!",
    choices: [],
  },
  leaveChest: {
    text: "You continue your journey and get lost. Game Over.",
    choices: [],
  },
};

function displayStoryNode(node) {
  storyElement.innerHTML = node.text;
  choicesElement.innerHTML = "";
  
  node.choices.forEach((choice) => {
    const button = document.createElement("a");
    button.className = "choice";
    button.innerText = choice.text;
    button.href = "#";
    button.onclick = () => {
      displayStoryNode(story[choice.next]);
    };
    choicesElement.appendChild(button);
  });
}

displayStoryNode(story.start);
