export default class Song {
    constructor(key, value, card) {
        this.element = document.querySelector("." + key);
        this.audio = new Audio(value);
        this.album = document.querySelector("." + card);
    }
}

export function play_song(song) {
    song.element.addEventListener("click", () => {
        if (song.audio.paused) {
            song.audio.play();
            song.element.children[1].classList.add("pausing");
            song.element.children[1].classList.remove("playing");
        } else {
            song.audio.pause();
            song.element.children[1].classList.add("playing");
            song.element.children[1].classList.remove("pausing");
        }
    })
}