import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <p>Select a song</p>;
  }
  return (
    <div>
      <h3>Details for selected song</h3>
      <p>Title: {song.title}</p>
      <p>Duration: {song.duration}</p>
      <p>
        Is it badass?{" "}
        {song.title === "Wu tang clan aint nothing to fuck with"
          ? `It ain't nothing to fuck with`
          : "Hell yeah!"}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
