import { Observer } from './interface/observer'
import { Subject } from './interface/subject'

export class WeatherData implements Subject {
    private observers: Observer[] = []
    private temperature: number = 0
    private humidity:number = 0 
    private pressure:number = 0

    registerObserver(observer: Observer): void {
        this.observers.push(observer)
    }
    removeObserver(observer: Observer): void {
        this.observers = this.observers.filter(item => item !== observer)
    }
    notifyObservers(): void {
        this.observers.map(observer => {
            observer.update()
        })
    }
    measurementsChanged() {
        this.notifyObservers()
    }
    setMeasurements(temp: number, humidity: number, pressure: number): void {
        this.temperature = temp
        this.humidity = humidity
        this.pressure = pressure
        this.measurementsChanged()
    }
    getTemperature(): number {
        return this.temperature
    }
    getHumidity(): number {
        return this.humidity
    }
    getPressure(): number {
        return  this.pressure
    }
}