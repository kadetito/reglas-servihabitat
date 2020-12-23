import React from "react";
import { Footer } from "../comunes/Footer";
import { Header } from "../comunes/Header";
import { NavBar } from "../comunes/NavBar";

export const HomeScreen = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Header />
        <h1>HOME</h1> <Footer />
      </main>
    </div>
  );
};
