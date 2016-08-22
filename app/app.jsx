var ReactDOM = require('react-dom');
var React = require('react');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

var { Route, Router, IndexRoute, hashHistory } = require('react-router'); // Object destructing syntex

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="about" component={About}/>
            <Route path="examples" component={Examples}/>
            <IndexRoute component={Weather}/>
        </Route>
    </Router>,
    document.getElementById('app')
)

