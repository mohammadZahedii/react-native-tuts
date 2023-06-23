import * as React from "react";
import * as ScreenOrientation from "expo-screen-orientation";
import DrawerApp from "./projects/drawer-app";
import MealsApp from "./projects/meals-app";

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

  return <MealsApp />;
}
