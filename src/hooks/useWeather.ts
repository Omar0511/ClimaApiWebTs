import axios from "axios";
// import { SearchType, Weather } from "../types";
import { z } from "zod";
// import { object, string, number, Output, parse } from 'valibot';
import { SearchType } from "../types";
import { useMemo, useState } from "react";

// unknown: desconocido, representa un valor cuyo tipo no conoces en el tiempo de compilación (TYPE GUARDS)
// function isWeatherResponse(weather : unknown) : weather is Weather {
//   return (
//     Boolean(weather) &&
//     typeof weather === 'object' &&
//     typeof (weather as Weather).name === 'string' &&
//     typeof (weather as Weather).main.temp === 'number' &&
//     typeof (weather as Weather).main.temp_max === 'number' &&
//     typeof (weather as Weather).main.temp_min === 'number'
//   );
// }

// Valibot
// const WeatherSchema = object({
//   name: string(),
//   main: object({
//     temp: number(),
//     temp_max: number(),
//     temp_min: number(),
//   })
// });

// type Weather = Output<typeof WeatherSchema>;

// ZOD
const Weather = z.object({
  name: z.string(),
  main: z.object({
    temp: z.number(),
    temp_max: z.number(),
    temp_min: z.number(),
  })
});

const initialState = {
  name: "",
  main: {
    temp: 0,
    temp_max: 0,
    temp_min: 0,
  },
};

export type Weather = z.infer<typeof Weather>

export default function useWeather() {
  // const [weather, setWeather] = useState<Weather>({
  //   name: '',
  //   main: {
  //     temp: 0,
  //     temp_max: 0,
  //     temp_min: 0
  //   }
  // });
  const [weather, setWeather] = useState<Weather>(initialState);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (search: SearchType) => {
    // console.log('Consultando...');

    // const appId = "24b6bad0cf51efb21e488f10ea0f2d2d";
    const appId = import.meta.env.VITE_API_KEY;

    setLoading(true);
    setWeather(initialState);

    try {
      // Geocoding API - const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}`;
      const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`;
      // console.log(geoUrl);

      const { data } = await axios(geoUrl);
      // console.log(data);

      const lat = data[0].lat;
      const lon = data[0].lon;

      // Current Weather Data - const watherURL = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`;
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;

      // Castear el TYPE
      // const { data: weatherResult } = await axios<Weather>(weatherUrl);
      // console.log(weatherResult);
      // console.log(weatherResult.main.temp);

      // Type Guardas
      // const { data: weatherResult } = await axios(weatherUrl);
      // const result = isWeatherResponse(weatherResult);
      // console.log(result);

      // if (result) {
      //   console.log(weatherResult.name);
      // }

      // Valibot
      // const { data: weatherResult } = await axios(weatherUrl);
      // const result = parse(WeatherSchema, weatherResult);
      // console.log(result);

      // if (result) {
      //   console.log(result.name);
      // }

      // ZOD
      const { data: weatherResult } = await axios(weatherUrl);
      const result = Weather.safeParse(weatherResult);
      // console.log(result);

      if (result.success) {
        // console.log(result.data.name);
        // console.log(result.data.main.temp);

        setWeather(result.data);
      }

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const hasWeatherData = useMemo(() => weather.name, [weather]);

  return {
    weather,
    loading,
    fetchWeather,
    hasWeatherData
  };
}
