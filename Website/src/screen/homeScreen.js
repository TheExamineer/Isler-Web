import react from "react"
import {useState} from "react"
import {widthsize,heightsize} from "../constatns/dimension"
import SideBar from "../component/Sidebar"
import Body from "../component/Body"


 const HomeScreen = ()=>{


    return(
      <div 
      style={{display:"flex", flexDirection:"row"}}
      >
        <SideBar/>
        <Body/>
        </div>

    )
}

export default HomeScreen