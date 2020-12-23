import React from "react";
import { Footer } from "../../comunes/Footer";
import { Header } from "../../comunes/Header";
import { NavBar } from "../../comunes/NavBar";
export const ListadoScreen = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Header />
        <h1>LISTADO</h1> <Footer />
      </main>
    </div>
  );
};
