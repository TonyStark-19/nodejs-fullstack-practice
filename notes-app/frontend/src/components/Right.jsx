// import use effect, use state and use ref
import { useEffect, useState, useRef } from "react";

// import axios for http requests
import axios from "axios";

// Right column component
export function Right({ selectedNote, setSelectedNote, addNewNote, updateNote }) {
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

    // Save Note Function
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
        <div className="text-[#CFFFE2] flex-1 h-full p-10">
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

            <p
                ref={contentRef}
                contentEditable='true'
                onInput={(e) => setContent(e.target.innerText)}
                className="text-2xl w-full min-h-100 outline-none pt-4 whitespace-pre-wrap"
            />

            <button
                onClick={saveNote}
                disabled={saving}
                className="mt-4 px-4 py-2 bg-[#CFFFE2] text-white font-semibold rounded hover:bg-[#aafcd2] transition"
            >
                {saving ? "Saving..." : selectedNote ? "Update Note" : "Save Note"}
            </button>
        </div>
    );
}