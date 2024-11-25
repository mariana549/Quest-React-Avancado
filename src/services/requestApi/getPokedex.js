import { BASE_URL } from '../../utils/constants/variaveis';
import axios from "axios";

export async function getPokedex(limit, offset) {
  const Url = `${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`;
  const response = await axios.get(`${Url}`);
  const results = response.data.results;
  return results;
}
