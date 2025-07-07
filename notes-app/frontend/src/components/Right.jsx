// Right column component
export function Right() {
    return (
        <div className="text-[#CFFFE2] flex-1 h-full pt-25 px-10">
            <input
                type="text" placeholder="Title of your note:" id="title"
                className="text-5xl font-semibold outline-none w-full h-12"></input>

            <div className="flex flex-row pt-4 gap-2">
                <div className="text-2xl font-semibold">{GetDate()} | </div>
                <div className="text-2xl font-semibold">0 Characters</div>
            </div>
            <p contentEditable='true' className="text-3xl w-full h-full outline-none pt-4"></p>
        </div>
    )
}

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