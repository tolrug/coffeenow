import { useState } from "react";

const CreateForm = ({ onAdd }) => {
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
    <form className="form" onSubmit={onSubmit}>
      <h2>Create Group</h2>
      <label htmlFor="group-name">Group Name: </label>
      <br />
      <input
        type="text"
        id="group-name"
        value={groupName}
        onChange={(e) => setGroupName(e.target.value)}
      />
      <br />

      <input type="submit" value="Create" />
    </form>
  );
};

export default CreateForm;
