import React, { useState, useContext } from "react";
import { useQuery } from "@tanstack/react-query";

import ResultSearch from "../display_search_result/ResultSearch";
import AdoptedPetContext from "../../utility/adoptedPetContext";

import useBreedList from "../../hooks/useBreedList";
import fetchSearch from "../../utility/fetchSearch";
import "./SearchParams.css";

const ANIMALS = ["cat", "dog", "bird", "rabbit", "reptile"];

const SearchParams = (props) => {
  const [requestParams, setRequestParams] = useState({
    animal: "",
    lieu: "",
    race: "",
  });
  const [_animal, setAnimal] = useState("");
  const [races] = useBreedList(_animal);

  const [adoptedPet, _] = useContext(AdoptedPetContext);

  const results = useQuery(["search", requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];

  const obj = {};

  return (
    <div className="container">
      <div>
        {adoptedPet ? (
          <div>
            vous avez adopté {adoptedPet.name}
            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
          </div>
        ) : null}
      </div>

      <div className="row">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            obj.animal = formData.get("animal") ?? "";
            obj.lieu = formData.get("lieu") ?? "";
            obj.race = formData.get("race") ?? "";
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
                <option key={animal} value={animal}>
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
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <button>Rechercher</button>
        </form>
      </div>

      <ResultSearch pets={pets} />
    </div>
  );
};

export default SearchParams;
