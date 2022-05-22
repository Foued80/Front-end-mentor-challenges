import classes from "./app.module.css";
import logo from "./coding.png";
import data from "./data/data.js";
import Challenges from "./components/Challenges";
import Filter from "./components/Filter";
import { useState, useEffect } from "react";

function App() {
  const [allChallenges, setAllChallenges] = useState(data);
  const [filteredChallenges, setFilteredChallenges] = useState(data);
  const [activeDifficulty, setActiveDifficulty] = useState(-1);
  useEffect(() => {}, []);

  return (
    <div className={classes.app}>
      <header>
        <img className={classes.logo} src={logo} alt="logo" />
        <div className={classes.logo_title}>Frontend Mentor Challenges</div>
      </header>
      <Filter
        activeDifficulty={activeDifficulty}
        setActiveDifficulty={setActiveDifficulty}
        filteredChallenges={filteredChallenges}
        setFilteredChallenges={setFilteredChallenges}
        allChallenges={allChallenges}
      />

      <div className={classes.challenges}>
        {filteredChallenges.length === 0 ? (
          <div className={classes.empty_wrapper}>
            <img
              className={classes.empty}
              src="/img/peach-cat.gif"
              alt="empty"
            />
            <div> Come back later</div>
          </div>
        ) : (
          filteredChallenges.map((data) => {
            return (
              <Challenges
                preview={data.preview}
                title={data.title}
                id={data.id}
                path={data.path}
                key={data.id}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default App;
