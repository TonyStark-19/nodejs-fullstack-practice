// import use effect, use state and use ref
import { useEffect, useState, useRef } from "react";

// import axios for http requests
import axios from "axios";

// Right column component
export function Right({ selectedNote, setSelectedNote, addNewNote, updateNote, removeNote }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [saving, setSaving] = useState(false);
    const contentRef = useRef();

    // When selectedNote changes, load it into the form
    useEffect(() => {
        if (selectedNote) {
            setTitle(selectedNote.title);
            setContent(selectedNote.content);

            // Safely set contentEditable DOM text
            if (contentRef.current) {
                contentRef.current.innerText = selectedNote.content;
            }
        }
        else {
            setTitle("");
            setContent("");
            if (contentRef.current) {
                contentRef.current.innerText = "";
            }
        }
    }, [selectedNote]);

    // get date function
    function GetDate() {
        const today = new Date();

        // weekdays
        const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        // months
        const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August",
            "September", "October", "November", "December"];

        const weekday = weekDays[today.getDay()];
        const day = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
        const month = allMonths[today.getMonth()];

        // return date format
        return `${weekday}, ${day} ${month}`;
    }

    // delete note
    const deleteNote = () => {
        if (!selectedNote) return;

        const confirmDelete = window.confirm("Are you sure you want to delete this note?");
        if (!confirmDelete) return;

        axios.delete(`http://localhost:3001/api/notes/${selectedNote.id}`)
            .then(() => {
                // Update UI: clear editor + remove from list
                removeNote(selectedNote.id);
                setSelectedNote(null);
                setTitle("");
                setContent("");
                if (contentRef.current) {
                    contentRef.current.innerText = "";
                }
            })
            .catch(err => console.error("Error deleting note:", err));
    };

    // Save Note Functions
    const saveNote = () => {
        if (!title.trim() || !content.trim()) {
            alert("Title and content cannot be empty.");
            return;
        }

        setSaving(true);

        const note = {
            title,
            content,
            date: GetDate()
        };

        const resetFields = () => {
            setTitle("");
            setContent("");
            contentRef.current.innerText = "";
        };

        if (selectedNote) {
            // Update existing note
            axios.put(`http://localhost:3001/api/notes/${selectedNote.id}`, note)
                .then((res) => {
                    updateNote(res.data);
                    setSelectedNote(null);
                    resetFields();
                })
                .catch((err) => {
                    console.error("Error updating note:", err);
                })
                .finally(() => setSaving(false));
        } else {
            // Create new note
            axios.post("http://localhost:3001/api/notes", note)
                .then((res) => {
                    addNewNote(res.data);
                    resetFields();
                })
                .catch((err) => {
                    console.error("Error creating note:", err);
                })
                .finally(() => setSaving(false));
        }
    };

    return (
        <div className="text-white flex-1 h-full p-10">
            <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                    <input
                        type="text"
                        placeholder="Title of your note:"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="text-5xl font-semibold outline-none w-full h-16 bg-transparent"
                    />

                    <div className="flex flex-row pt-4 gap-2">
                        <div className="text-xl font-semibold">{GetDate()} | </div>
                        <div className="text-xl font-semibold">{content.length} Characters</div>
                    </div>
                </div>

                <div className="flex flex-row gap-2">
                    <button
                        onClick={saveNote}
                        disabled={saving}
                        className="mt-4 px-4 py-2 h-11 bg-transparent text-white border-2 border-white font-semibold rounded-xl hover:bg-[#111] transition cursor-pointer"
                    >
                        {saving ? "Saving..." : selectedNote ? "Update Note" : "Save Note"}
                    </button>

                    {selectedNote && (
                        <button
                            onClick={deleteNote}
                            className="mt-4 px-4 py-2 h-11 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition"
                        >
                            Delete Note
                        </button>
                    )}
                </div>

            </div>

            <p
                ref={contentRef}
                contentEditable='true'
                onInput={(e) => setContent(e.target.innerText)}
                className="text-2xl w-full min-h-100 outline-none pt-4 whitespace-pre-wrap"
            />
        </div>
    );
}