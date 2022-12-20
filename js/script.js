var cues = [
    "Unzip someone’s pants without using your hands.",
    "Change shirts with the co-player across you.",
    "Suck a finger of a co-player across you for 15 seconds.",
    "Get blindfolded. Feel everyone’s bum and guess who it is. Each wrong guess means a shot.",
    "Talk dirty to a co-player across you for 20 seconds with your naughtiest look.",
    "All co-players have to whisper a secret in your ear.",
    'Let a co-player browse your phone for 1 minute.'
];

function search() {
    var searchNum = document.getElementById("input").value.trim();
    if(searchNum < 1 || searchNum > cues.length) {
        var cue = "It's too big or too small";
    } else {
        var cue = cues[searchNum - 1];
    }

    document.getElementById("output").value = cue;
    document.getElementById("output").style.display = "block";
}