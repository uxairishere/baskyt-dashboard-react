import React, {useEffect, useState} from "react";
import Dashboard from "./components/Dashboard";
import Tqm from "./components/Tqm";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <div>
    <Header/>
    <Sidebar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/tqm" element={<Tqm/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
