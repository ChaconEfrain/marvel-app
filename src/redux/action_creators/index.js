import {
  GET_CHARACTERS,
  GET_CHARACTER,
  GET_CHARACTER_COMICS,
} from "../actions";
import md5 from "js-md5";

export const getCharacters = (character) => {
  const PUBLIC_KEY = "90f3c7ccb35efbb76e4bc98668685d38";
  const PRIVATE_KEY = "fd9435ff14b92b7935b7cb39495860414f142707";
  const TIME_STAMP = Date.now().toString();
  const HASH = md5.create();
  HASH.update(TIME_STAMP + PRIVATE_KEY + PUBLIC_KEY);
  const URL = `https://gateway.marvel.com:443/v1/public/characters?ts=${TIME_STAMP}nameStartsWith=${character}&apikey=${PUBLIC_KEY}&hash=${HASH.hex()}`;
  return (dispatch) => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: GET_CHARACTERS, payload: data.data.results })
      )
      .catch((err) => console.error(err));
  };
};

export const getCharacter = (id) => {
  const PUBLIC_KEY = "90f3c7ccb35efbb76e4bc98668685d38";
  const PRIVATE_KEY = "fd9435ff14b92b7935b7cb39495860414f142707";
  const TIME_STAMP = Date.now().toString();
  const HASH = md5.create();
  HASH.update(TIME_STAMP + PRIVATE_KEY + PUBLIC_KEY);
  const URL = `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=${TIME_STAMP}&apikey=${PUBLIC_KEY}&hash=${HASH.hex()}`;
  return (dispatch) => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: GET_CHARACTER, payload: data.data.results })
      )
      .catch((err) => console.error(err));
  };
};

export const getCharacterComics = (id) => {
  const PUBLIC_KEY = "90f3c7ccb35efbb76e4bc98668685d38";
  const PRIVATE_KEY = "fd9435ff14b92b7935b7cb39495860414f142707";
  const TIME_STAMP = Date.now().toString();
  const HASH = md5.create();
  HASH.update(TIME_STAMP + PRIVATE_KEY + PUBLIC_KEY);
  const URL = `https://gateway.marvel.com:443/v1/public/characters/${id}/comics?ts=${TIME_STAMP}&apikey=${PUBLIC_KEY}&hash=${HASH.hex()}`;
  return (dispatch) => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: GET_CHARACTER_COMICS, payload: data.data.results })
      )
      .catch((err) => console.error(err));
  };
};
