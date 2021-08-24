// timing function for first set of 30 breaths
let startWim = document.getElementById('start');

const removeClassWim = () => {
    document.getElementById('wim-circle1').classList.remove("animate-scale30");
}
let count = 0;
let inhaleTimer = () => {
    count= count+1;
    if (count >30){
        clearInterval(counter);
        document.getElementById("wim-div").style.display = "none";
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
    document.getElementById('long-timer').innerHTML = count2;
}
let exhale = () => {
    document.getElementById("long-hold").style.display = "block";
}
let hold = () => {
    setInterval(exhaleHold, 1000);
}

// timing function for 'inhale and hold' - 15 secs
let shortHold = () => {
    document.getElementById("long-hold").style.display = "none";
    document.getElementById("long-timer").style.display = "none";
    document.getElementById("short-hold").style.display = "grid";
    document.getElementById("last-inhale").style.display = "block";
    document.getElementById('wim-circle2').classList.add("animate-scale15");
    setInterval(inhaleHoldTimer, 1000);
}
let count3 = 0;
let inhaleHoldTimer = () => {
    count3= count3+1;
    if (count3 > 15){
        clearInterval(counter3);
        return;
    }
    document.getElementById('inhale-hold-timer').innerHTML = count3;
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
    document.getElementById('wim-circle1').classList.add("animate-scale30");
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
    document.getElementById("instruction-div").style.display = "block";
};

instructions.addEventListener('click', loadInstructions);



let removeInstructions = document.getElementById("close");

const closeInstructions = () => {
    document.querySelector("section").style.display = "block";
    document.getElementById("instruction-div").style.display = "none";
};

removeInstructions.addEventListener('click', closeInstructions);
