import React, { useCallback } from "react";
import Dropzone from "react-dropzone";
import "../Styles/Header.css";

const FileDropzone = ({ onFileDrop }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles && acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        onFileDrop(file);
      }
    },
    [onFileDrop]
  );

  return (
    <div className="dropZone">
      <Dropzone onDrop={onDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        )}
      </Dropzone>
    </div>
  );
};

export default FileDropzone;
