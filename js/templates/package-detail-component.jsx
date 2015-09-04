  /** @jsx React.DOM */
    var ChargesRow = React.createClass({
        render: function() {
            return (
                <tr>
                    <td>{this.props.sub.type}</td>
                    <td>{this.props.sub.duration}</td>
                    <td>{this.props.sub.cost}</td>
                </tr>
                );
        }
    });
