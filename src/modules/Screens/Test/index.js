import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Slider from 'react-native-slider';
import moment from 'moment-timezone';

const Test = ({ }) => {
    const timezones = [
        { name: 'New York', offset: '-05:00' },
        { name: 'Los Angeles', offset: '-08:00' },
        { name: 'London', offset: '+01:00' },
        { name: 'Paris', offset: '+02:00' },
        { name: 'Tokyo', offset: '+09:00' },
        { name: 'Sydney', offset: '+10:00' },
        { name: 'Pakistan', offset: '+5:00' }
    ];
    const [realTime, setRealTime] = useState();
    const [timeMoment, setTimeMoment] = useState(); 
    useEffect(() => {
        var hours = new Date().getHours(); // current hours  
        var mins = new Date().getMinutes();// current minutes
        // var sec = new Date().getSeconds(); // current seconds

        setRealTime(
            hours + ':' + mins
        )
        
        var timeChange = moment().utcOffset('+5:00')
        .format('hh:mm a')
        setTimeMoment(timeChange)
    }, [])

    const [offset, setOffset] = useState('-05:00');
    const handleSliderChange = (value) => {
        const offsetHours = Math.floor(value);
        const offsetMinutes = (value - offsetHours) * 60;
        const offsetString = moment.utc().hours(offsetHours).minutes(offsetMinutes).format('HH:mm');
        setOffset(`+${offsetString}`);
    };


    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Slider
                style={{ width: '85%', marginBottom: 20 }}
                minimumValue={0}
                maximumValue={24}
                step={1}
                value={5}
                // onValueChange={(val) => setRealTime(val)}
                onValueChange={handleSliderChange}
            />
            <Text>
                Time: {realTime}
            </Text>
            {timezones.map(({ name, offset }) => (
                <Text key={name} style={{ fontSize: 20 }}>
                    {name}: {moment().utcOffset(offset).format('h:mm A')}
                </Text>
            ))}
        </View>
    );
};

export default Test;
