import { useState } from "react";

const JoinForm = ({ onAdd }) => {
  const [groupName, setGroupName] = useState("");
  const [name, setName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!groupName) {
      alert("Please enter a valid group name");
      return;
    }

    if (!name) {
      alert("Please enter a valid name");
      return;
    }

    onAdd({ groupName, name });

    setGroupName("");
    setName("");
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <h2>Join Group</h2>
      <label htmlFor="name">Name: </label>
      <br />
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />

      <label htmlFor="group-name">Group Name: </label>
      <br />
      <input
        type="text"
        id="group-name"
        value={groupName}
        onChange={(e) => setGroupName(e.target.value)}
      />
      <br />

      <input type="submit" value="Join" />
    </form>
  );
};

export default JoinForm;
