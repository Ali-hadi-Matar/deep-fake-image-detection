import React, { useState } from "react";
import FileDropzone from "./Components/DropZone";
import ImageClassifier from "./Components/image_classifier";
import Header from "./Components/Header"; // Importing Header component
import "./Styles/Header.css";

const App = () => {
  const [file, setFile] = useState(null);

  const handleFileDrop = (file) => {
    setFile(file);
  };

  return (
    <div className="appContainer">
      <Header />
      <FileDropzone onFileDrop={handleFileDrop} />
      {file && <ImageClassifier file={file} />}
    </div>
  );
};

export default App;
