const fetchBreedList = async ({ queryKey }) => {
  const animal = queryKey[1];

  if (!animal) return [];

  const apiRes = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );
  if (!apiRes.ok) {
    throw new Error(
      `Une erreur est survenue lors de la récupération de la ressource - breeds/${animal}`
    );
  }

  // Pas besoin d'un await ici, compte tenu du await plus haut
  return apiRes.json();
};

export default fetchBreedList;
