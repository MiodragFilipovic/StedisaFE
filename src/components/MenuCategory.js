import React from "react";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuSubcategory from "./MenuSubcategory";

export default function MenuCategory({ category }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [subcategories, setSubcategories] = useState([]);
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    console.log("leaving");
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
          console.log(result);
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
      <div onMouseOver={(event)=>{handleClick(event)}} onMouseLeave={()=>{handleClose()}}>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          variant="text"
          style={{ color: "white" }}
        >
          {category.name}
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {subcategories.map((subcategory) => {
            return (
              <MenuSubcategory
                subcategory={subcategory}
                handleClose={handleClose}
              ></MenuSubcategory>
            );
          })}
        </Menu>
      </div>
    );
  }
}
