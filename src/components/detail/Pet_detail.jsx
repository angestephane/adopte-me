import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import AdoptedPetContext from '../../utility/adoptedPetContext';
import Chargement from '../UI/spinner/Chargement';
import PetCard from '../pet_card/PetCard';
import Modal from '../modal/Modal';

import fetchPet from '../../utility/fetchPet';

import './pet_detail.css';
import ErrorBoundary from '../error/ErrorBoundary';

const PetDetails = () => {
  const [modal, setModal] = useState(false);
  const [_, setAdoptedPet] = useContext(AdoptedPetContext);

  const navigate = useNavigate();

  function handlerModal() {
    setModal(true);
  }

  const { id } = useParams();
  /**
   * @todo : indique dans le useQuery :
   * si tu ne dispose pas de details/id dans le cache
   * execute la fonction fetchPet
   * (detail: nom du fetch et id la clé qui la être passée
   * à l'index 1 du tableau queryKey dans la fonction fetchPet)
   *  avec ses informations.
   */
  const results = useQuery(['details', id], fetchPet);

  if (results.isError) {
    return (
      <div className="loading-pane">
        <h2>Désolé on a badé...</h2>
      </div>
    );
  }

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <Chargement />
      </div>
    );
  }
  const pet = results.data.pets[0];

  return (
    <div className="detail-pet">
      <PetCard
        image={pet.images}
        name={pet.name}
        breed={pet.breed}
        city={pet.city}
        state={pet.state}
        description={pet.description}
        onClick={handlerModal}
      />

      {modal ? (
        <Modal>
          <div id="modal">
            <div>
              <h1>Aimeriez adopter {pet.name}?</h1>
              <div className="option">
                <button
                  className="yes"
                  onClick={() => {
                    setAdoptedPet(pet);
                    navigate('/');
                  }}
                >
                  Oui
                </button>
                <button className="no" onClick={() => setModal(false)}>
                  Je vais encore réfléchir
                </button>
              </div>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

function DetailErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <PetDetails {...props} />
    </ErrorBoundary>
  );
}

export default DetailErrorBoundary;
