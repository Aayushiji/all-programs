
import "./App.css";
import Post from "./post"
import Get from "./get"
import { Route, Routes} from "react-router-dom";
import React from "react";
import Home from "./home";

function App(){
  return(
    <>
    <Routes>
      <Route path="/get" element={<Get/>}/>
      <Route path="/" exact element={<Home />}/>
      <Route path="/post" element={<Post/>}/>
      <Route path="/" exact element={<Home />}/>
    </Routes>
    </>

  )
}
export default App;
