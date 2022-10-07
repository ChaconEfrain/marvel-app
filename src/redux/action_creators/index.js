import {
  GET_CHARACTERS,
  GET_CHARACTER,
  GET_CHARACTER_COMICS,
  GET_COMICS,
  GET_EVENTS,
  GET_SERIES,
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

export const getSeries = () => {
  const hash = hashGenerator();
  const URL = `https://gateway.marvel.com:443/v1/public/series?creators=30&limit=50&ts=${TIME_STAMP}&apikey=${PUBLIC_KEY}&hash=${hash}`;
  return (dispatch) => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: GET_SERIES, payload: data.data.results });
        console.log(data.data.results);
      })
      .catch((err) => console.error(err));
  };
};

export const getStories = () => {
  const hash = hashGenerator();
  const URL = `https://gateway.marvel.com:443/v1/public/stories?creators=30&limit=50&ts=${TIME_STAMP}&apikey=${PUBLIC_KEY}&hash=${hash}`;
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

// {
//   "id": 2113,
//   "title": "Adventure Into Fear (1970 - 1975)",
//   "description": null,
//   "resourceURI": "http://gateway.marvel.com/v1/public/series/2113",
//   "urls": [
//     {
//       "type": "detail",
//       "url": "http://marvel.com/comics/series/2113/adventure_into_fear_1970_-_1975?utm_campaign=apiRef&utm_source=90f3c7ccb35efbb76e4bc98668685d38"
//     }
//   ],
//   "startYear": 1970,
//   "endYear": 1975,
//   "rating": "",
//   "type": "",
//   "modified": "2020-03-09T10:32:19-0400",
//   "thumbnail": {
//     "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/20/56fd2a4806e20",
//     "extension": "jpg"
//   },
//   "creators": {
//     "available": 40,
//     "collectionURI": "http://gateway.marvel.com/v1/public/series/2113/creators",
//     "items": [
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/creators/1186",
//         "name": "Jack Abel",
//         "role": "inker"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/creators/1523",
//         "name": "Vince Colletta",
//         "role": "inker"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/creators/314",
//         "name": "Neal Adams",
//         "role": "penciller (cover)"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/creators/1212",
//         "name": "Dan Adkins",
//         "role": "penciller (cover)"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/creators/125",
//         "name": "Frank Brunner",
//         "role": "penciller (cover)"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/creators/148",
//         "name": "Gil Kane",
//         "role": "penciller (cover)"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/creators/1216",
//         "name": "Rich Buckler",
//         "role": "artist"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/creators/808",
//         "name": "Howard Chaykin",
//         "role": "artist"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/creators/1519",
//         "name": "Frank Giacoia",
//         "role": "artist"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/creators/1767",
//         "name": "Janice Cohen",
//         "role": "colorist"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/creators/1747",
//         "name": "Petra Goldberg",
//         "role": "colorist"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/creators/1977",
//         "name": "Linda Lessmann",
//         "role": "colorist"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/creators/954",
//         "name": "Gerry Conway",
//         "role": "writer"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/creators/1245",
//         "name": "Mike Friedrich",
//         "role": "writer"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/creators/144",
//         "name": "Steve Gerber",
//         "role": "writer"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/creators/30",
//         "name": "Stan Lee",
//         "role": "writer"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/creators/1179",
//         "name": "George Evans",
//         "role": "penciler"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/creators/222",
//         "name": "Paul Gulacy",
//         "role": "penciler"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/creators/305",
//         "name": "Don Heck",
//         "role": "penciler"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/creators/196",
//         "name": "Jack Kirby",
//         "role": "penciller"
//       }
//     ],
//     "returned": 20
//   },
//   "characters": {
//     "available": 2,
//     "collectionURI": "http://gateway.marvel.com/v1/public/series/2113/characters",
//     "items": [
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009420",
//         "name": "Man-Thing"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009454",
//         "name": "Morbius"
//       }
//     ],
//     "returned": 2
//   },
//   "stories": {
//     "available": 62,
//     "collectionURI": "http://gateway.marvel.com/v1/public/series/2113/stories",
//     "items": [
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/stories/67144",
//         "name": "Adventures Into Fear 16 cover",
//         "type": "cover"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/stories/130693",
//         "name": "cover to Adventures Into Fear (1970) #10",
//         "type": "cover"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/stories/130694",
//         "name": "interior to Adventures Into Fear (1970) #10",
//         "type": "interiorStory"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/stories/130695",
//         "name": "cover to Adventures Into Fear (1970) #11",
//         "type": "cover"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/stories/130696",
//         "name": "interior to Adventures Into Fear (1970) #11",
//         "type": "interiorStory"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/stories/130697",
//         "name": "cover to Adventures Into Fear (1970) #12",
//         "type": "cover"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/stories/130698",
//         "name": "interior to Adventures Into Fear (1970) #12",
//         "type": "interiorStory"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/stories/130699",
//         "name": "cover to Adventures Into Fear (1970) #13",
//         "type": "cover"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/stories/130700",
//         "name": "interior to Adventures Into Fear (1970) #13",
//         "type": "interiorStory"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/stories/130701",
//         "name": "cover to Adventures Into Fear (1970) #14",
//         "type": "cover"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/stories/130702",
//         "name": "interior to Adventures Into Fear (1970) #14",
//         "type": "interiorStory"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/stories/130703",
//         "name": "cover to Adventures Into Fear (1970) #15",
//         "type": "cover"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/stories/130704",
//         "name": "interior to Adventures Into Fear (1970) #15",
//         "type": "interiorStory"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/stories/130705",
//         "name": "interior to Adventures Into Fear (1970) #16",
//         "type": "interiorStory"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/stories/130706",
//         "name": "cover to Adventures Into Fear (1970) #17",
//         "type": "cover"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/stories/130707",
//         "name": "interior to Adventures Into Fear (1970) #17",
//         "type": "interiorStory"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/stories/130708",
//         "name": "cover to Adventures Into Fear (1970) #18",
//         "type": "cover"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/stories/130709",
//         "name": "interior to Adventures Into Fear (1970) #18",
//         "type": "interiorStory"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/stories/130710",
//         "name": "cover to Adventures Into Fear (1970) #19",
//         "type": "cover"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/stories/130711",
//         "name": "interior to Adventures Into Fear (1970) #19",
//         "type": "interiorStory"
//       }
//     ],
//     "returned": 20
//   },
//   "comics": {
//     "available": 31,
//     "collectionURI": "http://gateway.marvel.com/v1/public/series/2113/comics",
//     "items": [
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/comics/90528",
//         "name": "Adventure Into Fear (1970) #1"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/comics/90529",
//         "name": "Adventure Into Fear (1970) #2"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/comics/90530",
//         "name": "Adventure Into Fear (1970) #3"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/comics/90531",
//         "name": "Adventure Into Fear (1970) #4"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/comics/90532",
//         "name": "Adventure Into Fear (1970) #5"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/comics/90533",
//         "name": "Adventure Into Fear (1970) #6"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/comics/90534",
//         "name": "Adventure Into Fear (1970) #7"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/comics/90535",
//         "name": "Adventure Into Fear (1970) #8"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/comics/90536",
//         "name": "Adventure Into Fear (1970) #9"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/comics/90537",
//         "name": "Adventure Into Fear (1970) #20"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/comics/90538",
//         "name": "Adventure Into Fear (1970) #21"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/comics/90539",
//         "name": "Adventure Into Fear (1970) #22"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/comics/90540",
//         "name": "Adventure Into Fear (1970) #23"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/comics/90541",
//         "name": "Adventure Into Fear (1970) #24"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/comics/90542",
//         "name": "Adventure Into Fear (1970) #25"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/comics/90543",
//         "name": "Adventure Into Fear (1970) #26"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/comics/90544",
//         "name": "Adventure Into Fear (1970) #27"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/comics/90545",
//         "name": "Adventure Into Fear (1970) #28"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/comics/90546",
//         "name": "Adventure Into Fear (1970) #29"
//       },
//       {
//         "resourceURI": "http://gateway.marvel.com/v1/public/comics/90547",
//         "name": "Adventure Into Fear (1970) #30"
//       }
//     ],
//     "returned": 20
//   },
//   "events": {
//     "available": 0,
//     "collectionURI": "http://gateway.marvel.com/v1/public/series/2113/events",
//     "items": [],
//     "returned": 0
//   },
//   "next": null,
//   "previous": null
// }
