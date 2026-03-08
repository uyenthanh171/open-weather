export default interface CurrentWeatherRequest {
    lat: number,
    lon: number,
    mode?: 'xml' | 'html'
    units?: 'standard' | 'metric' | 'imperial'
    lang?: string
}
