"use client";

import { useEffect } from "react";

const Nav = () => {
  function toggleDarkMode() {
    let isDark = document.body.classList.toggle("dark");
    localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
  }

  // On page load, ensure dark mode setting is applied
  useEffect(() => {
    if (localStorage.getItem("darkMode") === "enabled") {
      document.body.classList.add("dark");
    }
  }, []); // Empty dependency array means this runs only once after the initial render

  return <button onClick={toggleDarkMode}>Toggle Dark Mode</button>;
};

export default Nav;
