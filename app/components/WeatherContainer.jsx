var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var OpenWeatherMap= require('OpenWeatherMap');
//var ErrorModal = require('ErrorModal');

var WatherContainer = React.createClass({

    getInitialState:function () {
        return {
            isLoading:false,
        }
    },

    onCityInput:function(obj){
        var that = this;

        this.setState( {
            isLoading: true,
            isError:undefined,
        });
        OpenWeatherMap.getTemp(obj.cityName).then(function (temp) {
            that.setState({
                cityName: obj.cityName,
                temprature: temp,
                isLoading:false
            })
        },function (errorMessage) {
            this.setState( {
                isLoading:false,
                isError:true,
            });
        });
    },

    render:function () {
        var { isLoading, cityName, temprature } = this.state;

        function renderMessage() {

            if (isLoading){
                return <h3 className="text-center">Fetching Weather...</h3>
            }else if(cityName && temprature  ) {
               return <WeatherMessage cityName={cityName} temprature={temprature}/>
            }

        }

        return (
            <div>
                <h1 className="text-center">Weather Component</h1>
                <WeatherForm onCityInput={this.onCityInput}/>
                {renderMessage()}
            </div>
        );
    }

});

module.exports = WatherContainer;