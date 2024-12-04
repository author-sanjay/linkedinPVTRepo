import React, { useState } from "react";
import { ArrowUpDown, Undo2 } from "lucide-react";
import LoginScreen from "./LoginScreen";
import ChatDashboard from "./ChatDashboard";
import JokesScreen from "./JokesScreen";
const AuthSelectScreen = () => {
  const [selectedScreen, setSelectedScreen] = useState("Login");
  return (
    <>
      {selectedScreen === "Login" ? (
        <LoginScreen />
      ) : selectedScreen === "Chat" ? (
        <ChatDashboard />
      ) : (
        <JokesScreen />
      )}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          backgroundColor: "white",
          color: "black",
          paddingLeft: "2%",
          paddingRight: "2%",
          paddingTop: "1%",
          paddingBottom: "1%",
          borderRadius: "2vw",
        }}
        onClick={() => {
          setSelectedScreen(
            selectedScreen === "Login"
              ? "Chat"
              : selectedScreen === "Chat"
              ? "Joke"
              : "Login"
          );
        }}
      >
        <ArrowUpDown />
      </div>
    </>
  );
};

export default AuthSelectScreen;
