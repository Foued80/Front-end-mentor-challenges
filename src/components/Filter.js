import React, { useEffect } from "react";

import classes from "./filter.module.css";
function Filter({
  activeDifficulty,
  setActiveDifficulty,
  filteredChallenges,
  setFilteredChallenges,
  allChallenges,
}) {
  useEffect(() => {
    if (activeDifficulty === -1) {
      setFilteredChallenges(allChallenges);
      return;
    }
    const filtered = allChallenges.filter((challenge) => {
      if (challenge.difficulty === activeDifficulty) return 1;
    });

    setFilteredChallenges(filtered);
  }, [activeDifficulty]);

  return (
    <div className={classes.filter_container}>
      <div
        onClick={() => {
          setActiveDifficulty(-1);
        }}
        className={`${classes.btn}
          ${activeDifficulty === -1 ? classes.active : ""}`}
      >
        All
      </div>
      <div
        onClick={() => {
          setActiveDifficulty(0);
        }}
        className={`${classes.btn}
          ${activeDifficulty === 0 ? classes.active : ""}`}
      >
        Newbie
      </div>
      <div
        onClick={() => {
          setActiveDifficulty(1);
        }}
        className={`${classes.btn}
          ${activeDifficulty === 1 ? classes.active : ""}`}
      >
        Junior
      </div>
      <div
        onClick={() => {
          setActiveDifficulty(2);
        }}
        className={`${classes.btn}
          ${activeDifficulty === 2 ? classes.active : ""}`}
      >
        Intermediate
      </div>
      <div
        onClick={() => {
          setActiveDifficulty(3);
        }}
        className={`${classes.btn}
          ${activeDifficulty === 3 ? classes.active : ""}`}
      >
        Advanced
      </div>
    </div>
  );
}

export default Filter;
