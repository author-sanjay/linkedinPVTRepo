import React, { useEffect, useState } from "react";
import { ArrowRightLeft } from "lucide-react";
import axios from "axios";
const JokesGenerator = () => {
  const [joke, setJoke] = useState(null);

  //   const obj={'name':"joke", 'rating':5} -> obj can sometimes also be null => obj=null
  //   const jokeRating = obj.rating
  //   if(obj!=null) {const jokeRating= obj.rating}
  //   obj?.rating <- first check if obj is null or not if null then it does nothing and hence prevents error
  //   and if not null then it fetches the rating value from obj

  //   obj = {
  //     name: "joke",
  //     rating: "5",
  //     jokeType: {
  //       category: "Dark",
  //       categoryRating: "4",
  //       humorLevel: { normalPeopleHumor: "5/10", doubleMeaningHumor: "9/10" },
  //     },
  //   };
  // to get the value of doubleMeaningHumor from obj we do is obj?.jokeType?.humorLevel?.doubleMeaningHumor
  const fetchJoke = async () => {
    const response = await axios.get(
      "https://official-joke-api.appspot.com/random_joke"
    );

    setJoke(response.data?.setup + "... ->" + response.data?.punchline);
  };

  useEffect(() => {
    fetchJoke();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className=""
        style={{ fontSize: "4vh", fontWeight: "100", marginBottom: "5%" }}
      >
        Welcome to the laughter Club
      </div>
      <div className="" style={{ fontWeight:"100", fontSize:"large"}}>
        {joke == null ? "Please wait while we fetch the Ha! Ha! for you" : joke}
      </div>
      <div
        className=""
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "white",
          borderRadius: "2vh",
          width: "10%",
          justifyContent: "center",
          color: "black",
          alignItems: "center",
          paddingTop: "0.5%",
          paddingBottom: "0.5%",
          paddingLeft: "1%",
          paddingRight: "1%",
          marginTop: "3%",
          cursor: "pointer",
        }}
      >
        <span style={{ marginRight: "10%" }} onClick={fetchJoke}>
          Change Joke
        </span>
        <div className="">
          <ArrowRightLeft />
        </div>
      </div>
    </div>
  );
};

export default JokesGenerator;
