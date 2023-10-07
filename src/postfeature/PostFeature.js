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
                <label htmlFor="emoji">Emoji 1</label>
                <input type="text" id="emoji" value={formData.emoji} onChange={handleChange} required />
                <label htmlFor="name">Emoji Name</label>
                <input type="text" id="name" value={formData.name} onChange={handleChange} required />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default PostFeature