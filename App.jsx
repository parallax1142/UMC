import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import Home from "./components/week3/Home";
import NowPlaying from "./components/week3/NowPlaying";
import Popular from "./components/week3/Popular";
import TopRated from "./components/week3/TopRated";
import UpComing from "./components/week3/UpComing";
import MovieDetail from "./components/week3/MovieDetail";

// 스피너 스타일
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoadingSpinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.2);
  border-left-color: #ffffff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${rotate} 1s infinite linear;
`;

function App() {
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태
  const [isSignedIn, setIsSignedIn] = useState(false); // 로그인 상태 관리

  const Nav = styled.nav`
    background-color: rgb(11, 10, 57);
    display: flex;
    justify-content: space-between;
    padding: 10px;
    margin: 0;
  `;


  const NavItem = styled(Link)`
    color: white;
    text-decoration: none;
    margin: 0;
    padding-right: 20px;

    &:hover {
      transform: scale(1.1);
    }
  `;

  return (
    <div className="App">
      <Router>
        {isLoading && <LoadingSpinner />}
        <Nav>
          <div>
            <NavItem to="/Home">UMC Movie</NavItem>
          </div>
          <div>
            <NavItem to="/" onClick={(e) => {
              e.preventDefault(); // 페이지 이동을 방지
              setIsSignedIn(!isSignedIn);
            }}>
              {isSignedIn ? '로그아웃' : '로그인'}
            </NavItem>
            <NavItem to="/NowPlaying">NowPlaying</NavItem>
            <NavItem to="/Popular">Popular</NavItem>
            <NavItem to="/TopRated">TopRated</NavItem>
            <NavItem to="/UpComing">UpComing</NavItem>
          </div>
        </Nav>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/NowPlaying" element={<NowPlaying />} />
          <Route path="/Popular" element={<Popular />} />
          <Route path="/TopRated" element={<TopRated />} />
          <Route path="/UpComing" element={<UpComing />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
