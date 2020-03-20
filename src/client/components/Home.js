import React from "react";

const Home = () => {
  return (
    <div>
      <div>HELLO I AM HOME COMPONENT</div>
      <button onClick={() => console.log("Pressed")}>PRESS ME</button>
    </div>
  );
};

export default Home;
