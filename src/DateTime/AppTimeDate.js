import { useEffect, useState } from 'react';

function AppTimeDate() {
  const [firstLogTime, setFirstLogTime] = useState(null);

  useEffect(() => {
    const storedFirstLogTime = localStorage.getItem('firstLogTime');
    if (storedFirstLogTime) {
      setFirstLogTime(new Date(storedFirstLogTime));
    } else {
      const now = new Date();
      setFirstLogTime(now);
      localStorage.setItem('firstLogTime', now.toISOString());
    }
  }, []);

  const formatDate = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: false,
      hour:'2-digit',
      minute:'2-digit',
      second:'2-digit'
  });
}

return (
    <div>
        {firstLogTime ? (
            <>
            {/* <T09ScreenShot firstLogTime={formatDate(firstLogTime)}/> */}
            {/* {console.log(formatDate(firstLogTime))} */}
            </>
        ): null }
    </div>
)

}
export default AppTimeDate;
