import axios from "axios";
import { BASE_URL } from "../../utils/constants/variaveis";

export async function getAbility(name) {
  const Url = `${BASE_URL}/ability/${name}`;
  const response = await axios.get(`${Url}`);
  const data = response.data.effect_entries;

  return data;
}
