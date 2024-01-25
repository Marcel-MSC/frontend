import React from "react"
import { useNavigate } from "react-router-dom";

const Frontpage = (props) => {
    const navigate = useNavigate();
    return <div className="mainContainer">
        <div className={"titleContainer"}>
            <div>Blablabla!</div>
        </div>
        <div>
            lets see
        </div>
    </div>
}

export default Frontpage;