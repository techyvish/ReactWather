var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var OpenWeatherMap= require('OpenWeatherMap');
var ErrorModal = require('ErrorModal');

var WatherContainer = React.createClass({

    getInitialState:function () {
        return {
            isLoading:false
        }
    },

    onCityInput:function(obj){
        var that = this;


        this.setState({
            isLoading:true,
            isError:undefined
        })
        this.setState({isLoading: true});
        OpenWeatherMap.getTemp(obj.cityName).then(function (temp) {
            that.setState({
                cityName: obj.cityName,
                temprature: temp,
                isLoading:false
            })
        },function (errorMessage) {
            that.setState({
                isLoading:false,
                isError:true
            })
        });
    },

    render:function () {
        var { isLoading, cityName, temprature, isError } = this.state;

        function renderMessage() {

            if (isLoading){
                return <h3>Fetching Weather</h3>
            }else if(cityName && temprature  ) {
               return <WeatherMessage cityName={cityName} temprature={temprature}/>
            }

        }

        function  renderError() {
            if ( isError ){
                return (
                    <ErrorModal title="Search Error" message="Can't find the city"/>
                );
            }
        }

        return (
            <div>
                <WeatherForm onCityInput={this.onCityInput}/>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }

});

module.exports = WatherContainer;