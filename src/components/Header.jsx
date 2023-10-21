const mainNav = () => {
  const mainNavContainer = document.querySelector("#mainNavContainer");
  mainNavContainer.classList.toggle("hide");
};

import React, { useState } from "react";
import "./App.css";

function App() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <>
      <div>
        <header>
          <span onClick={toggleMenu} id="menuIcon">
            <svg
              id="menuIcon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </span>
          <div id="mainNavContainer" className={isMenuVisible ? "active" : ""}>
            <nav className="mainNav">
              <ul className="mainNavList">
                <li className="mainNavList_item">Opcion 1</li>
                <li className="mainNavList_item">Opcion 2</li>
                <li className="mainNavList_item">Opcion 3</li>
                <li className="mainNavList_item">Opcion 4</li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;


<div>
<header>
  <span onClick={mainNav}>
    <svg
      id="menuIcon"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
      />
    </svg>
  </span>
  <div id="mainnavContainer" className="active">
    <nav className="mainNav">
      <ul className="mainNavList">
        <li className="mainNavList_item">Opcion 1</li>
        <li className="mainNavList_item">Opcion 2</li>
        <li className="mainNavList_item">Opcion 3</li>
        <li className="mainNavList_item">Opcion 4</li>
      </ul>
    </nav>
  </div>
</header>
<a href="https://react.dev" target="_blank"></a>
</div>
<h2>Edie</h2>
<div className="card">
<p>
  Edit <code>src/App.jsx</code> and save to test HMR
</p>
</div>
<p className="read-the-docs">
Click on the Vite and React logos to learn more
</p>