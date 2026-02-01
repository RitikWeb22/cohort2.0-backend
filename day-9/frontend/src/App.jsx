import { useEffect, useState } from "react";

import axios from "axios";
const App = () => {
  const [notes, setNotes] = useState([
    {
      title: "this is testing heading",
      description: "this is testing description",
    },
  ]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/notes").then((res) => {
      // console.log(res.data.notes);
      setNotes(res.data.notes);
    });
  }, []);

  return (
    <>
      <div className="notes">
        {notes.map((note, idx) => {
          return (
            <div className="note" key={idx}>
              <h1>{note.title}</h1>
              <p>{note.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
