import React from "react";

const NoteSearchInput = ({ searchHandler, searchKeyword }) => {
  return <input className="note-search" type="text" placeholder="🔍 Cari..." value={searchKeyword} onChange={searchHandler}></input>;
};

export default NoteSearchInput;
