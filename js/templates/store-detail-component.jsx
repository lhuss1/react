  /** @jsx React.DOM */
    var StoresRow = React.createClass({
        render: function() {
            return (
                <tr>
                    <td>{this.props.stores.type}</td>
                    <td>{this.props.stores.title}</td>
                    <td>{this.props.stores.cost}</td>
                </tr>
                );
        }
    });