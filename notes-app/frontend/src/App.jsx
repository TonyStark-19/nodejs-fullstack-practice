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
  const [notes, setNotes] = useState([]); // set up notes
  const [loading, setLoading] = useState(true); // loading
  const [selectedNote, setSelectedNote] = useState(null); // selected note
  const [menuOpen, setMenuOpen] = useState(false); // menu toggle

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
    <>
      <Navbar setMenuOpen={setMenuOpen} />

      <div className="flex h-screen w-full overflow-hidden bg-black pt-17">
        <Left notes={notes} loading={loading} onNoteSelect={setSelectedNote} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

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
    </>
  )
}