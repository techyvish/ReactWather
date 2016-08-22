var React = require('react');
var NavigationBar = require('NavigationBar');

//   {this.props.children} // This propety will be pushed down by ther react-router

var Main = React.createClass({

    render:function () {
        return (
          <div>
              <NavigationBar> </NavigationBar>
              <h1>Main frame !!</h1>
              {this.props.children}
          </div>
        );
    }

});

module.exports = Main;