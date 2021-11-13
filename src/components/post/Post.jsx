import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { format } from "timeago.js";

export default function Post({ post }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);

    const [heart, setHeart] = useState(post.hearts.length);
    const [isHeart, setIsHeart] = useState(false);

    const [users, setUser] = useState([]);

    const likeHandler = () => {
        setLike(isLiked ? like-1 : like+1);
        setIsLiked(!isLiked);
    }

    const heartHandler = () => {
        setHeart(isHeart ? heart-1 : heart+1);
        setIsHeart(!isHeart);
    }

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?userId=${post.userId}`);
            setUser(res.data);
        }
        fetchUser();
    }, [post.userId]);

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`profile/${users.username}`}>
                            <img src={PF+users.profilePicture || PF+"person/no_avatar.png"} alt="" className="postProfileImg"/>
                        </Link>
                        <span className="postUsername">{users.username}</span>&bull;
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={PF+post.image} alt="" className="postImg"/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <div className="postLike">
                            <img src={`${PF}like.png`} alt="" className="likeIcon" onClick={likeHandler} />
                            <span src="likeCounter">{like}</span>
                        </div>
                        <div className="postHeart">
                            <img src={`${PF}heart.png`} alt="" className="heartIcon" onClick={heartHandler}/>
                            <span src="heartCounter">{heart}</span>
                        </div>
                    </div>
                    <div className="postBottomRight">
                        <span className="postComments">{post.comments} Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
