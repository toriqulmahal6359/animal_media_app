import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ user }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const HomeRightbarComp = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img src={`${PF}gift.png`} alt="" className="birthdayImg" />
                    <span className="birthdayText"><b>Jane Jones</b> and <b>3 other</b> friends have Birthday Today</span>
                </div>
                <img src={`${PF}ad.png`} alt="" className="rightbarAdvertise"/>
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    { Users.map((u) => (
                        <Online key={u.id} users={u} />
                    ))}
                </ul>
            </>
        );
    };

    const ProfileRightbarComp = () => {
        return (
            <>
                <h4 className="rightbarTitle">User Information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfovalue">{user.city}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfovalue">{user.city}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfovalue">{user.relationship === 1 ? "Single" : user.relationship === 2 ? "Married" : "-"}</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User Followers</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src={`${PF}person/1.jpg`} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Miley Cyrus</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src={`${PF}person/2.jpg`} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Jannifer Aniston</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src={`${PF}person/3.jpg`} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Mila Kunis</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src={`${PF}person/4.jpg`} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Angelina Jolie</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src={`${PF}person/5.jpg`} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Jannet Jackson</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src={`${PF}person/6.jpg`} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Jennifer Lawrence</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src={`${PF}person/7.jpg`} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Tom Cruise</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src={`${PF}person/8.jpg`} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Brad Pitt</span>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                { user ? <ProfileRightbarComp /> : <HomeRightbarComp /> }
            </div>
        </div>
    )
}
