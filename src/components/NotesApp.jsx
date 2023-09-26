import React from "react";
import { getInitialData, showFormattedDate } from "../utils/data";
import NotesList from "./NotesList";
import NoteInput from "./NoteInput";
import Header from "./Header";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      archivedNotes: [],
      search: "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onDeleteArchivedHandler = this.onDeleteArchivedHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchivedNoteHandler = this.onArchivedNoteHandler.bind(this);
    this.onUnArchivedNoteHandler = this.onUnArchivedNoteHandler.bind(this);
    this.onSearchInputHandler = this.onSearchInputHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);

    this.setState({ notes });
  }

  onDeleteArchivedHandler(id) {
    const notes = this.state.archivedNotes.filter((note) => note.id !== id);

    this.setState({
      archivedNotes: notes,
    });
  }

  onAddNoteHandler({ title, body }) {
    const date = new Date();
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: showFormattedDate(date),
          },
        ],
      };
    });
  }

  onArchivedNoteHandler(id) {
    const { notes, archivedNotes } = this.state;
    const noteToArchive = notes.find((note) => note.id === id);

    if (noteToArchive) {
      noteToArchive.archived = true;
      this.setState({
        archivedNotes: [...archivedNotes, noteToArchive],
      });
      this.onDeleteHandler(id);
    }
  }

  onUnArchivedNoteHandler(id) {
    const { notes, archivedNotes } = this.state;
    const noteToUnarchive = archivedNotes.find((note) => note.id === id);

    if (noteToUnarchive) {
      noteToUnarchive.archived = false;
      this.setState({
        notes: [...notes, noteToUnarchive],
      });
      this.onDeleteArchivedHandler(id);
    }
  }

  onSearchInputHandler(e) {
    this.setState({
      search: e.target.value,
    });
  }

  render() {
    const filteredNotes = this.state.search ? this.state.notes.filter((note) => note.title.toLowerCase().includes(this.state.search.toLowerCase())) : this.state.notes;

    const filteredArchivedNotes = this.state.search ? this.state.archivedNotes.filter((note) => note.title.toLowerCase().includes(this.state.search.toLowerCase())) : this.state.archivedNotes;

    return (
      <>
        <Header searchKeyword={this.state.search} searchHandler={this.onSearchInputHandler} />
        <div className="note-app__body">
          <NoteInput addNote={this.onAddNoteHandler} />
          <h2>Catatan Aktif</h2>
          <NotesList notes={filteredNotes} onDelete={this.onDeleteHandler} onArchived={this.onArchivedNoteHandler} />
          <h2>Arsip Catatan</h2>
          <NotesList notes={filteredArchivedNotes} onDelete={this.onDeleteArchivedHandler} onUnArchived={this.onUnArchivedNoteHandler} />
        </div>
      </>
    );
  }
}

export default NotesApp;
