import { Observer } from '../interface/observer'
import { DisplayElement } from '../interface/display-element'
import { WeatherData } from '../weather-data'

export class CurrentConditions implements Observer, DisplayElement {
    private temperature:number = 0
    private humidity:number = 0 
    private pressure:number = 0
    
    constructor(
        private weatherData: WeatherData
    ) {
        this.weatherData.registerObserver(this)
    }

    update(): void {
        this.temperature = this.weatherData.getTemperature()
        this.humidity = this.weatherData.getHumidity()
        this.display()
    }

    display(): void {
        console.log(`CurrentConditions T:${this.temperature} H:${this.humidity} P:${this.pressure}`)
    }
}