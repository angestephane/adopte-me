import { Link } from 'react-router-dom';

import './pet.css';

const Animal = ({ name, animal, breed, images, location, id }) => {
  let hero = 'http://pets-images.dev-apis.com/pets/none.jpg';

  if (images.length) {
    hero = images[0];
  }
  return (
    <div className="figure">
      <figure>
        <Link to={`/details/${id}`}>
          <div className="image-animal">
            <img src={hero} />
          </div>
        </Link>
        <figcaption>
          <h2>{name}</h2>
          <p>
            {animal} - {breed} - {location}
          </p>
        </figcaption>
      </figure>
    </div>
  );
};

export default Animal;
