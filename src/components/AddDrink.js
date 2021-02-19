import { useState } from "react";

const AddDrink = ({ drink, onAdd }) => {
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("Medium");
  const [milk, setMilk] = useState("full cream");

  const onSubmit = (e) => {
    e.preventDefault();

    // onAdd(drink.name, )
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="qty">Qty: </label>
      <br />
      <input
        type="number"
        id="qty"
        placeholder="Quantity"
        value={qty}
        onChange={(e) => setQty(e.target.value)}
      />
      <br />
      <label htmlFor="size">Size: </label>
      <br />
      <select
        name="size"
        id="size"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      >
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
      <br />
      <label htmlFor="milk">Milk: </label>
      <input
        type="text"
        id={drink.id}
        name="milk"
        placeholder="Milk"
        value={milk}
        onChange={(e) => setMilk(e.target.value)}
      />
      <input type="submit" value="Add To Order" />
    </form>
  );
};

export default AddDrink;
