import React from "react";
import NoteSearchInput from "./NoteSearchInput";

const Header = ({ searchKeyword, searchHandler }) => {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <NoteSearchInput searchKeyword={searchKeyword} searchHandler={searchHandler} />
    </div>
  );
};

export default Header;
