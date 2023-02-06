import React from "react";
import { SxProps } from "@mui/material";

interface IStyles {
  menuContainer: React.CSSProperties;
  addressContainer: SxProps;
  copyIcon: SxProps;
  walletIcon: SxProps;
  disconnectButton: SxProps;
  addWalletText: SxProps;
    addButton: SxProps;


}

export const styles: IStyles = {
  menuContainer: {
    width: "280px",
    marginTop: "20px",
    marginLeft: "-20px",
  },
    addButton: {
    color: "primary.buttonColor",
    transition: " all .2s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  addWalletText: { color: "primary.main", fontWeight: "500", ml: 1,     cursor: "pointer" },
  
  copyIcon: { color: "disabled.main", fontSize: "20px" },
  
 
  addressContainer: {
    backgroundColor: "secondary.contrastText",
    borderRadius: "6px",
    p: "5px",
    alignItems: "center",
  },
  walletIcon: { color: "disabled.main" },
  disconnectButton: {
    backgroundColor: "primary.buttonColor",
    color: "primary.contrastText",
    width: "100%",
    "&:hover": {
      backgroundColor: "primary.buttonColor",
    },
  },
};
