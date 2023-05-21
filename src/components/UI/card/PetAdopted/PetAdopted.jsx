const PetAdopted = ({ image, name }) => {
  return (
    <div className="w-full mb-4 max-w-sm bg-teal-500 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center pb-10">
        <img class="w-24 h-24 my-3 rounded-full shadow-lg" src={image} />
        <h5 className="mb-1 text-xl font-medium text-gray-100 dark:text-white">{name}</h5>
        <span className="text-sm text-gray-200 dark:text-gray-400">Vous Venez d'adopté {name}</span>
      </div>
    </div>
  );
};

export default PetAdopted;
