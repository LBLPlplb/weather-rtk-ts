import {api_key, base_url} from "../../utils/constants.ts";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import type {WeatherInfo, WeatherInfoResponse} from "../../utils/types";

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({baseUrl: base_url}),
    endpoints: builder => ({
        getWeatherByCity: builder.query<WeatherInfo,string>({
            query: (city: string) => `?q=${city}&appid=${api_key}&units=metric`,
            transformResponse: (data: WeatherInfoResponse) => ({
                city: data.name,
                country: data.sys.country,
                temp: data.main.temp,
                pressure: data.main.pressure,
                sunset: data.sys.sunset * 1000
            })
        })
    })
})

export const {useGetWeatherByCityQuery} = weatherApi;

// export const fetchWeather = createAsyncThunk(
//     'fetch/weather',
//     async (city: string) => {
//         const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
//         if (!response.ok) {
//             throw new Error('Enter correct city name');
//         }
//         const data = await response.json();
//         return {
//             city: data.name,
//             country: data.sys.country,
//             temp: data.main.temp,
//             pressure: data.main.pressure,
//             sunset: data.sys.sunset * 1000
//         }
//     }
// )