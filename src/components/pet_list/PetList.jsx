import React from 'react';
import { Link } from 'react-router-dom';
import './petList.css';
import Pet from '../pet/Pet';

const PetList = ({ pets }) => {
  console.log(pets);
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        {!pets.length ? (
          <h1 className="w-48 h-2 mx-auto">Aucun animal trouvé.</h1>
        ) : (
          <div className="py-2">
            <div className="mx-auto grid max-w-7xl  grid-cols-1 gap-10 p-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {pets.map((animal) => (
                <Pet
                  key={animal.id}
                  id={animal.id}
                  name={animal.name}
                  animal={animal.animal}
                  breed={animal.breed}
                  images={animal.images}
                  location={`${animal.city}, ${animal.state}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PetList;
