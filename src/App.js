import React from "react";
import Jokes from "./components/Jokes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-screen font-serif">
      <Navbar />
      <Jokes />
    </div>
  );
}

export default App;
