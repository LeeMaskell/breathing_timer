let oneMin = document.getElementById("oneMin");

oneMin.addEventListener('click', function(){
    removeClassRes();
    document.getElementById('resCircle').classList.add("animate-scale60");
    setTimeout(removeClassRes, 60000);
});

let twoMins = document.getElementById("twoMins");

twoMins.addEventListener('click', function(){
    removeClassRes();
    document.getElementById('resCircle').classList.add("animate-scale120");
    setTimeout(removeClassRes, 120000);
});

const removeClassRes = () => {
    document.getElementById('resCircle').classList.remove("animate-scale60");
    document.getElementById('resCircle').classList.remove("animate-scale120");
};

let stopResonant = document.getElementById("stopRes");

stopResonant.addEventListener('click', function(){
    location.reload();
});

let instructions = document.getElementById("instructionRes");

const loadInstructions = () => {
    document.querySelector("section").style.display = "none";
    document.querySelector("div").style.display = "block";
};

instructions.addEventListener('click', loadInstructions);



let removeInstructions = document.getElementById("close");

const closeInstructions = () => {
    document.querySelector("section").style.display = "block";
    document.querySelector("div").style.display = "none";
};

removeInstructions.addEventListener('click', closeInstructions);


