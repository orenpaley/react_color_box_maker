const Box = ({ width, height, backgroundColor, remove, id }) => {
  /** Delete num via parent fn */
  function handleRemove(e) {
    remove(e.target.parentElement);
  }
  return (
    <div
      className="Box"
      id={id}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        border: "2px black solid",
        backgroundColor: backgroundColor,
      }}
    >
      <button onClick={handleRemove}>X</button>
    </div>
  );
};

export default Box;
