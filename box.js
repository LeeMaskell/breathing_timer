let boxStart = document.getElementById("start");

let removeInhale = () =>{
    document.getElementById("inhale").style.display = "none";
}
let displayHold = () =>{
    document.getElementById('hold').style.display = "block";
}
let removeHold = () =>{
    document.getElementById("hold").style.display = "none";
}
let displayExhale = () =>{
    document.getElementById('exhale').style.display = "block";
}
let removeExhale = () =>{
    document.getElementById("exhale").style.display = "none";
}

let breathLogic = () => {
    // console.log('breathlogic');
    document.getElementById('inhale').style.display = "block";
    setTimeout(removeInhale, 4000);
    setTimeout(displayHold, 4000);
    setTimeout(removeHold, 8000);
    setTimeout(displayExhale, 8000);
    setTimeout(removeExhale, 12000);
    setTimeout(displayHold, 12000);
    setTimeout(removeHold, 16000);
};

boxStart.addEventListener('click', function(){
    document.getElementById('ball').classList.add("animate-ball");
    document.getElementById('box').classList.add("animate-color");
    breathLogic();
    const id = setInterval(breathLogic, 16000);
    setTimeout(() => {
        console.log('set times triggered');
        clearInterval(id);
        document.getElementById('ball').classList.remove("animate-ball");
        document.getElementById('box').classList.remove("animate-color");
    }, 16000*4-1);
});

// instructions functionality
let instructions = document.getElementById("instruction-button");

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
