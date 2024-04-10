import React from "react";
import { widthsize, heightsize } from "../constatns/dimension";
import TopNavigation from "./TopNavigation";
import AddItem from "./AddItem";

const Body = () => {
  // Define your buttons here
  return (
    <div style={{width:widthsize*0.85}}>
        <TopNavigation/>
        {/* <div style={{}}> */}
            <AddItem/>
        {/* </div> */}

    </div>
  );
};

const styles = {

};

export default Body;
