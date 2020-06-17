import { combineReducers } from "redux";

const songReducer = () => {
  return [
    { title: "Wu tang clan aint nothing to fuck with", duration: "4:05" },
    { title: "Make way for a panther", duration: "3:05" },
    { title: "Dang!", duration: "4:33" },
    { title: "Shimmy shimmy ya", duration: "4:20" },
    { title: "She watch channel zero", duration: "2:55" },
  ];
};

const songSelectedReducer = (songSelected = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return songSelected;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: songSelectedReducer,
});
