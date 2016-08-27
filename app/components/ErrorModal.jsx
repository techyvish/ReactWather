var React = require('react');

var ErrorModal = React.createClass({
    componentDidMount:function() {
        var modal = new Foundation.reveal($('error-modal'));
        modal.open();
    },

    render:function () {
        return (
            <div className="reveal tiny text-center" id="error-modal" data-reveal>
                <h4>Title</h4>
                <p>Error</p>
                <button className="button hollow" data-close>Okay</button>
            </div>
        );
    }

});

module.exports = ErrorModal;