import {
  GET_CHARACTERS,
  GET_CHARACTER,
  GET_CHARACTER_COMICS,
  GET_COMICS,
  GET_EVENTS,
  GET_SERIES,
  // GET_CREATORS,
} from "../actions";

const initialState = {
  characters: [],
  character: {},
  characterComics: [],
  comics: [],
  events: [],
  series: [],
  // creators: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTERS:
      const chars = action.payload.filter(
        (character) =>
          character.thumbnail.path.split("/").pop() !== "image_not_available" &&
          character.thumbnail.extension !== "gif"
      );
      return {
        ...state,
        characters: chars,
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
      const comics = action.payload.filter(
        (comic) =>
          comic.thumbnail.path.split("/").pop() !== "image_not_available" &&
          comic.thumbnail.extension !== "gif"
      );
      return {
        ...state,
        comics: comics,
      };

    case GET_EVENTS:
      return {
        ...state,
        events: action.payload,
      };

    case GET_SERIES:
      return {
        ...state,
        series: action.payload,
      };

    // case GET_CREATORS:
    //   return {
    //     ...state,
    //     creators: action.payload,
    //   };

    default:
      return state;
  }
}
