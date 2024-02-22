export async function Weather({
  longitude,
  latitude,
}: {
  longitude?: number;
  latitude?: number;
}) {
  const weather: WeatherData = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${
      latitude ?? 55.6761
    }&longitude=${
      longitude ?? 12.5683
    }&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`
  ).then((res) => res.json());

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div>
      <h1 className="text-2xl">Weather</h1>
      <p>Temperature: {weather.current.temperature_2m}</p>
      <p>Wind speed: {weather.current.wind_speed_10m}</p>

      <h2 className="text-xl">Hourly</h2>

      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Temperature</th>
            <th>Relative humidity</th>
            <th>Wind speed</th>
          </tr>
        </thead>
        <tbody>
          {weather.hourly.time.map((time, index) => (
            <tr key={time}>
              <td>{time}</td>
              <td>{weather.hourly.temperature_2m[index]}</td>
              <td>{weather.hourly.relative_humidity_2m[index]}</td>
              <td>{weather.hourly.wind_speed_10m[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * Geo values for Copenhagen
 */
/*
const latitude = 52.52;
const longitude = 13.41;
*/

/**
 * JSX
 */
/*
<Weather latitude={latitude} longitude={longitude} />
*/

type WeatherData = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: {
    time: string;
    interval: string;
    temperature_2m: string;
    wind_speed_10m: string;
  };
  current: {
    time: string;
    interval: number;
    temperature_2m: number;
    wind_speed_10m: number;
  };
  hourly_units: {
    time: string;
    temperature_2m: string;
    relative_humidity_2m: string;
    wind_speed_10m: string;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
    relative_humidity_2m: number[];
    wind_speed_10m: number[];
  };
};
