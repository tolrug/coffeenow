import { useState, useEffect } from "react";
import Header from "./components/Header";
import Drinks from "./components/Drinks";
import JoinForm from "./components/JoinForm";

function App() {
  const [drinks, setDrinks] = useState([]);
  const [groups, setGroups] = useState([]);
  const [inGroup, setInGroup] = useState(false);

  // Get drinks from server on load
  useEffect(() => {
    const getDrinks = async () => {
      const drinksFromServer = await fetchDrinks();
      setDrinks(drinksFromServer);
    };
    getDrinks();

    const getGroups = async () => {
      const groupsFromServer = await fetchGroups();
      setGroups(groupsFromServer);
    };
    getGroups();
  }, []);

  // Fetch Drinks
  const fetchDrinks = async () => {
    const res = await fetch("http://localhost:5000/drinks");
    const data = await res.json();

    return data;
  };

  // Fetch Groups
  const fetchGroups = async () => {
    const res = await fetch("http://localhost:5000/groups");
    const data = await res.json();

    return data;
  };

  const addOrder = (drink) => {
    console.log(drink);
  };

  const deleteOrder = () => {};

  const editOrder = () => {};

  const createGroup = () => {};

  // Add Group to db
  const addGroup = (groupName) => {
    const groupNames = [];
    groups.forEach(({ id, name }) => groupNames.push(name));

    // Data validation
    if (groupNames.includes(groupName)) {
      alert("Group name already exists");
      return;
    }

    console.log(groupName);

    const group = { name: groupName };

    fetch("http://localhost:5000/groups", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(group),
    })
      .then((response) => response.json())
      .then((data) => setGroups([...groups, data]))
      .catch((error) => {
        console.error("Error: ", error);
      });

    setInGroup(true);
  };

  return (
    <div>
      <Header />
      {!inGroup ? (
        <JoinForm onAdd={addGroup} />
      ) : (
        <Drinks drinks={drinks} onAdd={addOrder} />
      )}
    </div>
  );
}

export default App;
