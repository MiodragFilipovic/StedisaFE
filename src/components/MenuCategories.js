import React from "react";
import { useEffect, useState } from "react";
import MenuCategory from "./MenuCategory";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function MenuCategories({ products, setProducts }) {
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/stedisa/rest/categories")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCategories(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div> Errors: {error.message} </div>;
  } else if (!isLoaded) {
    return <div> Loading... </div>;
  } else {
    return (
      <Stack direction="row" spacing={0.2}>
        {categories.map((category) => {
          return (
            <MenuCategory
              key={category.id}
              category={category}
              products={products}
              setProducts={setProducts}
            ></MenuCategory>
          );
        })}
      </Stack>
    );
  }
}
