import React from "react"
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

const Home = (props) => {
    const { loggedIn, email } = props
    const navigate = useNavigate();
    const onButtonClick = () => {
        if (loggedIn) {
            localStorage.removeItem("user");
            props.setLoggedIn(false);
        } else {
            navigate("/login");
        }
    }
    return <div className="mainContainer">
        <div className={"titleContainer"}>
            <div>Welcome!</div>
        </div>
        <div>
            This is the home page.
        </div>
        <div className={"buttonContainer"}>
            <Button variant="contained" onClick={onButtonClick} >
                {loggedIn ? "Log out" : "Log in"}
            </Button>
            {/* <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClick}
                value={loggedIn ? "Log out" : "Log in"} /> */}
            {( loggedIn ? <div> Your email address is {email} </div> : <div /> )}
        </div>
    </div>
}

export default Home;