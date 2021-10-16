import React from "react";

import Range from "../../components/Range";
import DragAndDrop from "../../components/DragAndDrop";

import MainWrapper from "./styled/MainWrapper";
import FileWrapper from "./styled/FileWrapper";
import FileText from "./styled/FileText";
import OpenButton from "./styled/OpenButton";
import SaveButton from "./styled/SaveButton";

const Home = () => (
  <MainWrapper>
    <FileWrapper>
      <DragAndDrop />
      <FileText>
        <span>Drag'n'drop</span> or <span>browse</span> the file here
      </FileText>
      <OpenButton label="Open file" onClickFunc={() => null} />
    </FileWrapper>

    <Range />
    <SaveButton isDisabled label="Save file" onClickFunc={() => null} />
  </MainWrapper>
);

export default Home;
