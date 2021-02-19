import { useState } from "react";

const JoinForm = ({ onAdd }) => {
  const [groupName, setGroupName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!groupName) {
      alert("Please enter a valid group name");
      return;
    }

    onAdd(groupName);

    setGroupName([""]);
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Join Group</h2>
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
