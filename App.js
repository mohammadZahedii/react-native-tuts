import * as React from "react";
import GoalsList from "./projects/goals-list";
import GuessNumberGame from "./projects/guess-number-game";
import * as ScreenOrientation from "expo-screen-orientation";

export default function App() {
  const checkOrientation = async () => {
    await ScreenOrientation.getOrientationAsync();
  };
  React.useEffect(() => {
    checkOrientation();
    const subscription = ScreenOrientation.addOrientationChangeListener(
      (orientation) => console.log(orientation)
    );
    return () => {
      ScreenOrientation.removeOrientationChangeListeners(subscription);
    };
  }, []);

  return <GuessNumberGame />;
}
