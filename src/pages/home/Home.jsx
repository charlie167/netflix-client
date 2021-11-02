import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import { useHistory } from "react-router-dom";

import "./home.scss";

const Home = ({ type }) => {
  const history = useHistory();

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
                "Bearer " +
                JSON.parse(localStorage.getItem("user")).accessToken,
            },
          }
        );
        setLists(res.data);
      } catch (error) {
        console.log(error);
        history.push("/login");
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
