import { CurrentConditions } from "./display/current-conditions"
import { WeatherData } from "./weather-data"

class WeatherStation {
    main() {
        const weatherData = new WeatherData()
        new CurrentConditions(weatherData)
        weatherData.setMeasurements(60, 32, 32.2)
        weatherData.setMeasurements(20, 10, 40.2)
    }
}

const app = new WeatherStation()
app.main()