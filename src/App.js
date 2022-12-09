import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import MenuCategories from "./components/MenuCategories";
import { grey } from "@mui/material/colors";

function App() {
  const [products, setProducts] = useState([]);

  return (
    <Box sx={{ flexGrow: 1 }} style={{backgroundColor: "white"}}>
      <AppBar position="static" style={{backgroundColor: "#191D32"}}>
        <Toolbar>
          <MenuCategories
            products={products}
            setProducts={setProducts}
          ></MenuCategories>
        </Toolbar>
      </AppBar>
      
      <Box style={{display:"flex" , flexDirection:"row", justifyContent:"center", flexWrap: "wrap"}}>
      {products.map((product) => {
        return (
          <Card key={product.id} sx={{  width:"20%" }} style={{margin:15, display:"flex", justifyContent:"center",flexDirection:"column", border:0}}>
            <CardMedia
              component="img"
              height="50"
              style={{ display:"flex", justifyContent:"center"}}
              src={require("././images/products/" +
                product.imageURL.split("/")[4])}
              alt="green iguana"
              sx={{ padding: "1em 1em 1em 1em",width:"auto", objectFit: "contain" }}
            />
            <CardContent    style={{ display:"flex", justifyContent:"center"}}>
              <Typography gutterBottom variant="h8" component="div">
                {product.name}
              </Typography>
            </CardContent>
            <CardActions    style={{ display:"flex", justifyContent:"center"}}>
             
              <Button  size="small">Dodaj</Button>
            </CardActions>
          </Card>
        );
      })}
      </Box>
      
    </Box>
  );
}

export default App;
