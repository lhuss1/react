  /** @jsx React.DOM */
    var PackagesRow = React.createClass({
        render: function() {
            return (
                <tr>
                    <td>{this.props.subscription.type}</td>
                    <td>{this.props.subscription.name}</td>
                    <td>{this.props.subscription.cost}</td>
                </tr>
                );
        }
    });