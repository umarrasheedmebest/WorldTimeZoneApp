import React, { useState } from "react";
import {
    Text,
    View,
    TextInput,
    Button,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import axios from "axios";
import moment from 'moment';

const SearchScreen = () => {
    const [searchText, setSearchText] = useState();
    const [timeData, setTimeData] = useState();
    const [error, setError] = useState();
    const predefinedData = [
        { label: 'New York', value: 'America/New_York', offset: '-05:00' },
        { label: 'London', value: 'Europe/London', offset: '+01:00' },
        { label: 'Tokyo', value: 'Asia/Tokyo', offset: '+09:00'},
        // Add more countries and cities as needed
    ];

    const fetchTimeData = async () => {
        try {
            const response = await axios.get(
                `http://worldtimeapi.org/api/timezone/${searchText}`
            );
            setTimeData(response.data);
            setError(null);
        } catch (error) {
            setError('Error fetching time data.');
            setTimeData(null);
        }
    };
    const renderTime = () => {
        if (error) {
            return <Text style={styles.errorText}>{error}</Text>;
        }
        if (timeData) {
            const { datetime, timezone } = timeData;
            const formattedTime = moment(datetime).format('MMMM Do YYYY, h:mm:ss a');
            return (
                <View>
                    <Text style={styles.timezoneText}>{timezone}</Text>
                    <Text style={styles.timeText}>{formattedTime}</Text>
                </View>
            );
        }
        return null;
    };
    const renderPredefinedData = () => {
        if (searchText === 0) return null;

        const filteredData = predefinedData.filter((item) =>
            item.label?.toLowerCase().includes(searchText?.toLowerCase())
        );

        return filteredData.map((item) => (
            <TouchableOpacity
                key={item.value}
                style={styles.predefinedItem}
                onPress={() => setSearchText(item.label)}
            >
                <Text>{item.label}</Text>
            </TouchableOpacity>
        ));
    };
    return (
        <View style={styles.container}>
            <View>
                <Text>Search Screen</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter a country or city"
                    value={searchText}
                    onChangeText={setSearchText}
                    autoCapitalize="none"
                    autoCompleteType="off"
                    autoCorrect={false}
                    spellCheck={false}
                    dataDetectorTypes="none"
                    selectTextOnFocus={true}
                />
                {renderPredefinedData()}
            </View>
            <Button title="Get Time" onPress={fetchTimeData} />
            {renderTime()}
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
    timezoneText: {
        fontSize: 18,
        marginBottom: 5,
    },
    timeText: {
        fontSize: 24,
    },
    predefinedItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
    },
});

export default SearchScreen;