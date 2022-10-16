import {
  GET_CHARACTERS,
  RESET_CHARACTERS,
  GET_CHARACTER,
  GET_CHARACTER_COMICS,
  GET_CHARACTER_EVENTS,
  RESET_CHARACTER_COMICS,
  GET_COMICS,
  GET_COMIC,
  GET_EVENTS,
  ADD_CHARACTER_TO_FAVOURITES,
  // GET_SERIES,
  GET_STORIES,
  // GET_CREATORS,
} from "../actions";

const initialState = {
  characters: [],
  character: {},
  characterComics: [],
  characterEvents: [],
  comics: [],
  comic: {},
  events: [],
  // series: [],
  stories: [],
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
      if (!action.payload.length)
        return {
          ...state,
          characterComics: "N/A",
        };
      const filteredComics = action.payload.filter(
        (comic) =>
          comic.thumbnail.path.split("/").pop() !== "image_not_available" &&
          comic.thumbnail.extension !== "gif"
      );
      return {
        ...state,
        characterComics: filteredComics,
      };

    case RESET_CHARACTER_COMICS:
      return {
        ...state,
        characterComics: [],
      };

    case RESET_CHARACTERS:
      return {
        ...state,
        characters: [],
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

    case GET_COMIC:
      return {
        ...state,
        comic: action.payload,
      };

    case GET_EVENTS:
      return {
        ...state,
        events: action.payload,
      };

    // case GET_SERIES:
    //   return {
    //     ...state,
    //     series: action.payload,
    //   };

    case GET_STORIES:
      return {
        ...state,
        stories: action.payload,
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
