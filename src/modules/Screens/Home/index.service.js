import { useEffect, useState } from "react";
import moment from 'moment-timezone'

const HomeSerivceComponent = ({
    children,
    navigation
}) => {
    const [currentTimeZone, setCurrentTimeZone] = useState(moment().utcOffset(offset));
    const [realTime, setRealTime] = useState(new Date().toLocaleTimeString());
    const [offset, setOffset] = useState('-05:00');
    const handleSliderChange = (value) => {
        const offsetHours = Math.floor(value);
        const offsetMinutes = (value - offsetHours) * 60;
        const offsetString = moment.utc().hours(offsetHours).minutes(offsetMinutes).format('HH:mm');
        setOffset(`+${offsetString}`);
        const date = new Date();
        // date.setSeconds(date.getSeconds() + value);
        date.setHours(date.getHours() + value);
        setRealTime(date.toLocaleTimeString());
    };
    const navigateToHome = () => {

    }


    useEffect(() => {
        var hours = new Date().getHours();
        var mins = new Date().getMinutes();
        // var sec = new Date().getSeconds();

        setRealTime(
            hours + ':' + mins
        )

    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setRealTime(new Date.toLocaleTimeString());
        }, 1000)
        return () => {
            clearInterval(interval);
        }
    })

    return children({
        navigation,
        offset,
        setOffset,
        handleSliderChange,
        currentTimeZone,
        setCurrentTimeZone,
        realTime,
        setRealTime
    });
};


export default HomeSerivceComponent;