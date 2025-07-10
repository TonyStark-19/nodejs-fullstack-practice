// Left bar component
export function Left({ notes, loading, onNoteSelect, menuOpen, setMenuOpen }) {
    return (
        <div className={`w-96 h-full overflow-y-auto py-4 scrollbar-transparent
        border-r border-white bg-black text-white
        max-lg:fixed max-lg:w-full max-lg:top-18 max-lg:z-50 max-lg:pb-14 max-lg:transition-transform max-lg:duration-300
        max-lg:pr-8
        ${menuOpen ? "max-lg:translate-x-0" : "max-lg:-translate-x-full"}`}>
            <div className="font-semibold text-xl pb-5 uppercase px-3">List of Saved Notes</div>

            {loading ? (
                <div className="text-xl">Loading notes...</div>
            ) : notes.length === 0 ? (
                <>
                    <div className="text-xl px-3">No notes found : (</div>
                    <div className="text-xl px-3 pt-3">Try creating and saving some notes and see this list again!</div>
                </>
            ) : (
                notes.map((note) => (
                    <div
                        key={note.id}
                        className="mb-4 p-2 pl-3 border rounded-r-xl cursor-pointer
                        text-white border-white hover:bg-[#111]
                        min-lg:w-80 max-lg:w-full"
                        onClick={() => onNoteSelect(note) & setMenuOpen(false)}
                    >
                        <div className="text-lg font-bold">{note.title}</div>
                        <div className="text-sm">{note.date}</div>
                    </div>
                ))
            )}
        </div>
    );
}