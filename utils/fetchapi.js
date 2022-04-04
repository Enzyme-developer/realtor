// import axios from 'axios';
// export const baseUrl = 'https://bayut.p.rapidapi.com'

// // headers: {
// //     'x-rapidapi-host': 'bayut.p.rapidapi.com',
// //     'x-rapidapi-key': '4d5e062aefmsh4cb6acc03370944p12ed7ajsnbdefa16d1074'
// //   }

// export const fetchApi = async (url)=>{
//     const {data} = await axios.get((url),{
//     headers: {
//     'x-rapidapi-host': 'bayut.p.rapidapi.com',
//     'x-rapidapi-key': '4d5e062aefmsh4cb6acc03370944p12ed7ajsnbdefa16d1074'
//   } 
//     });

//     return data;
// }


import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
      'X-RapidAPI-Key': 'e4a857be5cmsh09ebc54b46beaa4p127d24jsnd3c58aaa2a16'
    },
  });
    
  return data;
}