import React, { useEffect } from "react";
import { Avatar, Divider } from "antd";
import Navbar from "./components/Navbar";
import WalletConnect from "./pages/WalletConnect";
import { useWallet } from "@solana/wallet-adapter-react";
import {toast} from 'sonner'

const App = () => {
  const wallet = useWallet();
  
  useEffect(()=>{
    if(wallet.publicKey){
      toast.success("Wallet connected successfully!!")
    }
  },[wallet])

  return (
    <main className="h-screen">
      <Navbar/>
      {wallet.publicKey?<></>:<WalletConnect/>}
    </main>
  );
};

export default App;
