import React from "react";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuSubcategory from "./MenuSubcategory";
import { color } from "@mui/system";

export default function MenuCategory({ category, products, setProducts }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [subcategories, setSubcategories] = useState([]);
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleHover = (event) => {
    setIsHover(true);
    setIsHover(false);
    setIsHover(true);
    setAnchorEl(event.currentTarget);
    console.log("hover");
  };
  const handleUnHover = (event) => {
    setIsHover(false);
    setAnchorEl(null);
    console.log("unhover");
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    fetch(
      `http://localhost:8080/stedisa/rest/categories/${category.id}/subcategories`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setSubcategories(result);
        },
        (error) => {
          console.log(error);
          setError(error);
        }
      );
  }, [category.id]);

  if (error) {
    return <div> Errors: {error.message} </div>;
  } else if (!isLoaded) {
    return <div> Loading... </div>;
  } else {
    return (
      <div
        onClick={handleClick}
        onMouseOver={handleHover}
        onMouseLeave={handleUnHover}
        style={{
          marginTop: 5,
          marginBottom: 5,
          backgroundColor: isHover && '#30385F',
          borderRadius: isHover && 10,
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
          minWidth: 150,
        }}
      >
        <img
          style={{
            height: 39,
            padding: 10,
            paddingBottom: 0,
            display: "flex",
            justifyContent: "center",
          }}
          src={require("../images/categories/FFFFFF/" + category.id + ".svg")}
          alt="alt"
        />
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={isHover ? "true" : undefined}
          variant="text"
 
 
          style={{ color: "white", fontSize: 12, whiteSpace:"nowrap" }}
        >
          {category.name}
        </Button>
        <div style={{
          position:"absolute",zIndex: 10, top: 82, display: !isHover && "none", color:"black", background: "white",  boxShadow: '1px 2px 9px #000000',
        }}
       
        >
          {subcategories.map((subcategory) => {
            return (
              <div onMouseLeave={handleUnHover}>
              <MenuSubcategory
               key={subcategory.id}
               subcategory={subcategory}
               handleClose={handleClose}
               products={products}
               setProducts={setProducts}
             ></MenuSubcategory>
            </div>
            );
          })}

        </div>
      </div>
    );
  }
}
