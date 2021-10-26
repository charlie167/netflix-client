import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";

import "./home.scss";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type" + type : ""}  ${
            genre ? "&genre" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTU4NjM0YTEyMGM0YjAyNWM4OTg1MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTIxODY5OSwiZXhwIjoxNjM1NjUwNjk5fQ.FlmY3GsYMLugn7WII14gf32pN_cb75DeRoL72aaJpsk",
            },
          }
        );
        setLists(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />

      <Featured type={type} />

      {lists.map((list) => {
        return <List list={list} />;
      })}
    </div>
  );
};

export default Home;
