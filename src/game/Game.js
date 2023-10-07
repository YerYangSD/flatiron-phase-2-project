import React, { useState, useEffect } from 'react'
import { v4 as uuid } from "uuid"
import "./game.css"

function Game({ spinReels, activeEmojis, setIsSpinning, isSpinning }) {
    const [reels, setReels] = useState([])

    // console.log("emojis:", emojis)
    // console.log("emojiArray:", emojiArray)
    useEffect(() => {
        if (isSpinning) {
            const spinInterval = setInterval(() => {
                const newReels = activeEmojis.map(() => {
                    const randomIndex = Math.floor(Math.random() * activeEmojis.length)
                    return activeEmojis[randomIndex]
                })
                console.log("newReels:", newReels)
                setReels(newReels)
            }, 50);

            setTimeout(() => {
                clearInterval(spinInterval)
                setIsSpinning(false)
            }, 2000);

            return function cleanUp() {
                clearInterval(spinInterval)
            }
        };
    }, [isSpinning, reels])

    function renderSlot() {
        console.log("activeEmojis:", activeEmojis)
        console.log("reels:", reels)
        if (activeEmojis[0] !== undefined && reels.length === 0) {
            return activeEmojis.map((emojiObj) => (
                <div key={emojiObj.id} className="reel">
                    {emojiObj.emoji}
                </div>
            ))

        }
        else {
            return reels.map((emojiObj) => (
                <div key={uuid()} className="reel">
                    {emojiObj.emoji}
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