//TODO: STEP 1 - Import the useState hook.
import React, { useState} from "react";
import BottomRow from "./BottomRow";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some
  //useState hooks.  You'll need one for the home score and another
  //for the away score.
  const [homeScore, setHomeScore] = useState(0)
  const [awayScore, setAwayScore] = useState(0)
  const [quarter, setQuarter] = useState(1)
  const [down, setDown] = useState(1)

    
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values
	      * in these divs to accept dynamic values from our
	      * state. */}
          <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
          <div className="away__score">{awayScore}</div>
          </div>
        </div>
          {/*<BottomRow />*/}
	<div className="bottomRow">
          <div className="down">
            <h3 className="down__title">Down</h3>
            <div className="down__value">{down}</div>
          </div>
          <div className="toGo">
            <h3 className="toGo__title">To Go</h3>
            <div className="toGo__value">7</div>
          </div>
          <div className="ballOn">
            <h3 className="ballOn__title">Ball on</h3>
            <div className="ballOn__value">21</div>
          </div>
          <div className="quarter">
            <h3 className="quarter__title">Quarter</h3>
          <div className="quarter__value">{quarter}</div>
          </div>
        </div>
      
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={() => setHomeScore(homeScore+7)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={() => setHomeScore(homeScore+3)} className="homeButtons__fieldGoal">Home Field Goal</button>
          <button onClick={() => setDown(down+1)} className="homeButtons__fieldGoal">Down Button</button>
        </div>
        <div className="awayButtons">
          <button onClick={() => setAwayScore(awayScore+7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={() => setAwayScore(awayScore+3)} className="awayButtons__fieldGoal">Away Field Goal</button>
          <button onClick={() => setQuarter(quarter+1)} className="awayButtons__fieldGoal">Quarter Button</button>
        </div>
      </section>
    </div>
  );
}

export default App;
