import React from "react";
import { Navbar } from "./components/Navbar"
import { AppRouter } from "./router/AppRouter"
import { Footer } from "./components/footer";

function App() {

  return (
    <>
      <Navbar />
      <AppRouter />
      <Footer />
    </>
  )
}

export default App;