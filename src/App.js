import Header from "./components/Header";
import Drinks from "./components/Drinks";
import JoinForm from "./components/JoinForm";
import { useState, useEffect } from "react";

function App() {
  const [drinks, setDrinks] = useState([]);
  const [inGroup, setInGroup] = useState(false);

  // Get drinks from server on load
  useEffect(() => {
    const getDrinks = async () => {
      const drinksFromServer = await fetchDrinks();
      setDrinks(drinksFromServer);
    };

    getDrinks();
  }, []);

  // Fetch Drinks
  const fetchDrinks = async () => {
    const res = await fetch("http://localhost:5000/drinks");
    const data = await res.json();

    return data;
  };

  const addOrder = (drink) => {
    console.log(drink);
  };

  const deleteOrder = () => {};

  const editOrder = () => {};

  const createGroup = () => {};

  const joinGroup = () => {};

  return (
    <div>
      <Header />
      <JoinForm />
    </div>
    // <div className="App">
    //   <Header />
    //   <Drinks drinks={drinks} onAdd={addOrder} />
    // </div>
  );
}

export default App;
