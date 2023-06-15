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
import MainContainer from "../BottomTab/MainContainer";

const HomeComponents = ({
    navigation,
    selectedTimeZone,
    currentTimeZone,
    offset,
    setOffset,
    setCurrentTimeZone,
    realTime,
    setRealTime,
    handleSliderChange,
    timezones,

}) => {

    return (
        <View style={styles.Container}>
            <Text style={styles.MainText}>World Time Zone</Text>
            <Text style={styles.time}>currentTime: {realTime}</Text>
            <View style={styles.slider}>
                <Slider
                    style={{ width: '85%', marginBottom: 20 }}
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
    }
});

export default HomeComponents;