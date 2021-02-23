import { useState, useEffect } from "react";
import Header from "./components/Header";
import Drinks from "./components/Drinks";
import JoinForm from "./components/JoinForm";
import CreateForm from "./components/CreateForm";

function App() {
  const [drinks, setDrinks] = useState([]);
  const [groups, setGroups] = useState([]);
  const [groupName, setGroupName] = useState("");
  const [name, setName] = useState("");
  const [inGroup, setInGroup] = useState(false);
  var groupNameTest;

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

  // Fetch Group
  const fetchGroup = async (groupName) => {
    const res = await fetch(`http://localhost:5000/groups?name=${groupName}`);
    const data = await res.json();
    console.log(data[0]);
    return data[0];
  };

  const addOrder = (drink) => {
    console.log(drink);
  };

  const deleteOrder = () => {};

  const editOrder = () => {};

  // Join Group in db
  const joinGroup = async ({ groupName, name }) => {
    const groupNames = [];
    var groupID;
    groups.forEach(({ id, name }) => {
      groupNames.push(name);
      groupID = id;
    });

    // Data validation
    if (!groupNames.includes(groupName)) {
      alert("Group name does not exist");
      return;
    }

    setGroupName(groupName);
    console.log("Group: " + groupName);

    const joiningGroup = await fetchGroup(groupName);
    const members = joiningGroup.members;
    members.push(name);
    console.log("Joining Group: ", joiningGroup.members);
    const updatedGroup = {
      ...joiningGroup,
      members: members,
    };

    console.log(updatedGroup);

    const res = await fetch(`http://localhost:5000/groups/${groupID}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedGroup),
    });

    console.log(res);

    const data = await res.json();

    console.log(data);

    // fetch("http://localhost:5000/groups?name=" + groupName)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data[0]);
    //     data[0].members.push(name);
    //   });

    setInGroup(true);
  };

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

    setGroupName(groupName);
    setInGroup(true);
  };

  return (
    <div>
      <Header />
      {!inGroup ? (
        <div className="forms">
          <JoinForm onAdd={joinGroup} />
          <CreateForm onAdd={addGroup} />
        </div>
      ) : (
        <>
          <p>Group: {groupName}</p>
          <Drinks drinks={drinks} onAdd={addOrder} />
        </>
      )}
    </div>
  );
}

export default App;
