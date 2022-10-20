import React, { FormEvent, useState } from "react"
import Post from "../modules/Post"


interface PostFormProps{
    onSubmit: (title: string, thought:string) => void;
    onClose: () => void;
}

export default function PostForm({onSubmit, onClose}:PostFormProps)  {
    const [newTitle, setNewTitle] = useState("");
    const [newThouhgt, setNewThought] = useState("");


    const onsubmitForm = (e: FormEvent) => {
        e.preventDefault();
        onSubmit(newTitle, newThouhgt);
        setNewTitle("");
        setNewThought("");
    }

    return(
        <div>
            <button onClick={onClose}>Close</button>
            <form onSubmit={onsubmitForm}>
                <label>Title: </label>
                <input value={newTitle} onChange={event => setNewTitle(event.target.value)}></input>
                <label>Thought: </label>
                <input value={newThouhgt} onChange={event => setNewThought(event.target.value)}></input>
                <button type="submit">Add Post</button>
            </form>
        </div>
    )
}