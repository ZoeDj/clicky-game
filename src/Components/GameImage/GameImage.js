import "./GameImage.css";

function GameImage(props) {
  return (
    <div className="img-container">
      <img
        src={props.image}
        alt={props.name}
        onClick={() => props.clickedImage(props.id)}
      />
    </div>
  );
}

export default GameImage;
