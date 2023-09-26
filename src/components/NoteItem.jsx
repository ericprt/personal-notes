import React from "react";
import NoteItemBody from "./NoteItemBody";
import { showFormattedDate } from "../utils/data";
import DeleteButton from "./DeleteButton";
import ArchivedButton from "./ArchivedButton";
import UnArchivedButton from "./UnArchivedButton";

const NoteItem = ({ title, createdAt, archived, body, id, onDelete, onArchived, onUnArchived }) => {
  const date = showFormattedDate(createdAt);
  return (
    <div className="note-item">
      <NoteItemBody title={title} createdAt={date} body={body} />
      <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete} />
        {archived ? <UnArchivedButton id={id} onUnArchived={onUnArchived} /> : <ArchivedButton id={id} onArchived={onArchived} />}
      </div>
    </div>
  );
};

export default NoteItem;
