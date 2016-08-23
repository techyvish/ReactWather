var React = require('react');
var NavigationBar = require('NavigationBar');

// {this.props.children} // This propety will be pushed down by ther react-router
// Read Grid foundation docs for more info.
// for small screen we defaulted to 12 columns.

var Main = React.createClass({

    render:function () {
        return (
          <div>
              <NavigationBar> </NavigationBar>
              <div className="row">
                  <div className="columns medium-6 large-4 small-centered">
                      {this.props.children}
                  </div>
              </div>
          </div>
        );
    }

});

module.exports = Main;