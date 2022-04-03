import axios from 'axios';
export const baseUrl = 'https://bayut.p.rapidapi.com'

// headers: {
//     'x-rapidapi-host': 'bayut.p.rapidapi.com',
//     'x-rapidapi-key': '4d5e062aefmsh4cb6acc03370944p12ed7ajsnbdefa16d1074'
//   }

export const fetchApi = async (url)=>{
    const {data} = await axios.get((url),{
    headers: {
    'x-rapidapi-host': 'bayut.p.rapidapi.com',
    'x-rapidapi-key': '4d5e062aefmsh4cb6acc03370944p12ed7ajsnbdefa16d1074'
  } 
    });

    return data;
}