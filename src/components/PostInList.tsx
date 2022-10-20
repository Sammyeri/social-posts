import { useState } from "react";
import Post from "../modules/Post";
import Posts from "./SocialPosts";

interface PostProp{
    post: Post;
    onDelete: () => void;
}

export default function PostInList({post, onDelete}:PostProp){
   
    return(
        <div className="Post">
            <h3>{post.title}</h3>
            <p>{post.thought}</p>
            <button  onClick={onDelete}>Delete</button>
        </div>
    )
}