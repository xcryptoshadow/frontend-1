import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEtherBalance, useEthers } from "usedapp";
import { formatEther } from "@ethersproject/units";
import { ShareIcon } from "../../index";
import { AddCircleOutlined, ContentCopyRounded } from "@mui/icons-material";
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import {
  Typography,
  Paper,
  Card,
  CardContent,
  Chip,
  Stack,
  Box,
  Tooltip,
  IconButton,
  Button,
  Grid,
  
} from "@mui/material";
import MakeTransectionDialog from "../../Sidebar/MakeTransactionDialog/MakeTransactionDialog";
import { useGetWalletName } from "../../../hooks";
import { styles } from "./styles";
import { useTheme } from '@mui/material/styles';


interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}
const WalletDetails = ( ) =>
{
    

  const router = useRouter();
  const { walletAddress }: any = router?.query;
  const { id: walletId } = router?.query;

  const { account, library } = useEthers();
  const walletName = useGetWalletName([
    account?.toString(),
    walletId && +walletId,
  ]);
  const etherBalance = useEtherBalance(walletAddress);
 const [value, setValue] = React.useState(0);

  // const handleChange = (event: React.SyntheticEvent, newValue: number) => {
  //   setValue(newValue);
  // };

  const theme = useTheme();
  const [tbvalue, tbsetValue] = React.useState(0);

  const tbhandleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <>
      <Typography variant="h5" fontWeight="bold" my="24px">
        Dashboard
      </Typography>
      


    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
         <Card sx={styles.cardContainer}>
          <CardContent sx={styles.cardContent}>
            <Image
              src="/asset/images/walletAvatar.png"
              width="220"
              height="220"
              alt=""
              className="rounded-full object-cover"
            />
            <Typography variant="body1" fontWeight="bold" mt={1.5} gutterBottom>
              {walletName}
            </Typography>{" "}
            <Typography variant="body1">
              {/* <Typography variant="body1" component="span" fontWeight="bold">
                // {library?.network?.name?.substring(0, 2)}
                // {library?.network?.name?.substring(3, 4)}:
              </Typography>{" "} */}
                { walletAddress?.substring( 0, 35 ) + "..." }
                 

                 <Tooltip title={"Copy to clipboard"} placement="top">
                  <IconButton
                    size="medium"
                    sx={styles.iconButton}
                    onClick={() => {
                      walletAddress && navigator.clipboard.writeText(walletAddress);
                      
                    
                    }}
                  >
                    <ContentCopyRounded  />
                  </IconButton>
                </Tooltip>
               <Tooltip title="View on explore" placement="top">
                  <IconButton
                    size="small"
                    // sx={styles.iconButton}
                    onClick={() => {
                      window.open(
                        `https://${library?.network?.name}.etherscan.io/address/${walletAddress}`,
                        "_blank"
                      );
                    }}
                  >
                    <ShareIcon />
                  </IconButton>
                </Tooltip>
            </Typography>
            <Chip label={library?.network?.name} sx={styles.chip} />
            <Stack alignItems="center" direction="row" mt={ 1.5 }>
              
              
              <Box>
                <Typography
                  variant="body1"
                  color="primary.main"
                  fontSize="14px"
                >
                  Total Balance
                </Typography>
                <Typography variant="h6" color="primary.main">
                  {etherBalance ? formatEther(etherBalance) : 0.0} FIL
                </Typography>
              </Box>

              {/* <Box ml="auto">
                <MakeTransectionDialog walletAddress={walletAddress}>
                  <Button sx={styles.transactionButton}>New Transaction</Button>
                </MakeTransectionDialog>
              </Box> */}
            </Stack>
          </CardContent>
        </Card>
        </Grid>
        <Grid item xs={6}>
         <Card sx={styles.cardContainer}>
            <CardContent sx={ styles.cardContent }>
            
                <Tabs
                  
                  value={value}
                  onChange={tbhandleChange}
                  indicatorColor="secondary"
                  textColor="inherit"
                  variant="fullWidth"
                  aria-label="full width tabs example"
                  centered>
                  
                    <Tab label="Deposite" {...a11yProps(0)} />
                    <Tab label="Withdrow" {...a11yProps(1)} />
                  
                </Tabs>


                  <TabPanel value={value} index={0} dir={theme.direction}>
                  
                <div>
                            Deposit assets into your wallet.


                                <Typography variant="body2" component="p" my={1}>
                                  Select Asset
                                </Typography>
                                <Select fullWidth
                                      
                                      variant="outlined" labelId="SelectAsset" id="select" value="FIL">
                                  <MenuItem value="FIL">FIL</MenuItem>
                                  <MenuItem value="USDT">USDT</MenuItem>
                                </Select>

                              <Box>
                                    <Typography variant="body2" component="p" my={1}>
                                      Amount
                                    </Typography>
                                  <TextField
                                      fullWidth
                                      variant="outlined"
                                      type="number"
                                    
                                      placeholder="Enter an amount*"
                                      InputLabelProps={{ shrink: true }}
                                      InputProps={{
                                        inputProps: { min: 0 },
                                      }}
                                      required
                                      />
                                            

                              </Box>
                            
                          
                         <Stack alignItems="center" direction="row" mt={ 1.5 }>
                            
                            <Box>
                              <Typography
                                variant="body1"
                                color="primary.main"
                                fontSize="14px"
                              >
                                Available  Balance
                              </Typography>
                              <Typography variant="h6" color="primary.main">
                                {etherBalance ? formatEther(etherBalance) : 0.0} FIL
                              </Typography>
                            </Box>

                            <Box ml="auto">
                              <MakeTransectionDialog walletAddress={walletAddress}>
                                <Button sx={styles.transactionButton}>Deposit</Button>
                              </MakeTransectionDialog>
                            </Box>
                          </Stack>
                </div>
              </TabPanel>

                  <TabPanel value={value} index={1} dir={theme.direction}>
                     <div>
                            Withdrow from your wallet.

 <Typography variant="body2" component="p" my={1}>
                  Recipient *
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  type="text"
                  // value={recipientAddress}
                  // onChange={(e) => {
                  //   setRecipientAddress(e.target.value);
                  // }}
                  placeholder="Enter an recipient address*"
                  InputLabelProps={{ shrink: true }}
                  required
                />
                                <Typography variant="body2" component="p" my={1}>
                                  Select Asset
                                </Typography>
                                <Select fullWidth
                                      
                                      variant="outlined" labelId="SelectAsset" id="select" value="ETH">
                                  <MenuItem value="10">FIL</MenuItem>
                                  <MenuItem value="20">USDT</MenuItem>
                                </Select>

                              <Box>
                                    <Typography variant="body2" component="p" my={1}>
                                      Amount
                                    </Typography>
                                  <TextField
                                      fullWidth
                                      variant="outlined"
                                      type="number"
                                    
                                      placeholder="Enter an amount*"
                                      InputLabelProps={{ shrink: true }}
                                      InputProps={{
                                        inputProps: { min: 0 },
                                      }}
                                      required
                                      />
                                            

                              </Box>
                            
                          
                         <Stack alignItems="center" direction="row" mt={ 1.5 }>
                            
                            <Box>
                              <Typography
                                variant="body1"
                                color="primary.main"
                                fontSize="14px"
                              >
                                Available  Balance
                              </Typography>
                              <Typography variant="h6" color="primary.main">
                                {etherBalance ? formatEther(etherBalance) : 0.0} ETH
                              </Typography>
                            </Box>

                            <Box ml="auto">
                              <MakeTransectionDialog walletAddress={walletAddress}>
                                <Button sx={styles.transactionButton}>Deposit</Button>
                              </MakeTransectionDialog>
                            </Box>
                          </Stack>
                </div>
                  </TabPanel>

              
         
              
              
          </CardContent>
        </Card>
        </Grid>
        
      </Grid>

      


    </>
  );
};

export default WalletDetails;
