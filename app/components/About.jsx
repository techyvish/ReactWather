var React = require('react');

var About = React.createClass({

    render:function () {
        return (
            <div>
                <h3 className="text-centered"> About Component </h3>
                <p> This is weather app.</p>
            </div>
        );
    }

});

module.exports = About;