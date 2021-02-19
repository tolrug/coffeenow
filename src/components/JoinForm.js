import { useState } from "react";

const JoinForm = () => {
  const [groupName, setGroupName] = useState("");
  const [name, setName] = useState("");

  return (
    <form>
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
      <label htmlFor="name">Name: </label>
      <br />
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <input type="submit" value="Join" />
    </form>
  );
};

export default JoinForm;
