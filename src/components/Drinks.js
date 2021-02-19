import Drink from "./Drink";

const Drinks = ({ drinks, onAdd }) => {
  return (
    <div className="drinks">
      {drinks.map((drink) => (
        <Drink key={drink.id} drink={drink} onAdd={onAdd} />
      ))}
    </div>
  );
};

export default Drinks;
