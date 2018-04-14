var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function () {
        this.setState({
            counter: this.state.counter - 1
        })
    },
    
    render: function() {
        return React.createElement('div', {},
            React.createElement('span', {}, 'Licznik ' + this.state.counter),
            React.createElement('button', {onClick: this.increment}, '+1'),
            React.createElement('button', {onClick: this.decrement}, '-1')
            )
    }
});

var fewCounters = React.createClass({
    render: function () {
        return React.createElement('div', {}, 'Kilka liczników',
            React.createElement(Counter),
            React.createElement(Counter),
            React.createElement(Counter)
            )
    }
});

var element = React.createElement(fewCounters);
ReactDOM.render(element, document.getElementById('app'));