const Button = ({ onClick }) => {
  return (
    <button className="view-btn" onClick={onClick}>
      <p>View Options</p>
    </button>
  );
};

export default Button;
