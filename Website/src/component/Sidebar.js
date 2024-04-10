import React from "react";
import { heightsize, widthsize } from "../constatns/dimension";

const SideBar = () => {
  // Define your buttons here
  const buttons = [
    { id: 1, label: "Button 1" },
    { id: 2, label: "Button 2" },
    { id: 3, label: "Button 3" },
    { id: 4, label: "Button 4" },
    { id: 5, label: "Button 5" },
    { id: 6, label: "Button 6" }
  ];

  const handleClick = (label) => {
    // Handle button click event here
    console.log("Clicked:", label);
  };

  return (
    <div style={styles.sidebar}>
      <div style={styles.logo}>Logo</div>
      {buttons.map((button) => (
        <button
          key={button.id}
          style={styles.button}
          onClick={() => handleClick(button.label)}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

const styles = {
  sidebar: {
    // position: "fixed",
    left: 0,
    top: 0,
    padding: "20px",
    background: "#f0f0f0",
    borderRight: "1px solid #ccc",
    height: heightsize,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: widthsize * 0.1
  },
  logo: {
    marginBottom: "20px", // Adjust margin between logo and buttons
    fontSize: "24px", // Increase font size for the logo
    color: "#333" // Change color for the logo
  },
  button: {
    marginBottom: "10px",
    padding: "10px", // Add padding to buttons
    borderWidth: 0,
    width: "100%",
    fontSize: "16px", // Increase font size for buttons
    backgroundColor: "#007bff", // Change background color for buttons
    color: "#fff", // Change text color for buttons
    cursor: "pointer", // Add pointer cursor on hover
    borderRadius: "4px" // Add border radius for rounded corners
  }
};

export default SideBar;
