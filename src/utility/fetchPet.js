const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];

  const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
  if (!apiRes.ok) {
    throw new Error(
      `Une erreur est survenue lors de la récupération de la ressource - details/${id}`
    );
  }

  // Pas besoin d'un await ici, compte tenu du await plus haut
  return apiRes.json();
};

export default fetchPet;
