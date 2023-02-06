import type { AppProps } from "next/app";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import { Mainnet, DAppProvider, Config, Goerli, Hyperspace } from "usedapp";
import { getDefaultProvider } from "ethers";
import { Toaster } from "react-hot-toast";
import { theme } from "../theme";
import { Layout } from "../components";
import "../styles/globals.css";

const config: Config = {
  readOnlyChainId: Hyperspace.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider("mainnet"),
    [Hyperspace.chainId]: "https://filecoin-hyperspace.chainstacklabs.com/rpc/v0",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <DAppProvider config={config}>
          <Layout>
            <>
              <Component {...pageProps} />
              <Toaster
                toastOptions={{
                  style: {
                    maxWidth: "500px",
                    width: "auto",
                  },
                }}
              />
            </>
          </Layout>
        </DAppProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default MyApp;
