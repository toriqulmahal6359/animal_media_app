import "./online.css";

export default function Online({ users }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
                <img src={PF + users.profilePicture} alt="" className="rightbarProfileImg"/>
                <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{users.username}</span>
        </li>
    );
}
