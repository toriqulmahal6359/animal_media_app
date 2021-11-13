import axios from "axios";
import { useRef } from "react";
import { useHistory } from "react-router";
import "./register.css";

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const history = useHistory();

    const handleRegister = async(e) => {
        e.preventDefault();
        if(passwordAgain.current.value !== password.current.value){
            passwordAgain.current.setCustomValidity("Password Don't match !!!");
        }else{
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            }
            try{
                const res = await axios.post("/auth/register", user);
                history.push("/login");
            }catch(err){
                console.log(err);
            }
        }
    }

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginIcon">AnimalMedia</h3>
                    <span className="loginDesc">Connects with animal Friends and the world around you on AnimalMedia</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleRegister}>
                        <input type="text" className="loginInput" placeholder="Username" ref={username} required/>
                        <input type="email" className="loginInput" placeholder="Email Address" ref={email} required/>
                        <input type="password" className="loginInput" placeholder="Password" ref={password} minLength="6" required/>
                        <input type="password" className="loginInput" placeholder="Password Again" ref={passwordAgain} required/>
                        <button type="submit" className="loginButton" typr="submit">Sign Up</button>
                        <hr className="loginHr"/>
                        <button className="loginRegisterButton">Log Into Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
