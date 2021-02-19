import Button from "./Button";
import AddDrink from "./AddDrink";
import { useState } from "react";

const Drink = ({ drink, onAdd }) => {
  const [viewOptions, setViewOptions] = useState(false);

  const toggleOptions = () => {
    setViewOptions(!viewOptions);
    console.log(viewOptions);
  };

  //   const handleChange = () => {

  //   };

  const handleSubmit = (e) => {
    console.log(e.target);
    e.preventDefault();
  };

  if (!viewOptions) {
    return (
      <div className="drink">
        <h3>{drink.name}</h3>
        <AddDrink drink={drink} onAdd={onAdd} />
      </div>
    );
  } else {
    return (
      <div className="drink">
        <h3>{drink.name}</h3>
        <img
          src={require("../images/" + drink.name + ".png").default}
          alt="new"
          width="100px"
          height="100px"
        />
        <Button onClick={toggleOptions} />
      </div>
    );
  }
};

export default Drink;
