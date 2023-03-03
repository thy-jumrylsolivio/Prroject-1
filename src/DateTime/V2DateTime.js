function V2DateTime() {


    const savedDateTime = localStorage.getItem('dateTime');

if (!savedDateTime) {
  const dateTime = {
    date: `${year}-${month}-${day}`,
    time: `${hours}:${minutes}:${seconds}`
  };
  localStorage.setItem('dateTime', JSON.stringify(dateTime));
  console.log(dateTime);
} else {
  const dateTime = JSON.parse(savedDateTime);
  console.log(dateTime);
}


}


 export default V2DateTime