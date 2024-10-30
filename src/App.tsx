import "./App.css";
import Header from "./features/Header/Header";
import LeftColumn from "./features/LeftColumn/LeftColumn";
import MainBody from "./features/MainBody/MainBody";
import RightColumn from "./features/RightColumn/RightColumn";
import ThreeColumnSticky from "./features/ThreeColumnSticky/ThreeColumnSticky";

function App() {
  return (
    <>
      <Header />
      <ThreeColumnSticky
        main={<MainBody />}
        right={<RightColumn />}
        left={<LeftColumn />}
      />
    </>
  );
}

export default App;
