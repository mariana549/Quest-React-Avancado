import axios from "axios";
import { BASE_URL } from "../../utils/constants/variaveis";

export async function getPokemon(name) {
  const Url = `${BASE_URL}/pokemon/${name}`;
  const response = await axios.get(`${Url}`);
  const results = response.data;
  return results;
}
