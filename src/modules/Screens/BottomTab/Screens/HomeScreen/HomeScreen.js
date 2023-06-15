import React ,{useState, useEffect}from "react";
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
// import Slider from 'react-native-slider';
import Slider from "@react-native-community/slider";
import moment from 'moment-timezone';
import { colors } from "../../../../globalStyle";
import CustomText from "../../../../Common/CustomText";


const HomeScreen = () => {
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
    
    useEffect(() => {
        var hours = new Date().getHours();
        var mins = new Date().getMinutes();
        // var sec = new Date().getSeconds();
    
        setRealTime(
            hours + ':' + mins
        )
    
    }, []);
    
    useEffect(() => {
        const interval = setInterval(() => {
            // setRealTime(new Date.toLocaleTimeString());
        }, 1000)
        return () => {
            clearInterval(interval);
        }
    });
    
    return (
        
        // <View>
        //     <Text>Home Screem</Text>
        // </View>
        <View style={styles.Container}>
            <Text style={styles.MainText}>World Time Zone</Text>
            <Text style={styles.time}>currentTime: {realTime}</Text>
            <View style={styles.slider}>
                <Slider
                 style={{ width: '85%', marginBottom: 20, height:40 }}
                 minimumValue={-12}
                 maximumValue={12}
                 step={0.5}
                 value={-13}
                 onValueChange={handleSliderChange}
                 />
            </View>

            {timezones.map(({ name, offset }) => (
                <Text key={name} style={styles.TimeText}>
                    {name}: {moment().utcOffset(offset).format('h:mm A')}
                </Text>
            ))}

            <TouchableOpacity
                onPress={() => navigation.navigate('Test')}
                style={{
                    width: 190,
                    height: 50,
                    backgroundColor: 'blue',
                    borderRadius: 5,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 60
                }}
            >
                <CustomText
                    title={'Test Screen'}
                    fontSize={24}
                    color='#fff'
                />
            </TouchableOpacity>
            {/* <MainContainer /> */}

        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#b5ebd2'

    },
    MainText: {
        fontSize: 21,
        textAlign: 'center',
        color: colors.black,
        margin: 20

    },
    TimeText: {
        fontSize: 20,
        color: '#000',
        textAlign: 'center',
        borderWidth: 0.8,
        margin: 5
    },
    slider: {
        alignItems: 'center',
    },

    time: {
        fontSize: 21,
        color: colors.black,
        textAlign: 'center',
        borderWidth: 0.5,
        borderRadius: 5,
    },
});

export default HomeScreen;