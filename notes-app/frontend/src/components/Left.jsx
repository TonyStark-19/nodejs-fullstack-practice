// Left bar component
export function Left({ notes, loading, onNoteSelect }) {
    return (
        <div className="bg-black w-96 h-full py-4 pt-5 scrollbar-transparent text-white
        border-r-2 border-white overflow-y-auto">
            <div className="font-semibold text-xl pb-5 uppercase px-3">List of Saved Notes</div>

            {loading ? (
                <div className="text-xl">Loading notes...</div>
            ) : notes.length === 0 ? (
                <>
                    <div className="text-xl px-3">No notes found :(</div>
                    <div className="text-xl px-3 pt-3">Try creating and saving some notes and see this list again!</div>
                </>
            ) : (
                notes.map((note) => (
                    <div
                        key={note.id}
                        className="w-80 mb-4 p-2 pl-3 border rounded-r-xl text-white border-white hover:bg-[#111] cursor-pointer"
                        onClick={() => onNoteSelect(note)}
                    >
                        <div className="text-lg font-bold">{note.title}</div>
                        <div className="text-sm">{note.date}</div>
                    </div>
                ))
            )}
        </div>
    );
}