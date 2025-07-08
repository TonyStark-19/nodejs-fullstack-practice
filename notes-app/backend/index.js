// import express: sets up the server and handles routes
const express = require('express');

// import cors: allows your frontend (running on a different port) to access the backend
const cors = require('cors');

// To generate unique IDs
const { v4: uuidv4 } = require('uuid');

// Initialize express app
const app = express();
const PORT = 3001;

// Middleware
app.use(cors()); // Enable CORS to allow frontend access
app.use(express.json()); // Allow parsing JSON in request bodies

// In-memory notes array
let notes = [];

/* --------------------------
   📥 GET all notes
--------------------------- */
app.get('/api/notes', (req, res) => {
    res.json(notes);
});

/* --------------------------
   ➕ POST a new note
--------------------------- */
app.post('/api/notes', (req, res) => {
    const { title, content, date } = req.body;

    if (!title || !content || !date) {
        return res.status(400).json({ error: "Title, content, and date are required" });
    }

    const newNote = {
        id: uuidv4(), // Generate unique ID
        title,
        content,
        date
    };

    notes.push(newNote);
    res.status(201).json(newNote);
});

/* --------------------------
   ✏️ PUT (update) a note
--------------------------- */
app.put('/api/notes/:id', (req, res) => {
    const { id } = req.params;
    const { title, content, date } = req.body;

    const note = notes.find((n) => n.id === id);
    if (!note) {
        return res.status(404).json({ error: "Note not found" });
    }

    note.title = title || note.title;
    note.content = content || note.content;
    note.date = date || note.date;

    res.json(note);
});

/* --------------------------
   ❌ DELETE a note
--------------------------- */
app.delete('/api/notes/:id', (req, res) => {
    const { id } = req.params;
    const index = notes.findIndex((n) => n.id === id);

    if (index === -1) {
        return res.status(404).json({ error: "Note not found" });
    }

    notes.splice(index, 1);
    res.status(204).send();
});

/* --------------------------
   🚀 Start the server
--------------------------- */
app.listen(PORT, () => {
    console.log(`✅ Notes backend running at http://localhost:${PORT}`);
});