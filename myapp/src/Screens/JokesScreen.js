import React from "react";
import JokesGenerator from "../Components/JokesComponent/JokesGenerator";

const JokesScreen = () => {
  // If we write styles in css file as well as the inline styles then inline style will get priority
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#262524",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
     <JokesGenerator/>
    </div>
  );
};

export default JokesScreen;
