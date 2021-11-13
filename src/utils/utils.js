export const checkIfWalletIsConnected = async () => {
  try {
    const { solana, isPhantom } = checkForPhantomWallet();
    if (isPhantom) {
      const response = await solana.connect({ onlyIfTrusted: true });
      if (response?.publicKey) {
        const publicKeyParsed = response.publicKey.toString();
        console.log(`Connected with Public Key:" ${publicKeyParsed}`);
        return publicKeyParsed;
      }
    }
  } catch (e) {
    console.error(`Erorr checking if wallet is connected with error ${e}`);
  }
};

export const checkForPhantomWallet = () => {
  const obj = { solana: false, isPhantom: false };
  const { solana } = window;
  if (solana) {
    obj.solana = solana;
    if (solana.isPhantom) {
      console.log("Phantom wallet detected:::");
      obj.isPhantom = true;
    }
  } else {
    alert("Solana object not found! Get a Phantom Wallet..");
  }
  return obj;
};

export const connectWallet = async () => {
  try {
    const { solana } = checkForPhantomWallet();
    if (solana) {
      const response = await solana.connect();
      const publicKeyParsed = response.publicKey.toString();
      console.log(`Connected with Public Key: ${publicKeyParsed}`);
      return publicKeyParsed;
    }
  } catch (e) {
    console.error(`Unable to connect with error ${e}`);
  }
};

// Test data....
export const TEST_GIFS = [
  "https://i.giphy.com/media/eIG0HfouRQJQr1wBzz/giphy.webp",
  "https://media3.giphy.com/media/L71a8LW2UrKwPaWNYM/giphy.gif?cid=ecf05e47rr9qizx2msjucl1xyvuu47d7kf25tqt2lvo024uo&rid=giphy.gif&ct=g",
  "https://media4.giphy.com/media/AeFmQjHMtEySooOc8K/giphy.gif?cid=ecf05e47qdzhdma2y3ugn32lkgi972z9mpfzocjj6z1ro4ec&rid=giphy.gif&ct=g",
  "https://i.giphy.com/media/PAqjdPkJLDsmBRSYUp/giphy.webp",
];
