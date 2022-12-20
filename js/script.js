var cues = [
  "Make out with an imaginary parter",
  "Eat a spoon of any condiment",
  "Enemy gets one minute to browse your phone",
  "Sing / rap a song",
  "Enemy gets to post something on your phone",

  "Exchange clothes with someone",
  "Call a random shop and ask if they sell dildos",
  "Describe in detail your first sexual experience",
  "Yell whatever your opponent wants publicly",
  "Put ice inside your underwear until it melts",

  "Suck a finger of someone the enemy chooses",
  "Let your opponent text 1 sentence to your ex/ex-crush",
  "Dig through the trash and name everything you find",
  "Everyone has to chip in to pay your parking fee ",
  "Have an arm wrestling match with your opponent of choice. If u lose u drink",

  "Knock on a neighbors door. If they answer, ask for salt in English. ",
  "Let the opponent draw anything on your face and you have to keep it for the rest of the game",
  "Let your opponent feed you 3 food items blindfolded",
  "Give everyone access to all photos on your phone",
  "Piggyback one person up and down the apartment",
];

function search() {
  var searchNum = document.getElementById("input").value.trim();
  if (searchNum < 1 || searchNum > cues.length) {
    var cue = "Invalid input, idiot.";
  } else {
    var cue = cues[searchNum - 1];
  }

  document.getElementById("output").value = cue;
  document.getElementById("output").style.display = "block";
}
