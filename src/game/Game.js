import React, { useState, useEffect } from 'react'
import { v4 as uuid } from "uuid"
import "./game.css"

function Game({ spinReels, activeEmojis, setIsSpinning, isSpinning }) {
    const [reels, setReels] = useState([])

    useEffect(() => {
        if (isSpinning) {
            const spinInterval = setInterval(() => {
                const newReels = activeEmojis.map(() => {
                    const randomIndex = Math.floor(Math.random() * activeEmojis.length)
                    return activeEmojis[randomIndex]
                })
                setReels(newReels)
            }, 100);

            setTimeout(() => {
                clearInterval(spinInterval)
                setIsSpinning(false)
            }, 2000);

            return function cleanUp() {
                clearInterval(spinInterval)
            }
        };
    }, [isSpinning, reels, activeEmojis, setIsSpinning])

    function renderSlot() {
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
        <div id="slot-machine-container">
            <h1 id="title">🤪🤣😂 Slot Machine 😃😁😅</h1>
            <div id="slot-machine">
                <div className="reels">
                    {renderSlot()}
                </div>
                <button onClick={spinReels} disabled={isSpinning}>
                    {isSpinning ? "Spinning..." : "Spin"}
                </button>
            </div>
        </div>
    )
}

export default Game