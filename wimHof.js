// timing function for first set of 30 breaths
let startWim = document.getElementById('start');

const removeClassWim = () => {
    document.getElementById('wimCircle1').classList.remove("animate-scale30");
}
let count = 0;
let inhaleTimer = () => {
    count= count+1;
    if (count >30){
        clearInterval(counter);
        document.getElementById("wimDiv").style.display = "none";
        return;
    }
    document.getElementById('timer').innerHTML = count;
}
// timing function for 'exhale and hold' - 30 secs
let count2 = 0;
let exhaleHold = () => {
    count2= count2+1;
    if (count2 > 30){
        clearInterval(counter2);
        return;
    }
    document.getElementById('longTimer').innerHTML = count2;
}
let exhale = () => {
    document.getElementById("longHold").style.display = "block";
}
let hold = () => {
    setInterval(exhaleHold, 1000);
}

// timing function for 'inhale and hold' - 15 secs
let shortHold = () => {
    document.getElementById("longHold").style.display = "none";
    document.getElementById("longTimer").style.display = "none";
    document.getElementById("shortHold").style.display = "grid";
    document.getElementById("lastInhale").style.display = "block";
    document.getElementById('wimCircle2').classList.add("animate-scale15");
    setInterval(inhaleHoldTimer, 1000);
}
let count3 = 0;
let inhaleHoldTimer = () => {
    count3= count3+1;
    if (count3 > 15){
        clearInterval(counter3);
        return;
    }
    document.getElementById('inhaleHoldTimer').innerHTML = count3;
}
let end = () => {
    document.querySelector("section").style.display = "none";
    window.location.reload();
}

let counter;
let counter2;
// let counter3;

const threeRounds = () => {
    removeClassWim();
    inhaleTimer();
    counter = setInterval(inhaleTimer, 4000);
    document.getElementById('wimCircle1').classList.add("animate-scale30");
    setTimeout(removeClassWim, 120000);
    setTimeout(exhale, 120000);
    setTimeout(hold, 120000);
    setTimeout(shortHold, 150000);
    setTimeout(end, 165000);
    
}

startWim.addEventListener('click', function(){
    threeRounds();
    
});

// instructions functionality
let instructions = document.getElementById("instruction");

const loadInstructions = () => {
    document.querySelector("section").style.display = "none";
    document.getElementById("instructionDiv").style.display = "block";
};

instructions.addEventListener('click', loadInstructions);



let removeInstructions = document.getElementById("close");

const closeInstructions = () => {
    document.querySelector("section").style.display = "block";
    document.getElementById("instructionDiv").style.display = "none";
};

removeInstructions.addEventListener('click', closeInstructions);
