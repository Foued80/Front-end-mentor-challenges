import React from "react";
import classes from "./challenges.module.css";
import { motion } from "framer-motion";

function Challenges(props) {
  return (
    <motion.div layout>
      <a
        href={process.env.PUBLIC_URL + "/challenges/challenge" + props.id + "/"}
      >
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
      </a>
    </motion.div>
  );
}

export default Challenges;
