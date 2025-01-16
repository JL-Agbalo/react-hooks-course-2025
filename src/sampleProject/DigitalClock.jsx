import React, {useState, useEffect} from 'react';

function DigitalClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    function formatTime() {
        let hours = time.getHours();
        const minitus = time.getMinutes();
        const seconds = time.getSeconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minitus)}:${padZero(seconds)} ${ampm}`;
    }

    function padZero(number){
        return number < 10 ? '0' + number : number

    }

  return (
    <div>
        <div className='name'>
            <span>{formatTime()}</span>
        </div>
    </div>
  )
}

export default DigitalClock