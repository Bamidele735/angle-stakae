import type { AppProps } from "next/app";
import { useEffect } from "react";
import Head from "next/head";
import { Alveychain } from "@thirdweb-dev/chains";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import "../styles/home.css";
import "../styles/stake.css";
// import "flowbite";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { polygonMumbai } from "wagmi/chains";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import Navbar from "../components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";


// Configure the blockchain providers and chains to use
const { chains, provider } = configureChains(
  [polygonMumbai], // Use the polygonMumbai  test network
  // [publicProvider()] // Use a public provider to connect to the network
  [
    // Use a JSON-RPC provider to connect to the network
    jsonRpcProvider({
      // Check if the chain ID matches the polygonMumbai  test network
      rpc: (chain) => {
        if (chain.id !== polygonMumbai.id) return null;
        return { http: `${chain.rpcUrls.default}` };
      },
    }),
  ]
);

// Get the default wallets for the specified chains
const { connectors } = getDefaultWallets({
  appName: "Angle Warriors", // Specify the name of the app
  chains, // Use the configured chains
});

// Create a Wagmi client to interact with the blockchain
const wagmiClient = createClient({
  autoConnect: true, // Automatically connect to the provider
  connectors, // Use the specified connectors to connect to the chains
  provider, // Use the specified provider to connect to the network
});

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  return (
    <WagmiConfig client={wagmiClient}>
      <ThirdwebProvider 
            activeChain={ Alveychain }
            // clientId="316ac75a2ee3b40ab6438468663b00b7"
      >
        {/* Set up the RainbowKit provider for the app */}
        <RainbowKitProvider
          chains={chains}
          theme={darkTheme({
            accentColor: "#7b3fe4",
            accentColorForeground: "white",
            borderRadius: "small",
            fontStack: "system",
            overlayBlur: "small",
          })}
        >
          {/* Render the specified component with its page props */}
          <Head>
            <meta
              name="description"
              content="Welcome to Angle Warriors, your go-to source for all things Nft Staking."
            />
            <link rel="shortcut icon" href="https://yellow-instant-gazelle-449.mypinata.cloud/ipfs/QmXUBWu5412Agr4Jc2ZjJAnfj5oDdFdAyTaoUfurNUPuLM?_gl=1*1aarsgj*_ga*MTM5OTUzMjUxOS4xNjcwNzYwMTMw*_ga_5RMPXG14TE*MTY5MTg1NDY1OS4xNi4wLjE2OTE4NTQ2ODEuMzguMC4w" />
            <title> Angle Warriors Staking Dapp</title>
          </Head>{" "}
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </RainbowKitProvider>
      </ThirdwebProvider>
    </WagmiConfig>
  );
}

export default MyApp;
