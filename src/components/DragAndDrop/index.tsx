import React from "react";
import { FileUploader } from "react-drag-drop-files";

import Wrapper from "./styled/Wrapper";

interface DragAndDropProps {
  callback: any;
}

const DragAndDrop = ({ callback }: DragAndDropProps) => {
  const fileTypes = ["JPG", "JPEG", "PNG"];
  const handleChange = (file: any) => {
    callback({ name: file.name, path: file.path });
  };

  return (
    <Wrapper>
      <FileUploader
        handleChange={handleChange}
        name="file"
        types={fileTypes}
        maxSize={20} // 20mb
        minSize={0.1} // 100kb
      />
    </Wrapper>
  );
};

export default DragAndDrop;
