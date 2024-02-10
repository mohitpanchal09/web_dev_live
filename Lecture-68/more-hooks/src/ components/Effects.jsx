import React, { useState } from "react";

function Effects() {
  const [movies, setMovies] = useState("");
  fetch("https://api.tvmaze.com/singlesearch/shows?q=girls").then(
    async (res) => {
      let data = await res.json();
      console.log(data);
      setMovies(data);
    }
  );

  return <div style={{ color: "white" }}>{JSON.stringify(data)}</div>;
}

export default Effects;
