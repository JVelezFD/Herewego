const storyElement = document.getElementById("story");
const choicesElement = document.getElementById("choices");

const story = {
  start: {
    text: "You and your 7 friends are on a camping trip. Suddenly, you all receive a text alert about an escaped killer in the area.",
    choices: [
      { text: "Stay in the camp", next: "stayInCamp" },
      { text: "Run to the nearest cabin", next: "runToCabin" },
    ],
  },
  stayInCamp: {
    text: "You decide to stay in the camp.",
    choices: [
      { text: "Build a barricade", next: "buildBarricade" },
      { text: "Hide in the tents", next: "hideInTents" },
    ],
  },
  runToCabin: {
    text: "You decide to run to the nearest cabin.",
    choices: [
      { text: "Call for help", next: "callForHelp" },
      { text: "Search the cabin for weapons", next: "searchForWeapons" },
    ],
  },
  buildBarricade: {
    text: "You build a barricade to protect yourselves.",
    choices: [
      { text: "Wait it out", next: "waitItOut" },
      { text: "Try to escape through the forest", next: "forestEscape" },
    ],
  },
  hideInTents: {
    text: "You hide in the tents, hoping the killer won't find you.",
    choices: [
      { text: "Stay quiet", next: "stayQuiet" },
      { text: "Distract the killer", next: "distractKiller" },
    ],
  },
  callForHelp: {
    text: "You call for help.",
    choices: [
      { text: "Wait for help", next: "waitForHelp" },
      { text: "Try to make a run for it", next: "makeARun" },
    ],
  },
  searchForWeapons: {
    text: "You search the cabin for weapons.",
    choices: [
      { text: "Fight the killer", next: "fightKiller" },
      { text: "Escape through the backdoor", next: "backdoorEscape" },
    ],
  },
  // Branches for Stay in Camp
  waitItOut: {
    text: "You wait it out, but the killer finds you. Everyone dies.",
    choices: [],
  },
  forestEscape: {
    text: "You try to escape through the forest.",
    choices: [
      { text: "Escape solo", next: "escapeSolo" },
      { text: "Escape with a few friends", next: "escapeFewFriends" },
      { text: "Escape with all friends", next: "escapeAllFriends" },
    ],
  },
  stayQuiet: {
    text: "You stay quiet and the killer passes by. You survive for now.",
    choices: [
      { text: "Try to escape now", next: "forestEscape" },
      { text: "Stay hidden", next: "stayHidden" },
    ],
  },
  distractKiller: {
    text: "You distract the killer, but he catches up to you. Only your friends escape, you die.",
    choices: [],
  },
  // Branches for Run to Cabin
  waitForHelp: {
    text: "You wait for help but it never comes. The killer finds you. Everyone dies.",
    choices: [],
  },
  makeARun: {
    text: "You make a run for it and manage to escape with a few friends.",
    choices: [],
  },
  fightKiller: {
    text: "You fight the killer bravely but lose. Everyone dies.",
    choices: [],
  },
  backdoorEscape: {
    text: "You escape through the backdoor and manage to survive.",
    choices: [
      { text: "Escape solo", next: "escapeSolo" },
      { text: "Escape with a few friends", next: "escapeFewFriends" },
      { text: "Escape with all friends", next: "escapeAllFriends" },
    ],
  },
  // Endings
  escapeSolo: {
    text: "You escape the forest alone. You survived, but you couldn't save your friends.",
    choices: [],
  },
  escapeFewFriends: {
    text: "You escape the forest with a few of your friends. You managed to save some of them.",
    choices: [],
  },
  escapeAllFriends: {
    text: "You escape the forest with all of your friends. Everyone is safe thanks to you.",
    choices: [],
  },
  stayHidden: {
    text: "You stay hidden, and eventually help arrives. You and your friends are safe.",
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
    button.onclick = (event) => {
      event.preventDefault(); // Prevent the default action of the anchor element
      displayStoryNode(story[choice.next]);
    };
    choicesElement.appendChild(button);
  });
}

displayStoryNode(story.start);
