/** @jsx React.DOM */

var ChargesTable = React.createClass({
        render: function() {
            var rows = [];
            var lastCharge = null;

            this.props.details.forEach(function(charge) {
                rows.push(<ChargesRow charge={charge} key={charge.name} />);
                lastCharge = charge.called;
            });

            return (
                <div className="charges-table-container">
                    <table className="table table-condensed table-striped">
                        <thead>
                            <tr>
                                <th>Called</th>
                                <th>Duration</th>
                                <th>Cost</th>
                            </tr>
                        </thead>
                        <tbody>{rows}</tbody>
                    </table>
                </div>

                );
        }
    });


  