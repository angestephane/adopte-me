import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "../utility/fetchBreedList";

export default function useBreedList(animal) {
  const results = useQuery(["breeds", animal], fetchBreedList);
  return [results?.data?.breeds ?? [], results.status]; // ?? : si results.data.breeds est undefined, alors on retourne un tableau vide
}
