import Share from "../share/Share";
import Post from "../post/Post";
import "./feed.css";
import { Posts } from "../../dummyData";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Feed({ username }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async ()=> {
            const res = username 
            ? await axios.get("/posts/profile/" + username) 
            : await axios.get("/posts/timeline/616d05e8428f6f4daa3230fd");
            setPosts(res.data);
        }
        fetchPosts();
    }, [username]);
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                { posts.map((p) => (
                    <Post key={p._id} post={p} />
                ))}
                
            </div>
        </div>
    )
}
