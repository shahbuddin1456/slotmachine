/** @format */

import React from "react";
import SlotM from "./Slotmach";

const App = () => {
  return (
    <>
      <h1 className="heading_style">
        🎰 Welcome to
        <span style={{ fontWeight: "bold" }}> Slot machine game</span> 🎰
      </h1>
      <div className="slotmachine">
        <SlotM x="😀" y="😀" z="😀" />
        <hr />
        <SlotM x="😀" y="😂" z="😀" />
        <hr />
        <SlotM x="🍇" y="🍎" z="🍇" />
        <hr />
        <SlotM x="💑" y="💑" z="💑" />
        <hr />
        <SlotM x="5️⃣" y="5️⃣" z="5️⃣" />
        <hr />
        <SlotM x="4️⃣" y="#️⃣" z="💑" />
      </div>
    </>
  );
};

export default App;
