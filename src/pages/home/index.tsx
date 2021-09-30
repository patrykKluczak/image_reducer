import React from "react";

import Button from "../../components/Button";
import Range from "../../components/Range";

const Home = () => (
  <div>
    <Button label="Open file" onClickFunc={() => null} />

    <Button isDisabled label="Open file" onClickFunc={() => null} />
    <Range />
  </div>
);

export default Home;
