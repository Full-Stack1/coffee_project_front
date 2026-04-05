import "./styles/globals.css";
import Header from "../components/Header/header";
import React from "react";
import { NameuserProvider } from "./Context/AuthContext";
import { CountContext, CountProvider } from "./Context/CountContext";
import Footers from "../components/Footers";
const RootLayout = ({ children}) => {
  return (
    <html lang="en">
      <body>
      
        <NameuserProvider>
         
          <Header/>
        {children}
        <Footers/>
        </NameuserProvider>
      </body>
      
    </html>
  );
};
export default RootLayout;