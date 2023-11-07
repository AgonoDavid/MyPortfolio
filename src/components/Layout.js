import React from "react";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className=" bg-slate-950">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 md:px-40 text-sm">
        {children}
      </main>
    </div>
  );
}

export default Layout;
