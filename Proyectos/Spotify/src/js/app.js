import songs from "../assets/audio/*.mp3"
import Player from "./Player";

let keys = Object.keys(songs);

const map = {};

let aux = 1;
for (var key of Object.keys(songs)) {
    map["item-" + aux] = songs[key];
    aux++;
}

console.log(map);
const player = new Player(map);


/*function setSongOn(numCover) {
    console.log(numCover);

    let song;
    let obj;
    switch (numCover) {
        case 1:
            //song =;
            playAudio(song);
            break;
        case 2:
            //song =;
            playAudio(song);
            break;
        case 3:
            //song =;
            playAudio(song);
            break;
        default:
            break;
    }
}

function playAudio() {
    x.play();
}

function pauseAudio() {
    x.pause();
}*/