import React, { useState, useEffect } from 'react'
import { v4 as uuid } from "uuid"

function Game() {
    const [emojis, setEmojis] = useState([])
    const [reels, setReels] = useState(["👻", "🕷️", "🍬", "🎃", "🧛", "💀", "👻", "🕷️", "🍬"])
    const [isSpinning, setIsSpinning] = useState(false)

    useEffect(() => {
        fetch("http://localhost:4000/halloweenEmojis")
            .then(resp => resp.json())
            .then(emojiData => setEmojis(emojiData))
    }, [])

    useEffect(() => {
        const emojiArray = emojis.map((emoji) => emoji.emoji);

        if (isSpinning) {
            const spinInterval = setInterval(() => {
                const newReels = reels.map(() => {
                    const randomIndex = Math.floor(Math.random() * emojiArray.length)
                    return emojiArray[randomIndex]
                })
                setReels(newReels)
            }, 1000);

            setTimeout(() => {
                clearInterval(spinInterval)
                setIsSpinning(false)
            }, 1000);

            return function cleanUp() {
                clearInterval(spinInterval)
            }
        };
    }, [isSpinning, reels])

    function spinReels() {
        if (!isSpinning) {
            setIsSpinning(true)
        }
    };

    return (
        <div>
            <h1 id="slot-machine">Slot Machine</h1>
            <div className="reels">
                {reels.map((emoji) => (
                    <div key={uuid()} className="reel">
                        {emoji}
                    </div>
                ))}
            </div>
            <button onClick={spinReels} disabled={isSpinning}>
                {isSpinning ? "Spinning..." : "Spin"}
            </button>
        </div>
    )
}

export default Game