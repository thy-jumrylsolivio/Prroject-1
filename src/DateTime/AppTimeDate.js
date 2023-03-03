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
    const dateString = date.toLocaleDateString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    const timeString = date.toLocaleTimeString('en-US', {
      hour12: false,
    });
    return `${dateString}/${timeString}`;
  };

if (firstLogTime){
    console.log(formatDate(firstLogTime))
}
}

export default AppTimeDate;
