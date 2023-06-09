import agenceImage from '../../../../public/assets/img/agence-image.jpg';

const About = () => {
  return (
    <>
      <section className="relative bg-blueGray-50">
        <div className="container mx-auto">
          <div className="container mx-auto flex px-10 py-5 md:flex-row flex-col items-center">
            <div class="flex flex-col items-center m-4 md:px-3 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl md:h-80 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img
                class="object-cover w-full rounded-t-lg h-60 md:h-72 md:w-48 md:rounded-none md:rounded-l-lg"
                src={agenceImage}
                alt=""
              />
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Adopt me
                </h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Est une agence de protection et d'animaux domestique.
                </p>
              </div>
            </div>
            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"></div>
                      <h6 className="text-xl mb-1 font-semibold">Choix 1</h6>
                      <p className="mb-4 text-blueGray-500">
                        Notus JS comes with a huge number of Fully Coded CSS components.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-violet-400">
                        <i className="fas fa-drafting-compass"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Choix 2</h6>
                      <p className="mb-4 text-blueGray-500">
                        We also feature many dynamic components for React, NextJS, Vue and Angular.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-rose-400">
                        <i className="fas fa-newspaper"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Choix 3</h6>
                      <p className="mb-4 text-blueGray-500">
                        This extension also comes with 3 sample pages. They are fully coded so you
                        can start working instantly.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-amber-400">
                        <i className="fas fa-file-alt"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Choix 4</h6>
                      <p className="mb-4 text-blueGray-500">
                        Built by developers for developers. You will love how easy is to to work
                        with Notus JS.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
