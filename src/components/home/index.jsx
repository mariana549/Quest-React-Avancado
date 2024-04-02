import axios from "axios"

export const FetchData = async () => {
   try {
      const urls = [];
      for (let i = 1; i <= 10; i++) {      
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`);
         const data = await response.data; 
         urls.push(data)
      }
      console.log(urls) 
   } catch (error) {
      console.error(`Error fetching Pokemon API: ${error.message}`)
   }
}