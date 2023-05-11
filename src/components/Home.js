import React from "react";
import { StyledHomePage } from "../styled/home.styled";
function Home() {
    return (

        <StyledHomePage>
            <section>
            <div className="home">
                <p></p>
                <img className="img" src={require('../images/study.jpeg')}></img>
            </div>
            </section>
        </StyledHomePage>

    )
}

export default Home