import React from "react";

class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      weather: null,
      location: { latitude: 0, longitude: 0 },
    };
  }
  componentDidMount() {
    const success = (res) => {
      let location = res.coords;
      this.setState({ location: location });
    };
    navigator.geolocation.getCurrentPosition(success);
  }
  pollWeather = async () => {
    let { latitude, longitude } = this.state.location;
    let response = await fetch(
      `api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=edd206c1dbf6a0c6b27ed3cd9ebc7429`
    );
    let weather = await response.json();
    this.setState({ weather: weather });
    console.log(weather);
  };
  render() {
    this.pollWeather();
    return <div>{this.state.weather}</div>;
  }
}
export default Weather;
