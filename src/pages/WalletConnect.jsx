import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import React from "react";
import { Mosaic } from "react-loading-indicators";

const WalletConnect = () => {
  const wallet = useWallet();

  return (
    <section>
      <div className="flex items-center h-[88vh] justify-center px-2">
        {wallet.connecting ? (
          <Mosaic color={["#33CCCC", "#33CC36", "#B8CC33", "#FCCA00"]} />
        ) : (
          <div className="w-[330px] hover:-translate-y-2 duration-1000 p-6 shadow-lg border-[0.5px] border-gray-200 rounded-xl flex justify-center items-center flex-col space-y-6">
            <h1 className="bg-gradient-to-r from-slate-500 via-slate-600 to-slate-700 w-fit bg-clip-text text-transparent text-2xl md:text-3xl font-bold">
              Connect your wallet
            </h1>
            <WalletMultiButton />
          </div>
        )}
      </div>
    </section>
  );
};

export default WalletConnect;
