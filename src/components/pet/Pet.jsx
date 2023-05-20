import { Link } from 'react-router-dom';

const Pet = ({ name, animal, breed, images, location, id }) => {
  let hero = 'http://pets-images.dev-apis.com/pets/none.jpg';

  if (images.length) {
    hero = images[0];
  }
  return (
    <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform">
      <div class="relative h-3/5 flex items-end overflow-hidden rounded-xl">
        <img src={hero} />
      </div>

      <div class="mt-1 p-2">
        <h2 class="text-slate-700">{name}</h2>
        <p class="mt-1 text-base text-slate-400">
          {animal} - {breed} , {location} Portugal
        </p>

        <div class="mt-3 flex items-end justify-end">
          <div class="flex items-center space-x-1.5 rounded-lg bg-teal-500 px-4 py-1 text-white duration-100 hover:opacity-80">
            <Link to={`/details/${id}`}>
              <button class="text-sm">voir detail</button>
            </Link>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
            </svg>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Pet;
