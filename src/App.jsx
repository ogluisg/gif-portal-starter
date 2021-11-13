import React, { useEffect, useState } from "react";
import "./App.css";
import twitterLogo from "./assets/twitter-logo.svg";
import { Button, ImgGrid, InputField } from "./components";
import {
  checkIfWalletIsConnected,
  connectWallet,
  TEST_GIFS,
} from "./utils/utils";

// Constants
const TWITTER_HANDLE = "@usernamehere";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [gifList, setGifList] = useState([]);

  useEffect(() => {
    const onLoad = async () => {
      const address = await checkIfWalletIsConnected();
      if (address) {
        setWalletAddress(address);
      }
    };
    window.addEventListener("load", onLoad);
    return () => {
      window.removeEventListener("load", onLoad);
    };
  }, []);

  useEffect(() => {
    if (walletAddress) {
      console.log("Fetching GIF list...");

      // Call Solana program here.

      // Set state
      setGifList(TEST_GIFS);
    }
  }, [walletAddress]);

  const handleConnect = async () => {
    const walletAddress = await connectWallet();
    if (walletAddress) {
      setWalletAddress(walletAddress);
    }
  };

  const sendGif = async () => {
    if (inputValue.length > 0) {
      console.log("Gif link:", inputValue);
    } else {
      console.log("Empty input. Try again.");
    }
  };

  const onInputChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };

  return (
    <div className="App">
      <div className={`${walletAddress ? "authed-" : ""}container`}>
        <div className="header-container">
          <p className="header">🖼 Sanflow Land</p>
          <p className="sub-text">
            View your GIF collection in the metaverse ✨
          </p>
          {!walletAddress ? (
            <Button label="Connect to Wallet" onClick={handleConnect} />
          ) : (
            <div className="connected-container">
              <InputField
                onSubmit={sendGif}
                onChangeInput={onInputChange}
                inputValue={inputValue}
                buttonLabel="Submit"
              />
              <ImgGrid data={gifList} />
            </div>
          )}
        </div>
        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built by @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
