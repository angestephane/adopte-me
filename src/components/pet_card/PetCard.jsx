import Carousel from "../carrousel/Carousel";
import "./petCard.css";

const PetCard = ({ image, name, breed, city, state, description, onClick }) => {
  return (
    <div className="card">
      <Carousel images={image} />
      <div className="content">
        <span className="title">
          {name} - {breed} - {city}, {state}
        </span>

        <p className="desc">{description}</p>

        <button onClick={onClick} className="action">
          Adopte {name}
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
};

export default PetCard;
