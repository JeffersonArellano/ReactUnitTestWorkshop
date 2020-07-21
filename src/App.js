import React from "react";

export const Title = () => {
  return <h1>Working</h1>;
};

const App = () => {
  return (
    <section id="main">
      <Title />
      <div className="container">
        <span num={3} active={false} />
        <span num="3" active="false" />
      </div>
      <input type="text" />
    </section>
  );
};

export default App;
