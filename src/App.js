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
    <Box sx={{ flexGrow: 1 }} style={{backgroundColor: "grey"}}>
      <AppBar position="static" style={{backgroundColor: "white"}}>
        <Toolbar>
          <MenuCategories
            products={products}
            setProducts={setProducts}
          ></MenuCategories>
        </Toolbar>
      </AppBar>
      <Box style={{display:"flex" , flexWrap: "wrap"}}>
      {products.map((product) => {
        return (
          <Card key={product.id} sx={{ maxWidth: 345 }} style={{margin:15}}>
            <CardMedia
              component="img"
              height="70"
              src={require("././images/products/" +
                product.imageURL.split("/")[4])}
              alt="green iguana"
              sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        );
      })}
      </Box>
      
    </Box>
  );
}

export default App;
