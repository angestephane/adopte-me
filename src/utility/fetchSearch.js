async function fetchSearch({ queryKey }) {
  const { animal, lieu, race } = queryKey[1];
  const res = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${lieu}&breed=${race}`,
  );

  if (!res.ok) {
    throw new Error(`Impossible de récupérer les données - ${animal}, ${lieu}, ${race}`);
  }

  return res.json();
}

export default fetchSearch;
