import React from "react";

export default class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      remainingTitleCharacters: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(e) {
    const inputTitle = e.target.value;
    const remainingTitleCharacters = 50 - inputTitle.length;
    this.setState(() => {
      return {
        title: inputTitle,
        remainingTitleCharacters,
      };
    });
  }
  onBodyChangeEventHandler(e) {
    this.setState(() => {
      return {
        body: e.target.value,
      };
    });
  }

  onSubmitEventHandler(e) {
    e.preventDefault();
    if (this.state.title.length <= 50) {
      this.props.addNote(this.state);
      this.setState({
        title: "",
        body: "",
        remainingTitleCharacters: 50,
      });
    } else {
      alert("Judul catatan tidak boleh lebih dari 50 karakter.");
    }
  }

  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitEventHandler}>
        <h2>Buat Catatan</h2>
        <span className="note-input__title__char-limit">Jumlah karakter tersisa: {this.state.remainingTitleCharacters}</span>
        <input id="title" className="note-input__title" type="text" placeholder="masukkan judul..." value={this.state.title} onChange={this.onTitleChangeEventHandler} />
        <textarea id="body" className="note-input__body" type="text" placeholder="tuliskan catatanmu disini..." value={this.state.body} onChange={this.onBodyChangeEventHandler}></textarea>
        <button type="submit">Buat</button>
      </form>
    );
  }
}
