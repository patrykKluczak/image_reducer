import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

import Wrapper from "./styled/Wrapper";

const fileTypes = ["JPG", "JPEG", "PNG"];

const DragAndDrop = () => {
  const [file, setFile] = useState(null);
  const handleChange = (file: any) => {
    setFile(file);
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
