import { useState } from "react";
import axios from "axios";
function App() {
  const [notes, setNotes] = useState([
    {
      title: "test title",
      description: "test description",
    },
  ]);
  axios
    .get("http://localhost:3000/api/notes")
    .then((response) => {
      setNotes(response.data.notes);
      // setNotes(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  return (
    <>
      <h1 className="ourNotes">Our Notes</h1>
      <div className="notes">
        {notes.map((note, index) => {
          return (
            <div className="note" key={index}>
              <h1>{note.title}</h1>
              <p>{note.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
