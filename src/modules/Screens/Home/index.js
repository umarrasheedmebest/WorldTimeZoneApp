import React from "react";
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Picker,
    Image
} from 'react-native';
import Slider from 'react-native-slider';
import moment from 'moment-timezone';
import { colors } from "../../globalStyle";
import CustomText from "../../Common/CustomText";

const HomeComponents = ({
    navigation,
    selectedTimeZone,
    currentTimeZone,
    offset,
    setOffset,
    setCurrentTimeZone,
    realTime,
    setRealTime,
    handleSliderChange
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
    // const handleSliderChange = (value) => {
    //     const offsetHours = Math.floor(value);
    //     const offsetMinutes = (value - offsetHours) * 60;
    //     const offsetString = moment.utc().hours(offsetHours).minutes(offsetMinutes).format('HH:mm');
    //     setOffset(`+${offsetString}`)
    // };
    // const handleSliderChange = (val) =>{
    // setOffset(val);
    // realTime(setRealTime(val));
    // };
    return (
        <View style={styles.Container}>
            {/* <Image source={require("../../../assets/bg image/bgImg.png")} style={styles.bgImg} /> */}
            <Text style={styles.MainText}>World Time Zone</Text>
            <Text>selectedTimeZone: {selectedTimeZone}</Text>
            <Text style={styles.time}>currentTime: {realTime}</Text>
            <View style={styles.slider}>
                <Slider
                    style={{ width: '85%', marginBottom: 20 }}
                    minimumValue={-12}
                    maximumValue={12}
                    step={0.5}
                    value={-13}
                    onValueChange={handleSliderChange}
                    // minimumTracktintcolor="Black"
                    // maximumTracktintcolor="Blue"
                />
            </View>
            {/* <View>
                <Picker
                    selectedValue={selectedCountry}
                    style={{ height: 50, width: '80%', marginBottom: 20 }}
                    onValueChange={handleCountryChange}
                >
                    {timezones.map((tz) => (
                        <Picker.Item key={tz.name} label={tz.name} value={tz.name} />
                    ))}
                </Picker>
            </View> */}

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

        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,

    },
    MainText: {
        fontSize: 21,
        textAlign: 'center',
        color: colors.black,
    },
    TimeText: {
        fontSize: 20,
        color: '#000',
        textAlign: 'center',
        borderWidth: 0.5,
        borderColor: '#a4d9f5',
        margin: 5
    },
    slider: {
        alignItems: 'center',
    },
    bgImg: {
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
    time: {
        fontSize: 21,
        color: colors.black
    }
});

export default HomeComponents;