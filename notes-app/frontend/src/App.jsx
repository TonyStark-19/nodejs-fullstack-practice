// import use effect and use state
import { useEffect, useState } from "react";

// import axios for http requests
import axios from "axios";

// import components
import { Navbar } from "./components/Navbar";
import { Left } from "./components/Left";
import { Right } from "./components/Right";

// Main app function
export default function App() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedNote, setSelectedNote] = useState(null);

  // for new node addition
  const addNewNote = (newNote) => {
    setNotes([newNote, ...notes]); // Add to top
  };

  // Fetch notes from backend when app mounts
  useEffect(() => {
    axios.get("http://localhost:3001/api/notes")
      .then((res) => {
        setNotes(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching notes:", err);
        setLoading(false);
      });
  }, []);

  // removeNote function
  const removeNote = (id) => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
  };

  return (
    <div className="h-screen">
      <Navbar />

      <div className="flex flex-row h-full w-full bg-black pt-17 overflow-hidden">
        <Left notes={notes} loading={loading} onNoteSelect={setSelectedNote} />

        <Right
          selectedNote={selectedNote}
          setSelectedNote={setSelectedNote}
          addNewNote={(note) => setNotes([note, ...notes])}
          updateNote={(updatedNote) =>
            setNotes(notes.map(n => n.id === updatedNote.id ? updatedNote : n))
          }
          removeNote={removeNote}
        />
      </div>
    </div>
  )
}