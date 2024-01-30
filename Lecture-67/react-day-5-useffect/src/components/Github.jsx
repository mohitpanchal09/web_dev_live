import React, { useEffect, useState } from "react";

function Github({ username }) {
  const [user, setUser] = useState({ imgUrl: "", followers: 0, following: 0 });

  //   api call
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`).then(async (res) => {
      let data = await res.json();
      let { avatar_url, followers, following } = data;
      setUser(() => {
        return {
          imgUrl: avatar_url,
          followers: followers,
          following: following,
        };
      });
    });
  }, []); //state and props
  return (
    <div>
      <h1>Github profile</h1>
      <figure>
        <img
          src={user.imgUrl}
          alt=""
          style={{ height: "200px", borderRadius: "50%" }}
        />
        <p>Username:{username}</p>
        <p>Followers:{user.followers}</p>
        <p>Following:{user.following}</p>
      </figure>
    </div>
  );
}

export default Github;
