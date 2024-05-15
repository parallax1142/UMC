import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

import Home from "./components/week3/Home";
import NowPlaying from "./components/week3/NowPlaying";
import Popular from "./components/week3/Popular";
import TopRated from "./components/week3/TopRated";
import UpComing from "./components/week3/UpComing";

function App() {
  const Nav = styled.nav`
    background-color: blue;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    margin: 0;
  `;

  const NavItem = styled(Link)`
    color: white;
    text-decoration: none;
    margin: 0;
    padding-right: 20px
  `;

  return (
    <div className="App">
      <Router>
        <Nav>
          <div>
            <NavItem to="/Home">UMC Movie</NavItem>
          </div>
          <div>
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
