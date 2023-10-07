import React, { useState } from 'react'
import "./postFeature.css"

function PostFeature({ onAddEmoji }) {
    const [formData, setFormData] = useState({
        emoji: "",
        name: ""
    })

    function handleSubmit(event) {
        event.preventDefault();
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        }
        fetch(" http://localhost:4000/emojis", configObj)
            .then(resp => resp.json())
            .then(newEmojis => {
                onAddEmoji(newEmojis)
            })
    }
    function handleChange(event) {
        const key = event.target.id
        setFormData({
            ...formData,
            [key]: event.target.value
        })
    }

    return (
        <div>
            <form id="add-emoji-form" onSubmit={handleSubmit}>
                <h1>Add Your Own Emojis to the Slot Machine</h1>
                <p>Copy and paste an emoji and give it a name. After clicking the add button, go back to the slot machine and click spin. May required spinning multiple times to see the newly added emoji. <a href="https://emojipedia.org/" target="blank">Emojipedia</a> is a link you can use to copy and add emojis to the slot machine.</p>
                <p>Note: Do not include URL image or text in the emoji input when adding.</p>
                <div id="inputs-button">
                    <label htmlFor="emoji">Emoji:</label>
                    <input type="text" id="emoji" value={formData.emoji} onChange={handleChange} required />
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={formData.name} onChange={handleChange} required />
                    <button type="submit">Add</button>
                </div>
            </form>
        </div>
    )
}

export default PostFeature