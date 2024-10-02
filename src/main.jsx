import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import WalletConnectionProvider from "./Providers/WalletProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WalletConnectionProvider>
      <App />
    </WalletConnectionProvider>
  </StrictMode>
);
