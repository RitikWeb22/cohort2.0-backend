import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  // 1. Fetching data - Isse function ke bahar rakha hai taaki har jagah use ho sake
  function FetchingNote() {
    axios.get("http://localhost:3000/api/notes").then((res) => {
      setNotes(res.data.note || res.data);
    });
  }

  useEffect(() => {
    FetchingNote();
  }, []);

  // 2. Submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/notes", { title, description })
      .then(() => {
        setTitle(""); // Form clear karne ke liye
        setDescription("");
        FetchingNote(); // Data save hone ke BAAD fetch karega
      });
  };

  // 3. Delete note
  function deleteNote(noteId) {
    axios.delete(`http://localhost:3000/api/notes/${noteId}`).then(() => {
      FetchingNote(); // Delete hone ke BAAD fetch karega
    });
  }

  // 4. Update
  function startUpateding(editId) {
    axios
      .put(`http://localhost:3000/api/notes/${editId}`, { title, description })
      .then(() => {
        setTitle("");
        setDescription("");
        FetchingNote();
      });
  }

  return (
    <>
      <div className="main">
        <div className="heading">
          <h1>Personalized Notes</h1>
        </div>
        <div className="form">
          <form onSubmit={submitHandler}>
            <input
              name="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="note title"
            />
            <input
              name="description"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="note description"
            />
            <button type="submit">Creating Notes</button>
          </form>
        </div>
        <div className="notes">
          {notes.map((note, idx) => (
            <div className="note" key={note._id || idx}>
              <div className="actions">
                <button onClick={() => deleteNote(note._id)} className="btn">
                  delete
                </button>
                <button
                  onClick={() => startUpateding(note._id)}
                  className="btn"
                >
                  update
                </button>
              </div>
              <div className="content">
                <h1>{note.title}</h1>
                <hr />
                <p>{note.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
