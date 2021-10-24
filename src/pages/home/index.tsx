import React, { useState, useEffect } from "react";

import Range from "../../components/Range";
import DragAndDrop from "../../components/DragAndDrop";

import MainWrapper from "./styled/MainWrapper";
import FileWrapper from "./styled/FileWrapper";
import FileText from "./styled/FileText";
import OpenButton from "./styled/OpenButton";
import SaveButton from "./styled/SaveButton";

const { ipcRenderer } = window.require("electron");

interface Data {
  image: string;
  path: string;
}

interface SaveResponse {
  success: boolean;
}

const Home = () => {
  const [data, setData] = useState({ image: "", path: "" });
  const [success, setSuccess] = useState(false);
  const [quality, getQuality] = useState(50);

  useEffect(() => {
    ipcRenderer.on("file:openResponse", (e, data: Data) => {
      console.log("Data ", data);
      setData(data);
    });
    ipcRenderer.on("file:saveResponse", (e, data: SaveResponse) => {
      console.log("Data Success", data.success);
      setSuccess(data.success);
    });
  }, []);

  return (
    <MainWrapper>
      <FileWrapper>
        <DragAndDrop />
        <FileText>
          <span>Drag'n'drop</span> or <span>browse</span> the file here
        </FileText>
        <OpenButton
          label="Open file"
          onClickFunc={() => ipcRenderer.send("file:open")}
        />
      </FileWrapper>

      <Range callBack={getQuality} />
      <SaveButton
        isDisabled={data.image === ""}
        label="Save file"
        onClickFunc={() =>
          ipcRenderer.send("file:save", {
            image: data.image,
            path: data.path,
            qualityImg: quality,
          })
        }
      />
    </MainWrapper>
  );
};

export default Home;
