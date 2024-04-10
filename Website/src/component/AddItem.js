import React, { useState } from "react";
import axios from 'axios';
import { widthsize, heightsize } from "../constatns/dimension"

const AddItem = () => {
  const [inputValue, setInputValue] = useState("");

  const handleAddItem = async () => {
    try {
        console.log("clicked the add item")
      // Send API request with input value as payload
      const response = await axios.post("http://localhost:8080/api/item/addItem", { name: inputValue,discription:"this is dummy discription of an item any more colums can be added" }, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log("Item added successfully:", response.data);
      // Clear input value after successful addition
      setInputValue("");
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.squareBox}>
        <h3 style={styles.title}>Add Item</h3>
        <p style={styles.description}>
          Get instant pricing, lead times, and DFM feedback for custom
          manufacturing from Isler India CNC Machining, 3D Printing, Sheet
          Cutting, Injection Moulding – all in one place.
        </p>
        <input
          type="text"
          placeholder="Enter item name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={styles.inputBox}
        />
        <button onClick={handleAddItem} style={styles.button}>
          Add Item
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: heightsize * 0.9,
    width: widthsize * 0.9,
  },
  squareBox: {
    width: widthsize * 0.3,
    height: widthsize * 0.3,
    border: "2px dashed #007bff",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    marginBottom: "10px",
    fontSize: "20px",
  },
  description: {
    marginBottom: "20px",
    fontSize: "16px",
    textAlign: "center",
  },
  inputBox: {
    marginBottom: "10px",
    padding: "8px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    width: "100%",
  },
  button: {
    padding: "10px 20px",
    borderWidth: 0,
    borderRadius: "4px",
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer",
  },
};

export default AddItem;
