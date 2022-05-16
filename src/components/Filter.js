import React from "react";

import classes from "./filter.module.css";
function Filter() {
  return (
    <div className={classes.filter_container}>
      <div className={classes.btn}>All</div>
      <div className={classes.btn}>Newbie</div>
      <div className={classes.btn}>Junior</div>
      <div className={classes.btn}>Intermediate</div>
      <div className={classes.btn}>Advanced</div>
    </div>
  );
}

export default Filter;
