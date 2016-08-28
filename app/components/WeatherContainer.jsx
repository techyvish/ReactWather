var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var OpenWeatherMap= require('OpenWeatherMap');

var WatherContainer = React.createClass({

    getInitialState:function () {
        return {
            isLoading:false
        }
    },

    onCityInput:function(obj){
        var that = this;



        this.setState({isLoading: true});
        OpenWeatherMap.getTemp(obj.cityName).then(function (temp) {
            that.setState({
                cityName: obj.cityName,
                temprature: temp,
                isLoading:false
            })
        },function (errorMessage) {
            alert(errorMessage);
        });
    },

    render:function () {
        var { isLoading, cityName, temprature } = this.state;

        function renderMessage() {

            if (isLoading){
                return <h3>Fetching Weather</h3>
            }else if(cityName && temprature  ) {
               return <WeatherMessage cityName={cityName} temprature={temprature}/>
            }

        }

        return (
            <div>
                <WeatherForm onCityInput={this.onCityInput}/>
                {renderMessage()}
            </div>
        );
    }

});

module.exports = WatherContainer;