import React, { useState, useContext } from 'react';
import { useQuery } from '@tanstack/react-query';

import PetList from '../pet_list/PetList';
import AdoptedPetContext from '../../utility/adoptedPetContext';

import useBreedList from '../../hooks/useBreedList';
import fetchSearch from '../../utility/fetchSearch';
import './form.css';

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
  const pets = results?.data?.pets ?? [];

  const obj = {};

  return (
    <div className="container">
      <div className="row">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            obj.animal = formData.get('animal') ?? '';
            obj.lieu = formData.get('lieu') ?? '';
            obj.race = formData.get('race') ?? '';
            setRequestParams(obj);
          }}
        >
          <div className="input-location">
            <label htmlFor="taskName">Lieu</label>
            <input type="text" id="taskName" placeholder="Lieu" name="lieu" />
            {/** Animal Option */}
            {/**
             * Selon l'animal une liste de race
             * est affichée.
             * Quand un nouvel animal est
             * sélectionné on affect un champ
             * vide à la liste de race
             */}
          </div>

          <div className="select-animal">
            <label htmlFor="animal">Animal</label>
            <select
              id="animal"
              name="animal"
              onChange={(e) => {
                setAnimal(e.target.value);
              }}
            >
              <option />
              {ANIMALS.map((animal) => (
                <option className="options" key={animal} value={animal}>
                  {animal}
                </option>
              ))}
            </select>
          </div>

          <div className="select-race">
            {/** Race Option */}
            {/**
             * La race depend de l'animal
             * La liste de race est cliquable
             * quand l'animal est sélectionné
             */}
            <label htmlFor="race">Race</label>
            <select id="race" name="race" disabled={races.length === 0}>
              <option />
              {races.map((item) => (
                <option className="options" key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <button>Rechercher</button>
        </form>

        {adoptedPet ? (
          <div className="figure">
            <figure>
              <div className="image-animal">
                <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
              </div>
              <figcaption>
                <h2>vous avez adopté {adoptedPet.name}</h2>
              </figcaption>
            </figure>
          </div>
        ) : null}
      </div>

      <PetList pets={pets} />
    </div>
  );
};

export default FormToFilterPet;
