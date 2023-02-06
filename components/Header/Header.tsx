import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { AccountDialog } from "../index";
import { styles } from "./styles";
import { AddCircleOutlined, ContentCopyRounded } from "@mui/icons-material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useRouter } from "next/router";
import { useEtherBalance, useEthers } from "usedapp";
import MakeTransactionDialog from "../Sidebar/MakeTransactionDialog/MakeTransactionDialog";
import SideDrawer from "../Sidebar/SideDrawer/SideDrawer";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SwapVerticalCircleIcon from '@mui/icons-material/SwapVerticalCircle';

import {
  useGetWalletName,
  useGetWallets,
  useGetWalletsCount,
} from "../../hooks";




const Header = () => {
  const { library, account } = useEthers();
  const router = useRouter();
  const { id: walletId }: any = router?.query;


  const walletName = useGetWalletName([account?.toString(), +walletId]);
  const totalWallet = useGetWalletsCount([account?.toString()]);
  const walletList = useGetWallets(
    [account?.toString()],
    parseInt(totalWallet)
  );

  const etherBalance = useEtherBalance(walletList?.[+walletId]);
  console.log("library",library);
 
  return (
    // style={{"background":"#2491A6", "background-image": "linear-gradient(to bottom right, red, yellow)"}}
    <header className="header" >
      {/* Logo Section  */ }
      
      <Link href="/welcome">
        <Box sx={styles.logoContainer}>
          <Image
            src="/asset/images/fevm-multisig-wallet.png"
            height={34}
             width={250}
            className="object-cover"
            alt=""
          />
          {/* <Typography variant="h6" sx={styles.name}>
            Multisig Wallet
          </Typography> */}
        </Box>
      </Link>


       <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        p={2}
        spacing={0.5}
      >
 {router.route.includes("dashboard") &&
        walletId &&
        [walletList?.[+walletId]]?.map((wallet: "string") => (
          <Box key={wallet}>
            <Stack direction="row"
        alignItems="center"
        justifyContent="center"
        p={2}
        spacing={2}>
              
              {/* <Box>
                <Typography
                  variant="body1"
                  fontWeight="600"
                  textAlign="center"
                  gutterBottom
                >
                  {walletName}
                </Typography>
                <Typography variant="body2">
                  <Typography variant="caption" fontWeight="bold">
                    {library?.network?.name?.substring(0, 2)}
                    {library?.network?.name?.substring(3, 4)}:
                  </Typography>{" "}
                  {wallet?.slice(0, 6)}
                  ...{wallet?.slice(-4)}
                </Typography>
              </Box> */}
           
              {/* Dashboard */ }
              <DashboardIcon sx={{ fontSize: "16px" }} />
              <Typography
                sx={ styles.addWalletText }
                variant="h6"
                fontSize={"16px"}
                onClick={() =>
                  router.push({
                    pathname: `/dashboard/${wallet}`,
                    query: { id: walletId },
                  })
                }
              >
                Dashboard
              </Typography>

              {/* Addressbook */ }
               <LibraryBooksIcon sx={{ fontSize: "16px" }} />
               
              <Typography
                sx={ styles.addWalletText }
                variant="h6"
                fontSize={"16px"}
                onClick={() =>
                  router.push({
                    pathname: `/addressbook/${wallet}`,
                    query: { id: walletId },
                  })
                }
              >
                Address Book
              </Typography>

              <SwapVerticalCircleIcon sx={{ fontSize: "16px" }} />
            
              {/* Transactions */}
              <Typography
                sx={ styles.addWalletText }
                variant="h6"
                fontSize={"16px"}
                onClick={() =>
                  router.push({
                    pathname: `/dashboard/${wallet}/transactions`,
                    query: { id: walletId },
                  })
                }
              >
                Transactions
              </Typography>
            </Stack>
          </Box>
        ))}

      </Stack>


     

      {/* Account Section */}
      <Box sx={ styles.accountContainer }>




      <SideDrawer walletList={walletList} />



        {/* create a new wallet link */}
        <Link href="/create">
          <Box sx={styles.logoContainer}>
            
          <Stack
            direction="row"
            alignItems="right"
            justifyContent="center"
            p={2}
            spacing={0.5}
          >
            <IconButton
              sx={styles.addButton}
              size="small"
              onClick={() => router.push("/create")}
            >
              <AddCircleOutlined sx={{ fontSize: "16px" }} />
            </IconButton>
                <Typography variant="h6" onClick={ () => router.push( "/create" ) } fontSize={"16px"} sx={ styles.addWalletText } >
                Add Wallet
              </Typography>
                  
          </Stack>
          </Box>
        </Link>
        


        <Image src="/asset/images/metamask.svg" alt="" width={30} height={30} />
        <Stack>
          <Typography variant="body1" color="primary.main" fontWeight="bold">
            MetaMask @
            {library?.network?.name?.substring(0, 1)?.toUpperCase() +
              "" +
              library?.network?.name?.substring(1)}
          </Typography>
          <Stack direction="row" alignItems="center" spacing="8px">
            <Image
              src="/asset/images/avatar.png"
              alt=""
              width={12}
              height={12}
              className="rounded-full object-cover"
            />
            <Typography variant="body1" className="text-xs truncate">
              <Typography variant="caption" fontWeight="bold">
                {library?.network?.name?.substring(0, 2)}
                {library?.network?.name?.substring(3, 4)}:
              </Typography>{" "}
              {account?.slice(0, 6)}
              ...{account?.slice(-4)}
            </Typography>
          </Stack>
        </Stack>

        <AccountDialog />
      </Box>
    </header>
  );
};

export default Header;
