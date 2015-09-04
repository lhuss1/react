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

//"package": {
//    "subscriptions": [
//      {
//        "type": "tv",
//        "name": "Variety with Movies HD",
//        "cost": 50
//      },
//      {
//        "type": "talk",
//        "name": "Sky Talk Anytime",
//        "cost": 5
//      },
//      {
//        "type": "broadband",
//        "name": "Fibre Unlimited",
//        "cost": 16.4
//      }
//    ],
//    "total": 71.4
//  }