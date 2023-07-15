import SplitScreen from "./components/split-screen/Splitscreen";
import LeftComponent from "./components/left/left";
import RightComponent from "./components/right/right";

function App() {
  return (
    <SplitScreen leftWeight={2} rightWeight={3}>
      <LeftComponent />
      <RightComponent />
    </SplitScreen>
  );
}

export default App;
