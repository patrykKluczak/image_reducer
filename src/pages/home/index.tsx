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
  path: string;
  name: string;
}

interface SaveResponse {
  success: boolean;
  error: string;
}

const Home = () => {
  const [data, setData] = useState({ path: "", name: "" });
  const [quality, getQuality] = useState(50);
  let timer: ReturnType<typeof setTimeout>;

  useEffect(() => {
    ipcRenderer.on("file:openResponse", (e, data: Data) => {
      const name = data.path.substring(data.path.lastIndexOf("/") + 1);
      setData({ path: data.path, name: name });
    });
    ipcRenderer.on("file:saveResponse", (e, data: SaveResponse) => {
      console.log("file response ", data.error);
      setData({
        path: "",
        name: data.success
          ? "Your file was reduced successfully"
          : "Something went wrong, please check the image format and try again.",
      });

      timer = setTimeout(() => {
        setData({ path: "", name: "" });
      }, 3000);
      return () => clearTimeout(timer);
    });
  }, []);

  return (
    <MainWrapper>
      <FileWrapper>
        <DragAndDrop callback={setData} />
        <FileText>
          {data.name !== "" ? (
            <span>{data.name}</span>
          ) : (
            <>
              <span>Drag'n'drop</span> or <span>browse</span> the file here
            </>
          )}
        </FileText>
        <OpenButton
          label="Open file"
          onClickFunc={() => ipcRenderer.send("file:open")}
        />
      </FileWrapper>

      <Range callback={getQuality} />
      <SaveButton
        isDisabled={data.path === ""}
        label="Save file"
        onClickFunc={() =>
          ipcRenderer.send("file:save", {
            path: data.path,
            qualityImg: quality,
          })
        }
      />
    </MainWrapper>
  );
};

export default Home;
