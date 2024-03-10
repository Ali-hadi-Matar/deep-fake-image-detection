import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "../Styles/Header.css";

const DropZone = () => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log("Accepted Files:", acceptedFiles);
  }, []);

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
  } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/webp": [],
      "image/heic": [],
      "image/jfif": [],
    },
    minSize: 1024,
    maxSize: 3072000,
    onDrop,
  });

  return (
    <div className="dropZone">
      <div
        {...getRootProps()}
        className={`dropzone ${isDragActive ? "active" : ""}`}
      >
        <input {...getInputProps()} />
        <p>
          {isDragActive
            ? "Drop image here..."
            : "Drag 'n' drop some files here, or click to select files"}
        </p>
        {isDragReject && (
          <p className="reject">Only image files are allowed!</p>
        )}
        {acceptedFiles.map((file) => (
          <img
            key={file.path}
            src={URL.createObjectURL(file)}
            alt={file.path}
          />
        ))}
      </div>
    </div>
  );
};

export default DropZone;
