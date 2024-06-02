import axios from "axios";

async function predictImage(imageUrl) {
  try {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const file = new File([blob], "image.jpg", { type: blob.type });

    const formData = new FormData();
    formData.append("image", file);

    const apiResponse = await axios.post(
      "http://127.0.0.1:5000/classify_image",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    const prediction = apiResponse.data.prediction;
    const probability = (apiResponse.data.probability * 100).toFixed(2);
    console.log("++++ ", probability);

    const iframe = document.createElement("iframe");
    iframe.id = "prediction-frame";
    iframe.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 2px solid #000;
      padding: 20px;
      background: #fff;
      z-index: 9999;
      width: 300px; /* Adjust width as needed */
      height: 200px; /* Adjust height as needed */
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Add shadow for better visibility */
    `;
    iframe.srcdoc = `
      <style>
        /* Add additional styles for iframe content here */
        h2 {
          color: #333;
          font-size: 20px;
          margin-bottom: 10px;
        }
        p {
          color: #666;
          margin-bottom: 5px;
        }
        button {
          background-color: #007bff;
          color: #fff;
          border: none;
          padding: 5px 10px;
          cursor: pointer;
          border-radius: 3px;
        }
      </style>
      <h2>Prediction Results</h2>
      <p><strong>Prediction:</strong> ${prediction}</p>
      <p><strong>Probability:</strong> ${probability}%</p>
      <button id="close-btn">Close</button>
    `;

    document.body.appendChild(iframe);

    iframe.onload = () => {
      const closeBtn = iframe.contentDocument.getElementById("close-btn");
      closeBtn.addEventListener("click", () => {
        iframe.remove();
      });
    };
  } catch (error) {
    console.error("Error:", error);
  }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "predictImage") {
    const imageUrl = message.imageUrl;
    predictImage(imageUrl);
  }
});
