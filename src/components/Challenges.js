import React from "react";
import classes from "./challenges.module.css";

function Challenges(props) {
  return (
    <div className={classes.card}>
      <img
        className={classes.image}
        src={
          process.env.PUBLIC_URL +
          "/challenges/challenge" +
          props.id +
          "/design/" +
          props.preview
        }
        alt={props.title}
      />
      <div className={classes.title}>{props.title}</div>
    </div>
  );
}

export default Challenges;
