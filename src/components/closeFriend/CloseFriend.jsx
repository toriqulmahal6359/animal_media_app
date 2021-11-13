import "./closefriend.css";

export default function CloseFriend({friend}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <li className="sidebarFriends">
            <img src={PF + friend.profilePicture} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendname">{friend.username}</span>
        </li>
    )
}
