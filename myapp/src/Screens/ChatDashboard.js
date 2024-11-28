import React, { useEffect, useState } from "react";
import "./ChatDashboard.css";
import UserStatusList from "../Components/UserStatusList/UserStatusList";
import UserChatList from "../Components/UserChatList/UserChatList";
import UserChatBox from "../Components/UserChatBox/UserChatBox";
import axios from "axios";
const ChatDashboard = () => {
  const [selectedOption, setSelectedOption] = useState("Chat");
  // 1. Use State is a react based function which is used to initalize
  //    variables and their setter functions
  // 2. [variableName, setVariableName] is the format
  // 3. useState("") -> Whatever is inside that () is the initial Value of the variable
  //    can be useState(null)/useState(0)/useState(true)/useState({})/useState("")/useState([])

  // First Way of making a api call
  const callJokesApi = async () => {
    const response = await axios.get(
      "https://official-joke-api.appspot.com/random_joke"
    );

    // await makes the program to wait for a perticular process to complete before moving ahead to next line of code
    const joke = response.data.setup + " " + response.data.punchline;
  };

  // Second Way of making a api call
  const callJokesApi2 = () => {
    axios
      .get("https://official-joke-api.appspot.com/random_joke")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        console.log("Api Call Done");
      });
  };

  useEffect(() => {
    callJokesApi2();
  }, [selectedOption]);
  // 1. Run when the Component is loaded
  // 2. Run whenever the variable inside [] is going to change
  // 3. If it is empty [] then it will run only when the component
  //    is rendered but if the array [] of useEffect has some variable
  //    it is going to run whenever the value of variable is going to
  //    change + also when the component is rendered
  // 4. Use Case -> Condition checks like check email validity Password validity
  //    Api calls when  the page loads

  return (
    <div className="homeContainer">
      <div className="chatBoxContainer">
        <UserStatusList
          selectedOption={selectedOption}
          //this is the way to pass varible from this component
          //  (ChatDashboard) to child components (UserStatusList)
          // First word before = is the name by which we are going
          // to call the variables of parent component (ChatDashboard)
          // inside the child components (UserStatusList) and after = is
          //  the variable name inside this current component
          setSelectedOption={setSelectedOption}
        />
        <UserChatList />
        <UserChatBox />
      </div>
    </div>
  );
};

export default ChatDashboard;
