import "./login.css"
import { useContext, useRef } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";

export default function Login() {
    const email = useRef();
    const password = useRef();
    const { user, isFetching, error, dispatch } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        loginCall({ email: email.current.value, password: password.current.value }, dispatch);
    }

    console.log(user);
    return ( 
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginIcon">AnimalMedia</h3>
                    <span className="loginDesc">Connects with animal Friends and the world around you on AnimalMedia</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleLogin}>
                        <input type="email" className="loginInput" placeholder="Email Address" ref={email} required/>
                        <input type="password" className="loginInput" placeholder="Password" minLength="6" ref={password} required/>
                        <button type="submit" className="loginButton" disabled={ isFetching } >{ isFetching ? (<CircularProgress color="white" size="20px" />) : ("Log In") }</button>
                        <span className="loginForgot">Forgotten Password ?</span>
                        <hr className="loginHr"/>
                        <button className="loginRegisterButton" disabled={ isFetching }>{ isFetching ? (<CircularProgress color="white" size="20px" />) : ("Create New Account") }</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
