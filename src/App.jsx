import { useState } from "react";
import HomeView from "./components/Pages/HomeView";
import CardSection from "./components/CardSection";
import { cardData } from "./assets/cardData";
import Card from "./components/Card";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <HomeView />
      </div>
    </>
  );
}

export default App;
