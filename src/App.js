import classes from "./app.module.css";
import logo from "./coding.png";
import data from "./data/data.js";
import Challenges from "./components/Challenges";
import Filter from "./components/Filter";

function App() {
  return (
    <div className={classes.app}>
      <header>
        <img className={classes.logo} src={logo} alt="logo" />
        <h1>Frontend Mentor Challenges</h1>
      </header>
      <Filter />
      <main className={classes.challenges}>
        {data.map((data) => {
          return (
            <Challenges
              preview={data.preview}
              title={data.title}
              id={data.id}
              path={data.path}
              key={data.id}
            />
          );
        })}
      </main>
    </div>
  );
}

export default App;
