import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/DataContext.tsx";
// import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <DataProvider>
        {/* <ChakraProvider> */}
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
        {/* </ChakraProvider> */}
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode>
);
