import { Link } from 'react-router-dom';

import dog2 from '../../../../public/assets/img/dog-02.jpg';
import dog4 from '../../../../public/assets/img/dog-04.jpg';
import bird02 from '../../../../public/assets/img/bird-02.jpg';
import cat01 from '../../../../public/assets/img/cat-01.jpg';
import cat03 from '../../../../public/assets/img/cat-03.jpg';
import cameleon01 from '../../../../public/assets/img/cameleon-01.jpg';
import rabbit from '../../../../public/assets/img/rabbit-01.jpg';

const Hero = () => {
  return (
    <>
      <section className="text-black body-font mb-10">
        <div class="container mx-auto flex px-10 py-5 md:flex-row flex-col items-center">
          <div class="lg:flex-grow flex flex-col md:w-10 md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font tracking-wide sm:text-3xl md:text-6xl xl:text-7xl mb-4 font-bold ">
              Trouver votre nouveau compagnon
            </h1>
            <p class="mb-8 leading-relaxed opacity-60 ">
              Ecrivez une nouvelle histoire. Créer de nouveau lien. Ils sont beaux et plein
              d'énergie, prêt à révigourer vos soirées. Ils n'attendent que vous pour faire exploser
              toute leur joies et bonne humeur. <br />
              Vous hésitez encore ? Nos animaux recoivent les meilleurs traitements.
            </p>
            <div class="flex justify-center">
              <Link to="/animal/recherche">
                <button class="inline-flex text-white bg-teal-400 py-2 px-4 focus:outline-none hover:bg-opacity-80 rounded text-sm">
                  Adopter maintenant
                </button>
              </Link>
            </div>
          </div>
          <div
            id="pattern"
            class="lg:max-w-xl lg:w-full xl:w-5/6 bg-contain bg-no-repeat md:ml-10 xl:mr-16"
          >
            <div className="w-full flex gap-2 justify-center ">
              <img
                className="object-cover object-center rounded-xl w-36 h-56"
                alt="dog"
                src={rabbit}
              />
              <img
                className="object-cover object-center rounded-xl w-36 h-56"
                alt="hero 208 X 145"
                src={cat01}
              />
            </div>
            <div className="w-full flex gap-1 justify-center items-center my-2">
              <img
                className="object-cover object-center rounded-xl w-3/12 h-56"
                alt="hero 208 X 145"
                src={cameleon01}
              />
              <img
                className="object-cover object-center rounded-xl w-6/12 h-56"
                alt="hero 208 X 145"
                src={dog4}
              />
              <img
                className="object-cover object-right rounded-xl w-3/12 h-56"
                alt="hero 208 X 145"
                src={cat03}
              />
            </div>
            <div className="w-full flex gap-2 justify-center">
              <img
                className="object-cover object-center rounded-xl w-36 h-52"
                alt="hero 208 X 145"
                src={bird02}
              />
              <img
                className="object-cover object-bottom rounded-xl w-36 h-52"
                alt="hero 208 X 145"
                src={dog2}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
