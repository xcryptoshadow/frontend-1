import { SxProps } from "@mui/material";

interface IStyles {
  logoContainer: SxProps;
  name: SxProps;
  accountContainer: SxProps;
    container: SxProps;
  addButton: SxProps;
  addWalletText: SxProps;
  iconButton: SxProps;
  copyIcon: SxProps;
  balanceText: SxProps;
  actionsButton: SxProps;
}


export const styles: IStyles = {
  logoContainer: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
   
    
  },
  name: { color: "primary.main", fontWeight: "600", ml: 1 },
  accountContainer: { display: "flex", alignItems: "center", gap: 1 },

  addWalletText: { cursor: "pointer" },
  addButton: {
    color: "primary.buttonColor",
    transition: " all .2s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
};
