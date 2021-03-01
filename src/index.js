import "./styles/index.css";
import "./styles/typography.css";

let song;

const createSongDiv = (songName) => {

    /**
     * [ ] Add album art to songDiv
     * [ ] Add now playing logic
     * [ ] MVP style song div
     * [ ] Create quirky (winamp?) style
     */

    const left = document.getElementsByClassName("left")[0];
    /* TODO: Update this if statement
    Right now this is hardcoded to expect the song div is going to be the third element
    Update to only call fetch once, or only append this once.
    */
    if (left.childElementCount === 3) return;

    const div = document.createElement("div");
    div.className = "song-div";
    const p = document.createElement("p");
    p.innerText = songName;

    div.appendChild(p);
    left.appendChild(div);
}

fetch(`http://ws.audioscrobbler.com/2.0?method=user.getrecenttracks&user=crackedteeth&api_key=${process.env.LAST_FM_KEY}&format=json&limit=1`)
    .then(res => res.json())
    .then(data => {
        song = data.recenttracks.track
        if (song.length === 2) {
            createSongDiv(song[0].name);
        } else {
            console.log(song)
        }
    })

