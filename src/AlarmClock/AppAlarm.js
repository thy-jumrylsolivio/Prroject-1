function AppAlarm()  {
    const time = new Date();
    const day = time.toLocaleString("en-us", { weekday: "long" });
    const morning = time.getHours() >= 6 && time.getHours() <= 12;
    let dayMessage;

if (day.toLowerCase() === "monday") {
    dayMessage = `Happy ${day}`;
} else if (day.toLowerCase() === "tuesday") {
    dayMessage = `${day}, ti kitaa naman ta dason eh`;
} else if (day.toLowerCase() === "wednesday") {
    dayMessage = `${day}, absent ka gapon ay?`;
} else if (day.toLowerCase() === "thursday") {
    dayMessage = `${day}, planning on dayoff`;
} else if (day.toLowerCase() === "friday") {
    dayMessage = `Stay Calm and keep Cool`;
} else {
    dayMessage = `Yes dayoff na`;
}
return (
    <div className="AppAlarm">
        <h1>
            {dayMessage}
        </h1>
        {morning ? <h2>Ti pamahaw lang singanan gina bantayan mo? siling konagid eh</h2> : 'bantay mahaw ay?'}
    </div>
)

}
export default AppAlarm