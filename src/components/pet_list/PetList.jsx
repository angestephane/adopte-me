import React from 'react';
import './petList.css';
import Pet from '../pet/Pet';

const PetList = ({ pets }) => {
  return (
    <div className="row">
      {!pets.length ? (
        <h2 className="not-found-pets">Aucun animal trouvé</h2>
      ) : (
        pets.map((animal) => (
          <Pet
            key={animal.id}
            id={animal.id}
            name={animal.name}
            animal={animal.animal}
            breed={animal.breed}
            images={animal.images}
            location={`${animal.city}, ${animal.state}`}
          />
        ))
      )}
    </div>
  );
};

export default PetList;
