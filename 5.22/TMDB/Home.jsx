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

    const SearchMovies = styled.div`
        height : 1000px;
        background-color : rgb(31, 33, 64);
        text-align : center;
        color : white;
    `

    const FindYourMovies = styled.div`
        font-size : 40px;
        margin-bottom : 50px;
    `

    const SearchBox = styled.input`
        height : 40px;
        width : 500px;
        border-radius : 20px
    `

    return (
        <div>
            <Hello>환영합니다</Hello>
            <SearchMovies>
                <FindYourMovies>Find your movies!</FindYourMovies>
                <SearchBox type="input" />
            </ SearchMovies>
        </div>
    )
}

export default Home;