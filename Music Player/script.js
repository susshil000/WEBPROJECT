let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let current = document.getElementById("current");
let duration = document.getElementById("duration");
let volumeSlider = document.getElementById("volume");
let shuffleBtn = document.getElementById("shuffleBtn");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");
let repeatBtn = document.getElementById("repeatBtn");
let shuffleMode = 0;

song.volume = 0.5;


function formatTime(time){

    let mins = Math.floor(time / 60);

    let secs = Math.floor(time % 60);

    if(secs < 10){
        secs = "0" + secs;
    }

    return mins + ":" + secs;
}

song.addEventListener("loadeddata", () => {

    progress.max = Math.floor(song.duration);

    duration.innerHTML = formatTime(song.duration);

});
function playPause(){

    if(ctrlIcon.classList.contains("fa-pause")){

        song.pause();

        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");

    }else{

        song.play();

        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    }
}

document.querySelector(".main").addEventListener("click", playPause);

song.addEventListener("timeupdate", () => {

    progress.value = Math.floor(song.currentTime);

    current.innerHTML = formatTime(song.currentTime);

});

progress.addEventListener("input", () => {

    song.currentTime = progress.value;

});

volumeSlider.addEventListener("input", () => {

    song.volume = parseFloat(volumeSlider.value) / 100;
});
prevBtn.addEventListener("click", () => {
    song.currentTime -= 10;
});

nextBtn.addEventListener("click", () => {
    song.currentTime += 10;
}); 
repeatBtn.addEventListener("click", () => {
    song.currentTime = 0;
    song.play();
    
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
        repeatBtn.style.color = "#8b5cf6";

});

shuffleBtn.addEventListener("click", () => {
    shuffleMode++;
    if (shuffleMode == 1) {
        song.loop = true;
        shuffleBtn.innerHTML = '<i class="fa-solid fa-repeat "></i>';
        shuffleBtn.style.color = "#8b5cf6";
    } else if (shuffleMode == 2 ) {
        song.loop = false;
        shuffleBtn.innerHTML = '<i class="fa-solid fa-shuffle"></i>';
        song.currentTime = Math.floor(Math.random() * song.duration);
        shuffleBtn.style.color = "#ff3b5c";
    } else {
        shuffleMode = 0;
        song.loop = false;
        shuffleBtn.innerHTML = '<i class="fa-solid fa-shuffle"></i>';
        shuffleBtn.style.color = "#8d96a8";
    }
});





song.onended = function(){

    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");

}
