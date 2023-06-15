import { useEffect, useState } from "react";
import moment, { min } from 'moment-timezone'

const HomeSerivceComponent = ({
    children,
    navigation
}) => {
    const timezones = [
        { name: 'New York', offset: '-05:00' },
        { name: 'Los Angeles', offset: '-08:00' },
        { name: 'London', offset: '+01:00' },
        { name: 'Paris', offset: '+02:00' },
        { name: 'Tokyo', offset: '+09:00' },
        { name: 'Sydney', offset: '+10:00' },
        { name: 'Pakistan', offset: '+5:00' }
    ];


    const [currentTimeZone, setCurrentTimeZone] = useState(moment().utcOffset(offset));
    const [realTime, setRealTime] = useState(new Date().toLocaleTimeString());
    const [offset, setOffset] = useState('-05:00');
    // const [timeZones, setTimeZones] = useState(timeZones.map(({ name, offset }) => ({ name, offset })));
    const handleSliderChange = (value) => {
        const offsetHours = Math.floor(value);
        const offsetMinutes = (value - offsetHours) * 60;
        const offsetString = moment.utc().hours(offsetHours).minutes(offsetMinutes).format('HH:mm');
        setOffset(`+${offsetString}`);
        const date = new Date();
        // date.setSeconds(date.getSeconds() + value);
        date.setHours(date.getHours() + value);
        setRealTime(date.toLocaleTimeString());
        // const timedate = new Date(timeZones);
        // timedate.setHours(timedate.getHours() + value);
        // setTimeZones(timedate.toLocaleString());
    };
    // const updateTimeZones = timeZones.map(({ name, offset: oldOffset }) => {
    //     const offsetHours = Math.floor(value);
    //     const offsetMinutes = (value - offsetHours) * 60;
    //     const newOffset = moment.utc().hours(offsetHours).minutes(offsetMinutes).format('HH:mm')
    //     return {
    //         name,
            // offset: `+${newOffset}`,
    //     }
    // });
    // setTimeZones(updateTimeZones);
    // if (timeZones) {
    //     setTimeZones(`+${offsetString}`)
    // }
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
    // useEffect(()=>{
    //     setTimeZones(timezones);
    // }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            // setRealTime(new Date.toLocaleTimeString());
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
        setRealTime,
        timezones,
        // timeZones, 
        // setTimeZones,
        // updateTimeZones
    });
};


export default HomeSerivceComponent;