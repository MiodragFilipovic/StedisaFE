import React from "react";
import { useEffect, useState } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import StarBorder from "@mui/icons-material/StarBorder";

export default function MenuSubcategory({ subcategory, handleClose }) {
  return (
    <MenuItem onClick={handleClose}>{subcategory.name}</MenuItem>
  );
}
