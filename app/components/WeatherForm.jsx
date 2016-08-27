var React = require('react');

var WeatherForm = React.createClass({

    getInitialState:function () {
      return {
          cityName: '',
          temprature: 100
      }
    },

    onFormSubmit: function (e) {
        e.preventDefault();
        var cityName = this.refs.cityName.value;
        if ( typeof  cityName === 'string' && cityName.length > 0 ) {
            this.refs.cityName.value = '';
            var obj = {
                cityName : cityName,
                temprature : 50
            }
            this.props.onCityInput(obj);
        }
    },

    render:function () {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div>
                    <input type="text" ref="cityName" placeholder="Enter city name"/>
                </div>
                <div>
                    <button className="button expanded hollow">Get Weather</button>
                </div>
            </form>
        );
    }

});

module.exports = WeatherForm;