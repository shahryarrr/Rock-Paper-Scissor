//GAME RULES
const defaultRules = {
  rock: {
    scissors: true,
    paper: false,
  },
  paper: {
    rock: true,
    scissors: false,
  },
  scissors: {
    paper: true,
    rock: false,
  },
};

//COMPARE PLAYER VS COMPUTER
function compare(choice1, choice2, rules = defaultRules) {
  if (choice1 === choice2) {
    return 'tie';
  } else {
    if (rules[choice1][choice2] === true) {
      return '1';
    } else {
      return '2';
    }
  }
}
// CHOOSE RANDOM FOR COMPUTER
function randomChoice(rules = defaultRules) {
  const options = Object.keys(rules);

  return options[Math.floor(Math.random() * 3)];
}
// GAME RESULT
const computerChoiceDisplay = document.getElementById('computer-choice');
const playerChoiceDisplay = document.getElementById('player-choice');
const computerScoreDisplay = document.getElementById('computer-score');
const playerScoreDisplay = document.getElementById('player-score');
const winnerDisplay = document.getElementById('winner');

let computerScore = 0,
  playerScore = 0;
