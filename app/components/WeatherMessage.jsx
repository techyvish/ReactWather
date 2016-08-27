var React = require('react');

var WeatherMessage = React.createClass({

    render:function () {
        return (
            <h3 className="text-center"> Its currently {this.props.temprature} C in {this.props.cityName}. </h3>
        );
    }

});

module.exports = WeatherMessage;