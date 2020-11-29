import React, { useEffect, useState } from 'react'

const MusicCard = () => {
    const [track, setTrack] = useState(false)

    useEffect(() => {
        fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=crackedteeth&api_key=${process.env.GATSBY_LASTFM}&format=json&limit=1`)
            .then(data => data.json())
            .then(data => setTrack(data.recenttracks.track[1]))
    })

    const renderTrack = () => {
        return (
            <div style={{ textAlign: 'center' }}>
                <img src={track.image[3]['#text']} alt={track.album['#text']}></img>
                <p>{track.artist['#text']} - {track.name}</p>
            </div >
        )
    }

    return (
        <>
            {track && renderTrack()}
        </>
    )
}

export default MusicCard