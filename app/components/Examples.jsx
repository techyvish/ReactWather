var React = require('react');
var {Link} = require('react-router');

var Examples = React.createClass({

    render:function () {
        return (
            <div>
                <h3 className="text-centered"> Examples Component </h3>
                <p> Here are few examples to tryout.</p>
                <ol>
                    <li>
                        <Link to="/?location=Philadelphia">Philadelphia, PA</Link>
                    </li>
                    <li>
                        <Link to="/?location=Rio">Rio, Brazil</Link>
                    </li>
                </ol>
            </div>
        );
    }

});

module.exports = Examples;