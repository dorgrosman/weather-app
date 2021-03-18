import axios from "axios";
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { setTemp } from "../store/actions/WeatherActions";

export default function GetWeather() {

    const [City, onChangeCity] = useState('Insert City Name');
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [date, setDate] = useState('')
    const [desc, setDesc] = useState('')
    const dispatch = useDispatch()
    const temp = useSelector(state => state.weather.temp)
    const dispatchSetTemp = (temp) => dispatch(setTemp(temp))

    const getWeatherData = (city, country) => {
        axios({
            method: 'GET',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=3743c534d32b18ece300ecfcfbdb0fab`,
        })
            .then((response) => {
                dispatchSetTemp(response.data.main.temp - 273.15)
                setCity(response.data.name)
                setCountry(response.data.sys.country)
                setDate(response.data.dt * 1000)
                setDesc(response.data.weather[0].main)
            }).catch((error) => {
                console.error(error);
            });
    }
    return (
        <View>
            <View style={styles.weather}>
                <Text style={{ fontSize: 30 }}>Weather in:</Text>
                <Text >City: {city} </Text>
                <Text >Country : {country} </Text>
                <Text >Temperature: {Math.round(temp * 100) / 100} °C</Text>
                <Text >Description : {desc} </Text>
                <Text >Time : {new Date(date).toUTCString()} </Text>
                <TextInput
                    style={{ height: 40, borderColor: 'black', borderWidth: 2, padding: 5 }}
                    onChangeText={text => onChangeCity(text)}
                    value={City}
                />
                <Button
                    title='Get Weather'
                    onPress={() => {
                        getWeatherData(City)
                    }}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    weather: {
        height: 250,
        width: 200,
        fontSize: 30,
    },
})