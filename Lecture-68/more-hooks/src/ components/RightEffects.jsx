import React, { useState, useEffect } from "react";
import axios from "axios";
function RightEffects() {
  const [movies, setMovies] = useState("");
  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/singlesearch/shows?q=girls")
      .then((res) => {
        console.log(res.data);
        setMovies(res.data);
      });
  }, []);

  return <div></div>;
}

export default RightEffects;
