import React, {useState} from "react";
import PostInList from "./PostInList";
import Post from "../modules/Post";
import PostForm from "./PostForm";




export default function Posts() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [formDisplay, setFormDisplay] = useState(false);
    const [currentId, setCurrentId] = useState(0);
    
    function handleDelete(id:number) {
        setPosts(prevPosts => [...prevPosts.slice(0, id), ... prevPosts.slice(id + 1)]);
    }

    function onsubmitForm(title: string, thought: string){
        setPosts([...posts, {title: title, thought: thought, id: currentId}]);
        setCurrentId(currentId + 1);
        setFormDisplay(false);
    }

    function closeForm() {
        setFormDisplay(false);
    }

    return(
        <div className="SocialPosts">
            {posts.map((post, id) => <PostInList post={post} onDelete={() => handleDelete(id)}></PostInList>)}
            <button onClick={() => setFormDisplay(true)}>Add New Thought</button>
            {!formDisplay || <PostForm onSubmit = {onsubmitForm} onClose = {closeForm}></PostForm>}
            
        </div>
        
    )
}