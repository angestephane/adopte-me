import React, { useState, useContext } from 'react';
import { useQuery } from '@tanstack/react-query';

import PetList from '../../pages/Show-pet/components/PetList';
import AdoptedPetContext from '../../utility/adoptedPetContext';

import useBreedList from '../../hooks/useBreedList';
import fetchSearch from '../../utility/fetchSearch';
import PetAdopted from '../UI/card/PetAdopted/PetAdopted';

const ANIMALS = ['cat', 'dog', 'bird', 'rabbit', 'reptile'];

const FormToFilterPet = (props) => {
  const [requestParams, setRequestParams] = useState({
    animal: '',
    lieu: '',
    race: '',
  });
  const [_animal, setAnimal] = useState('');
  const [races] = useBreedList(_animal);

  const [adoptedPet, _] = useContext(AdoptedPetContext);
  const results = useQuery(['search', requestParams], fetchSearch);

  const submiteHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = {
      animal: formData.get('animal') ?? '',
      lieu: formData.get('lieu') ?? '',
      race: formData.get('race') ?? '',
    };
    setRequestParams(obj);
  };

  const pets = results?.data?.pets ?? [];

  return (
    <div className="flex md:flex-row gap-4 flex-col w-full justify-center">
      <div>
        {adoptedPet ? <PetAdopted image={adoptedPet.images[0]} name={adoptedPet.name} /> : null}
        <form
          className='className="flex bg-white w-full rounded-md py-10 px-12 mb-5 shadow-lg'
          onSubmit={submiteHandler}
        >
          <h1 className="text-xl mt-2 mb-2 text-center font-semibold text-gray-600">
            Filtrer selon vos préférences
          </h1>

          <label
            htmlFor="localisation"
            className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
          >
            Localisation
          </label>
          <input
            type="text"
            id="localisation"
            name="lieu"
            className="bg-gray-50 border mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Localisation"
          />

          <label
            htmlFor="animal"
            className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
          >
            Choisir un animal
          </label>
          <select
            id="animal"
            name="animal"
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
            className="bg-gray-50 border mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option />
            {ANIMALS.map((animal) => (
              <option className="options" key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>

          <label
            htmlFor="race"
            className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
          >
            Choisir une race
          </label>
          <select
            id="race"
            name="race"
            disabled={races.length === 0}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option />
            {races.map((item) => (
              <option className="options" key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <button className="text-white mt-4 justify-center bg-teal-500  hover:opacity-80 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Filtre
          </button>
        </form>
      </div>

      <PetList pets={pets} />
    </div>
  );
};

export default FormToFilterPet;
