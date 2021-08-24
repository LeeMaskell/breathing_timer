let oneMin = document.getElementById("one-min");

oneMin.addEventListener('click', function(){
    removeClassRes();
    document.getElementById('res-circle').classList.add("animate-scale60");
    setTimeout(removeClassRes, 60000);
});

let twoMins = document.getElementById("two-mins");

twoMins.addEventListener('click', function(){
    removeClassRes();
    document.getElementById('res-circle').classList.add("animate-scale120");
    setTimeout(removeClassRes, 120000);
});

const removeClassRes = () => {
    document.getElementById('res-circle').classList.remove("animate-scale60");
    document.getElementById('res-circle').classList.remove("animate-scale120");
};

let stopResonant = document.getElementById("stop-res");

stopResonant.addEventListener('click', function(){
    location.reload();
});

let instructions = document.getElementById("instruction-res");

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


