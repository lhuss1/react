  /** @jsx React.DOM */

    var ChargesRow = React.createClass({
        render: function() {
            return (
                <tr>
                    <td>{this.props.charge.called}</td>
                    <td>{this.props.charge.duration}</td>
                    <td>{this.props.charge.cost}</td>
                </tr>
                );
        }
    });
