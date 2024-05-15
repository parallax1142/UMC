import React from "react";
import styled from "styled-components";

const Home = () => {
    const Hello = styled.h1`
        width : 100%;
        height : 350px;
        background-color : black;
        color : white;
        margin : 0;
        display: flex;
        justify-content: center;
        align-items: center;
    `

    const searchMovies =styled.div`

    `
    return (
        <div>
            <Hello>환영합니다</Hello>
            <div className="searchMovies">
                <div>Find your movies !</div>
                <input type="text" />
            </div>
        </div>
    )
}

export default Home;