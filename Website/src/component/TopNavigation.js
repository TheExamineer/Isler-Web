import React from "react";

const TopNavigation = () => {
  return (
    <div style={styles.topNav}>
      <span style={styles.title}>Add Item</span>
      <div style={styles.buttonsContainer}>
        <button style={styles.button}>Search</button>
        <button style={styles.button}>Notif</button>
        <button style={styles.button}>Kartik</button>
      </div>
    </div>
  );
};

const styles = {
  topNav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px", // Adjust padding for top navigation
    background: "#007bff", // Change background color
    color: "#fff", // Change text color
    width: "100%" // Ensure the top navigation takes full width
  },
  title: {
    fontSize: "20px" // Increase font size for the title
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "10px", // Adjust gap between buttons
    alignItems: "center" // Align buttons vertically in the center
  },
  button: {
    padding: "8px 12px", // Add padding to buttons
    borderWidth: 0,
    borderRadius: "4px", // Add border radius for rounded corners
    backgroundColor: "#fff", // Change background color of buttons
    color: "#007bff", // Change text color of buttons
    cursor: "pointer" // Add pointer cursor on hover
  }
};

export default TopNavigation;
