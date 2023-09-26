import React from "react";
import NoteItem from "./NoteItem";

const NotesList = ({ notes, onDelete, onArchived, onUnArchived }) => {
  return (
    <div className="notes-list">
      {notes.length === 0 ? <p className="notes-list__empty-message">Tidak Ada Catatan</p> : notes.map((note) => <NoteItem key={note.id} id={note.id} onDelete={onDelete} onArchived={onArchived} onUnArchived={onUnArchived} {...note} />)}
    </div>
  );
};

export default NotesList;
