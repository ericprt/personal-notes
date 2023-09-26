import React from "react";

const UnArchivedButton = ({ id, onUnArchived }) => {
  return (
    <button className="note-item__archive-button" onClick={() => onUnArchived(id)}>
      Pindahkan
    </button>
  );
};

export default UnArchivedButton;
