import axios from "axios"

export const FetchData = async () => {
   try {
      // const urls = [];
      // for (let i = 1; i <= 20; i++) {
      //    urls.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      // }
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
      console.log(response)

      const user = await response.data.results;
      console.log("user",  user) 

      if(!response.ok){
         throw new Error(`pokeApi returned status code ${response.status}`)
      }
   } catch (error) {
      console.error(`Error fetching Pokemon API: ${error.message}`)
   }

   return (
      <>
      <p>pokemon: </p>
      </>
   )
}