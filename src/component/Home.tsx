import React from "react";
import Controller from "./Controller";
import Kanban from "./Kanban/Kanban";

const Home = () => {
  return (
    <div className="flex">
      <Controller />
      <Kanban/>
    </div>
  );
};

export default Home;