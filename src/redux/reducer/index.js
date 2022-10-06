import {
  GET_CHARACTERS,
  GET_CHARACTER,
  GET_CHARACTER_COMICS,
  GET_COMICS,
} from "../actions";

const initialState = {
  characters: [],
  character: {},
  characterComics: [],
  comics: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      };

    case GET_CHARACTER:
      return {
        ...state,
        character: action.payload,
      };

    case GET_CHARACTER_COMICS:
      return {
        ...state,
        characterComics: action.payload,
      };

    case GET_COMICS:
      return {
        ...state,
        comics: action.payload,
      };

    default:
      return state;
  }
}
