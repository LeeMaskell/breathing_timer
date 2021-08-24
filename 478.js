const start = document.getElementById("start"); // assigns the start button to a variable
const stop = document.getElementById("stop"); // assigns the stop button to a variable

// let abort = false;

let counter1; // empty variable declared. These will be updated by the counter loops
let counter2;
let counter3;

// 4 second inhale
let count1 = 0; // set count variable to 0
let inhaleTimer = () => { // loop declared within a function
    count1 = count1 + 1;
    if (count1 > 4) {
        count1 = 0;
        clearInterval(counter1); // clears counter4 once the stopping condition is met
        inhaleTimer2(); // the next timer is called based on the stopping condition of the first timer being met. It must be declared initially to avoid a 1 sec delay
        counter2 = setInterval(inhaleTimer2, 1000); // as the second timer is declared within the if statement, the loop increment is also set here rather than the  main fucntion
        return;
    }
    document.getElementById('timer1').innerHTML = "inhale for  4 seconds... " + count1; // renders text and timer within empty h2 element
}

// 7 second breath hold
let count2 = 0; // second counter (for 7 second breath hold). This is called within the above (inhale478Timer).
let inhaleTimer2 = () => {
    count2 = count2 + 1;
    if (count2 > 7) {
        count2 = 0;
        clearInterval(counter2);
        inhaleTimer3();
        counter3 = setInterval(inhaleTimer3, 1000);
        return;
    }
    document.getElementById('timer2').innerHTML = "hold for 7 seconds... " + count2;
}

// 8 second slow exhale
let count3 = 0; // final timer (8 sec exhale) called within the second counter (inhaleTimer)
let inhaleTimer3 = () => {
    count3 = count3 + 1;
    if (count3 > 8) {
        count3 = 0;
        clearInterval(counter3);
        return;
    }
    document.getElementById('timer3').innerHTML = "slow exhale for 8 seconds..." + count3;
}

const runOnce = () => {
    console.log('run once');
        inhaleTimer();
        counter1 = setInterval(inhaleTimer, 1000); // sets the first loop to increment the counter every 1 second
        document.getElementById('four78-circle').classList.add("animate-scale");
        setTimeout(() => { // the following 3 setTimeouts remove the text and counter once the timer for that section is complete
            document.getElementById("timer1").innerHTML = "";
        }, 4000);
        setTimeout(() => {
            document.getElementById("timer2").innerHTML = "";
        }, 11000);
        setTimeout(() => {
            document.getElementById("timer3").innerHTML = "";
            // document.getElementById('four78Circle').classList.remove("animate-scale478");
        }, 19000);
};

// event handler function that starts the counters and animation
start.addEventListener('click', function () {
    // abort = false;
    runOnce();
    setInterval(runOnce, 19000);
});

stop.addEventListener('click', function () {
    location.reload();
});

// instructions click functionality

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

