import React, { useState, useEffect } from 'react'
import { v4 as uuid } from "uuid"

function Game({ emojis }) {
    const [reels, setReels] = useState([])
    const [isSpinning, setIsSpinning] = useState(false)
    // console.log("emojis:", emojis)
    const emojiArray = emojis
    // console.log("emojiArray:", emojiArray)
    useEffect(() => {
        if (isSpinning) {
            const spinInterval = setInterval(() => {
                const newReels = emojiArray.map(() => {
                    const randomIndex = Math.floor(Math.random() * emojiArray.length)
                    return emojiArray[randomIndex]
                })
                console.log("newReels:", newReels)
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

    function renderSlot() {
        console.log("reels:", reels)
        if (reels.length === 0) {
            return emojis.map((emoji) => (
                <div key={uuid()} className="reel">
                    {emoji.emoji}
                </div>
            ))

        } else {
            return reels.map((emoji) => (
                <div key={uuid()} className="reel">
                    {emoji.emoji}
                </div>
            ))

        }
    }

    return (
        <div>
            <h1 id="slot-machine">Slot Machine</h1>
            <div className="reels">
                {renderSlot()}
            </div>
            <button onClick={spinReels} disabled={isSpinning}>
                {isSpinning ? "Spinning..." : "Spin"}
            </button>
        </div>
    )
}

export default Game