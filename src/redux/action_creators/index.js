import {
  GET_CHARACTERS,
  GET_CHARACTER,
  GET_CHARACTER_COMICS,
  GET_COMICS,
  GET_EVENTS,
  // GET_CREATORS,
} from "../actions";
import md5 from "js-md5";

const PUBLIC_KEY = "90f3c7ccb35efbb76e4bc98668685d38";
const TIME_STAMP = Date.now().toString();

const hashGenerator = () => {
  const PRIVATE_KEY = "fd9435ff14b92b7935b7cb39495860414f142707";
  const HASH = md5.create();
  HASH.update(TIME_STAMP + PRIVATE_KEY + PUBLIC_KEY);
  return HASH.hex();
};

export const getCharacters = (character) => {
  const hash = hashGenerator();
  const URL = `https://gateway.marvel.com:443/v1/public/characters?ts=${TIME_STAMP}&nameStartsWith=${character}&limit=50&apikey=${PUBLIC_KEY}&hash=${hash}`;
  return (dispatch) => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: GET_CHARACTERS, payload: data.data.results });
        console.log(data.data.results);
      })
      .catch((err) => console.error(err));
  };
};

export const getCharacter = (id) => {
  const hash = hashGenerator();
  const URL = `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=${TIME_STAMP}&apikey=${PUBLIC_KEY}&hash=${hash}`;
  return (dispatch) => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: GET_CHARACTER, payload: data.data.results[0] })
      )
      .catch((err) => console.error(err));
  };
};

export const getCharacterComics = (id) => {
  const hash = hashGenerator();
  const URL = `https://gateway.marvel.com:443/v1/public/characters/${id}/comics?ts=${TIME_STAMP}&limit=50&apikey=${PUBLIC_KEY}&hash=${hash}`;
  return (dispatch) => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: GET_CHARACTER_COMICS, payload: data.data.results })
      )
      .catch((err) => console.error(err));
  };
};

export const getComics = (format) => {
  const hash = hashGenerator();
  const URL = `https://gateway.marvel.com:443/v1/public/comics?format=${format}&noVariants=true&ts=${TIME_STAMP}&limit=50&apikey=${PUBLIC_KEY}&hash=${hash}`;
  return (dispatch) => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: GET_COMICS, payload: data.data.results });
        console.log(data.data.results);
      })
      .catch((err) => console.error(err));
  };
};

export const getEvents = () => {
  const hash = hashGenerator();
  const URL = `https://gateway.marvel.com:443/v1/public/events?creators=30&limit=50&ts=${TIME_STAMP}&apikey=${PUBLIC_KEY}&hash=${hash}`;
  return (dispatch) => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: GET_EVENTS, payload: data.data.results });
        console.log(data.data.results);
      })
      .catch((err) => console.error(err));
  };
};

// export const getCreators = (creator) => {
//   const PUBLIC_KEY = "90f3c7ccb35efbb76e4bc98668685d38";
//   const PRIVATE_KEY = "fd9435ff14b92b7935b7cb39495860414f142707";
//   const TIME_STAMP = Date.now().toString();
//   const HASH = md5.create();
//   HASH.update(TIME_STAMP + PRIVATE_KEY + PUBLIC_KEY);
//   const URL = `https://gateway.marvel.com:443/v1/public/creators?nameStartsWith=${creator}&ts=${TIME_STAMP}&apikey=${PUBLIC_KEY}&hash=${HASH.hex()}
//   `;
//   return (dispatch) => {
//     fetch(URL)
//       .then((response) => response.json())
//       .then((data) => {
//         dispatch({ type: GET_CREATORS, payload: data.data.results });
//         console.log(data.data.results);
//       })
//       .catch((err) => console.error(err));
//   };
// };
