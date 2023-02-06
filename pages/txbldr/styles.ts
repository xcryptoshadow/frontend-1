import { SxProps } from "@mui/material";

interface IStyles {
  stepper: SxProps;
  form: SxProps;
  grow: SxProps;
  label: SxProps;
  divider: SxProps;
  abi_loading: SxProps;
  alert: SxProps;
  btn: SxProps;
  jsonFooter: SxProps;
  box: SxProps;
  card: SxProps;
  
}

export const styles: IStyles = {
  stepper: {
    padding: 0,
  },
  card: {
    
    maxWidth: 600,
   
  },
  form: {
    display: 'flex',
    minWidth: 'initial',
   
  },
  box: {
 
    marginTop:10,
    maxWidth: 600,
    marginLeft: "auto",
    marginRight: "auto",
    "border-radious":"8px"
   
  },
  grow: {
    flexGrow: 1,
  },
  label: {
    marginTop: 4,
    marginLeft: 8
  },
  divider: {
    marginTop: 14,
    marginBottom: 14,
  },
  abi_loading: {
    marginLeft: 8
  },
  alert: {
    marginTop: 8,
  },
  btn: {
    marginRight: 8,
  },
  jsonFooter: {
    padding: 20,
    textAlign: 'center'
  }
};
