import { useEffect, useState } from "react";
import moment from 'moment-timezone'

const HomeSerivceComponent = ({
    children,
    navigation
}) => {
    const [currentTimeZone, setCurrentTimeZone] = useState(moment().utcOffset(offset));
    const [offset, setOffset] = useState('-05:00');
    const handleSliderChange = (value) => {
        const offsetHours = Math.floor(value);
        const offsetMinutes = (value - offsetHours) * 60;
        const offsetString = moment.utc().hours(offsetHours).minutes(offsetMinutes).format('HH:mm');
        setOffset(`+${offsetString}`);
    };
    const navigateToHome = () => {

    }

    return children({
        navigation,
        offset, 
        setOffset,
        handleSliderChange,
        currentTimeZone, 
        setCurrentTimeZone
    });
};


export default HomeSerivceComponent;