import React from "react";

const ArchivedButton = ({ id, onArchived }) => {
  return (
    <button className="note-item__archive-button" onClick={() => onArchived(id)}>
      Arsipkan
    </button>
  );
};

export default ArchivedButton;
