import React from "react";
import { useEffect, useState } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import StarBorder from "@mui/icons-material/StarBorder";

export default function MenuSubcategory({
  products,
  setProducts,
  subcategory,
  handleClose,
}) {
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const getProductsByCategory = () => {
   
    fetch(
      `http://localhost:8080/stedisa/rest/subcategories/${subcategory.id}/products`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setProducts(result);
          console.log(result);
          handleClose();
        },
        (error) => {
          console.log(error);
          setError(error);
        }
      );
  };

  return (
    <MenuItem onClick={getProductsByCategory}>{subcategory.name}</MenuItem>

    
    
  );
}
