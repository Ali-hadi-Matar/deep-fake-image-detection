import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/Header.css";
const ImageClassifier = ({ file }) => {
  const [prediction, setPrediction] = useState("");
  const [probability, setProbability] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("++++ file ", file);
        const formData = new FormData();
        formData.append("image", file);

        const response = await axios.post(
          "http://127.0.0.1:5000/classify_image",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        setPrediction(response.data.prediction);
        setProbability((response.data.probability * 100).toFixed(2));
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, [file]);

  return (
    <div className="results_container">
      <p>Prediction: {prediction}</p>
      <p>Probability: {probability}%</p>
    </div>
  );
};

export default ImageClassifier;
