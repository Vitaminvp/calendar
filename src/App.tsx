import React from "react";
import "./App.css";
import Calendar from "./calendar/Calendar";

const App = () => {
  return (
    <>
      <Calendar value={"03/19/2022"} />
      <Calendar value={"07/29/2020"} />
    </>
  );
};

export default App;
