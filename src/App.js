import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import MenuCategories from "./components/MenuCategories";

function App() {
 return(
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <MenuCategories></MenuCategories>
        </Toolbar>
      </AppBar>
    </Box>
  
 );
}

export default App;
