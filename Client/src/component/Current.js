import React, { Component } from 'react';
import WeatherForm from './WeatherForm';
import WeatherInfo from './WeatherInfo';
import WeatherFCinfo from './WeatherFCinfo';


class Current extends Component {

    state = {
        temperature: '',
        description: '',
        humidity: '',
        wind_speed: 0,
        city: '',
        country: '',
        facecast: [],
        error: null
    };

    getWeather = (e) => {
        e.preventDefault();
        const { city, country } = e.target.elements;
        const cityValue = city.value;
        const countryValue = country.value;

        if (cityValue && countryValue) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    city: cityValue,
                    country: countryValue
                   
                })            
            };
            fetch('http://localhost:4000/api/weather/', requestOptions)
                .then(response => response.json())
                .then(data => this.setState({
                    temperature: data.main.temp,
                    description: data.weather[0].description,
                    humidity: data.main.humidity,
                    wind_speed: data.wind.speed,
                    city: data.name,
                    country: data.sys.country,
                    error: null
                }), []);

        } else {
            this.setState({
                error: 'Please enter a City and a Country or check if the city corresponds to the country.'
            });
        }
    }
    getWeatherFacecast =  (e) => {
        e.preventDefault();
        const { city, country } = e.target.elements;
        const cityValue = city.value;
        const countryValue = country.value;
        if (cityValue && countryValue) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    city: cityValue,
                    country: countryValue                    

                })
            };
            fetch('http://localhost:4000/api/weather/facecast', requestOptions)
                .then(response => response.json())
                .then(data => this.setState({
                    facecast: data,
                    error: null
                }),[]);

        } else {
            this.setState({
                error: 'Please enter a City and a Country or check if the city corresponds to the country.'
            });
        }
    }

    render() {
        return (
            <div className="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
                <div className="row">
                    <ol className="breadcrumb">
                        <li><a href="/"><svg className="glyph stroked home"></svg></a></li>
                        <li className="active">Imagenes</li>
                    </ol>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header"> Demo weather</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="panel panel-default">
                            <div className="panel-body">

                                <div id="sidebar-collapse" classNameName="col-sm-3 col-lg-2 sidebar">
                                    <form onSubmit={this._handleSubmit}>
                                        <div className="col-sm-6">
                                            <div className="card" >
                                                <div className="card-body">

                                                    <WeatherForm
                                                        getWeather={this.getWeather}
                                                    />

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="card " >
                                                <div className="card-body">
                                                    <WeatherInfo {...this.state} />
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-sm-6">
                                            <div className="card " >
                                                <div className="card-body">
                                                    <WeatherFCinfo getWeatherFacecast={this.getWeatherFacecast} />
                                                </div>
                                            </div>

                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default Current;