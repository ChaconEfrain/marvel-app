import {
  GET_CHARACTERS,
  RESET_CHARACTERS,
  GET_CHARACTER,
  GET_CHARACTER_COMICS,
  GET_CHARACTER_EVENTS,
  RESET_CHARACTER_COMICS,
  RESET_CHARACTER_EVENTS,
  GET_COMICS,
  GET_COMIC,
  GET_EVENTS,
  ADD_CHARACTER_TO_FAVOURITES,
  REMOVE_CHARACTER_FROM_FAVOURITES,
  ADD_COMIC_TO_FAVOURITES,
  REMOVE_COMIC_FROM_FAVOURITES,
  // GET_SERIES,
  GET_STORIES,
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

export const resetCharacters = () => {
  console.log("reset");
  return {
    type: RESET_CHARACTERS,
  };
};

export const getCharacter = (name) => {
  const hash = hashGenerator();
  const URL = `https://gateway.marvel.com:443/v1/public/characters?name=${name}&ts=${TIME_STAMP}&apikey=${PUBLIC_KEY}&hash=${hash}`;
  return (dispatch) => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: GET_CHARACTER, payload: data.data.results[0] });
        console.log(data.data.results[0]);
      })
      .catch((err) => console.error(err));
  };
};

export const getCharacterComics = (id) => {
  const hash = hashGenerator();
  const URL = `https://gateway.marvel.com:443/v1/public/characters/${id}/comics?ts=${TIME_STAMP}&limit=50&apikey=${PUBLIC_KEY}&hash=${hash}`;
  return (dispatch) => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data.results);
        dispatch({ type: GET_CHARACTER_COMICS, payload: data.data.results });
      })
      .catch((err) => console.error(err));
  };
};

export const getCharacterEvents = (id) => {
  const hash = hashGenerator();
  const URL = `https://gateway.marvel.com:443/v1/public/characters/${id}/events?ts=${TIME_STAMP}&apikey=${PUBLIC_KEY}&hash=${hash}`;
  return (dispatch) => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data.results);
        dispatch({ type: GET_CHARACTER_EVENTS, payload: data.data.results });
      })
      .catch((err) => console.error(err));
  };
};

export const resetCharacterComics = () => {
  return {
    type: RESET_CHARACTER_COMICS,
  };
};

export const resetCharacterEvents = () => {
  return {
    type: RESET_CHARACTER_EVENTS,
  };
};

export const getComics = (character) => {
  const hash = hashGenerator();
  const URL = `https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=${character}&ts=${TIME_STAMP}&apikey=${PUBLIC_KEY}&hash=${hash}`;
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

export const getComic = (id) => {
  const hash = hashGenerator();
  const URL = `https://gateway.marvel.com:443/v1/public/comics/${id}?ts=${TIME_STAMP}&apikey=${PUBLIC_KEY}&hash=${hash}`;
  return (dispatch) => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: GET_COMIC, payload: data.data.results[0] });
        console.log(data.data.results[0]);
      })
      .catch((err) => console.error(err));
  };
};

export const getEvents = (eventName) => {
  const hash = hashGenerator();
  const URL = `https://gateway.marvel.com:443/v1/public/events?nameStartsWith=${eventName}&ts=${TIME_STAMP}&limit=10&apikey=${PUBLIC_KEY}&hash=${hash}`;
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

export const addCharacterToFavourites = (id) => {
  return {
    type: ADD_CHARACTER_TO_FAVOURITES,
    payload: id,
  };
};

export const removeCharacterFromFavourites = (id) => {
  return {
    type: REMOVE_CHARACTER_FROM_FAVOURITES,
    payload: id,
  };
};

export const addComicToFavourites = (id) => {
  return {
    type: ADD_COMIC_TO_FAVOURITES,
    payload: id,
  };
};

export const removeComicFromFavourites = (id) => {
  return {
    type: REMOVE_COMIC_FROM_FAVOURITES,
    payload: id,
  };
};

// export const getSeries = () => {
//   const hash = hashGenerator();
//   const URL = `https://gateway.marvel.com:443/v1/public/series?creators=30&limit=50&ts=${TIME_STAMP}&apikey=${PUBLIC_KEY}&hash=${hash}`;
//   return (dispatch) => {
//     fetch(URL)
//       .then((response) => response.json())
//       .then((data) => {
//         dispatch({ type: GET_SERIES, payload: data.data.results });
//         console.log(data.data.results);
//       })
//       .catch((err) => console.error(err));
//   };
// };

export const getStories = () => {
  const hash = hashGenerator();
  const URL = `https://gateway.marvel.com:443/v1/public/stories?creators=30&limit=10&ts=${TIME_STAMP}&apikey=${PUBLIC_KEY}&hash=${hash}`;
  return (dispatch) => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: GET_STORIES, payload: data.data.results });
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
