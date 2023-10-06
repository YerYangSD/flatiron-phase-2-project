import React, { useState } from 'react'

function PostFeature() {
    const [formData, setFormData] = useState({
        emoji1: "",
        emoji1name: "",
        emoji2: "",
        emoji2name: "",
        emoji3: "",
        emoji3name: "",
        emoji4: "",
        emoji4name: "",
        emoji5: "",
        emoji5name: "",
        emoji6: "",
        emoji6name: ""
    })

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
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
            <form onSubmit={handleSubmit}>
                <h1>Add Your Own Emojis to the Slot Machine</h1>
                <label htmlFor="emoji1">Emoji 1</label>
                <input type="text" id="emoji1" value={formData.emoji1} onChange={handleChange} required />
                <label htmlFor="emoji1name">Emoji Name</label>
                <input type="text" id="emoji1name" value={formData.emoji1name} onChange={handleChange} required />
                <label htmlFor="emoji2">Emoji 2</label>
                <input type="text" id="emoji2" value={formData.emoji2} onChange={handleChange} required />
                <label htmlFor="emoji2name">Emoji Name</label>
                <input type="text" id="emoji2name" value={formData.emoji2name} onChange={handleChange} required />
                <label htmlFor="emoji3">Emoji 3</label>
                <input type="text" id="emoji3" value={formData.emoji3} onChange={handleChange} required />
                <label htmlFor="emoji3name">Emoji Name</label>
                <input type="text" id="emoji3name" value={formData.emoji3name} onChange={handleChange} required />
                <label htmlFor="emoji4">Emoji 4</label>
                <input type="text" id="emoji4" value={formData.emoji4} onChange={handleChange} required />
                <label htmlFor="emoji4name">Emoji Name</label>
                <input type="text" id="emoji4name" value={formData.emoji4name} onChange={handleChange} required />
                <label htmlFor="emoji5">Emoji 5</label>
                <input type="text" id="emoji5" value={formData.emoji5} onChange={handleChange} required />
                <label htmlFor="emoji5name">Emoji Name</label>
                <input type="text" id="emoji5name" value={formData.emoji5name} onChange={handleChange} required />
                <label htmlFor="emoji6">Emoji 6</label>
                <input type="text" id="emoji6" value={formData.emoji6} onChange={handleChange} required />
                <label htmlFor="emoji6name">Emoji Name</label>
                <input type="text" id="emoji6name" value={formData.emoji6name} onChange={handleChange} required />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default PostFeature