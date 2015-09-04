/** @jsx React.DOM */

var Statement = React.createClass({
        render: function() {
            var genDate = "";
            var dueDate = "";
            var fromDate = "";
            var toDate = "";

            if (this.props.details.statement !== undefined ) {
                    genDate = this.props.details.statement.generated;
                    dueDate = this.props.details.statement.due;
                    fromDate = this.props.details.statement.period.from;
                    toDate = this.props.details.statement.period.to;
            }


            return (
             <div className="div-container">
                <div className="panel panel-default">
                   <div className="panel-heading">
                     <h3 className="panel-title">Statement Details</h3>
                   </div>
                   <div className="panel-body">
                     <div className="statementDetails">Generated <span className="label label-default">{genDate}</span></div>
                     <div className="statementDetails">Due <span className="label label-primary">{dueDate}</span></div>
                     <div className="statementDetails">From <span className="label label-success">{fromDate}</span></div>
                     <div className="statementDetails">To <span className="label label-info">{toDate}</span></div>
                   </div>
                 </div>
             </div>
                );
        }
    });

var StoreTable = React.createClass({
        render: function() {
            var rows = [];
            var storeChargesTotal = "£";

            if (this.props.details.skyStore !== undefined) {
                 this.props.details.skyStore.rentals.forEach(function(rental) {
                            rental["type"] = "Rentals";
                            rows.push(<StoresRow stores={rental} key={rental.type} />);
                        });

                  //this.props.details.skyStore.rentals.buyAndKeep(function(bandkeep) {
                  //           bandkeep["type"] = "Buy and Keep";
                  //           rows.push(<StoresRow subscription={bandkeep} key={bandkeep.type} />);
                  //       });

                 storeChargesTotal += this.props.details.skyStore.total;
            }


            return (
                <div className="charges-table-container packageDetails">
                    <h3 className="padding-10"><small> Sky Store - {storeChargesTotal}</small></h3>
                    <table className="table table-condensed table-striped">
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Title</th>
                                <th>Cost</th>
                            </tr>
                        </thead>
                        <tbody>{rows}</tbody>
                    </table>
                </div>
                );
        }
    });

var PackageTable = React.createClass({
        render: function() {
            var rows = [];
            var subChargesTotal = "£";

            if (this.props.details.package !== undefined) {
                 this.props.details.package.subscriptions.forEach(function(sub) {
                            rows.push(<PackagesRow subscription={sub} key={sub.name} />);
                        });

                 subChargesTotal += this.props.details.package.total;
            }

            return (
                <div className="charges-table-container packageDetails">
                    <h3 className="padding-10"><small> Subscriptions - {subChargesTotal}</small></h3>
                    <table className="table table-condensed table-striped">
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Name</th>
                                <th>Cost</th>
                            </tr>
                        </thead>
                        <tbody>{rows}</tbody>
                    </table>
                </div>
                );
        }
    });

var ChargesTable = React.createClass({
        render: function() {
            var rows = [];
            var lastCharge = null;
            console.info(JSON.stringify(this.props.details, null, 2));
            var callChargesTotal = "£";

            if (this.props.details.callCharges !== undefined) {
                 this.props.details.callCharges.calls.forEach(function(charge) {
                            rows.push(<ChargesRow charge={charge} key={charge.name} />);
                            lastCharge = charge.called;
                        });
                 callChargesTotal += this.props.details.callCharges.total;
            }

            return (
                <div className="charges-table-container">
                    <h3 className="padding-10"><small> Call Charges - {callChargesTotal}</small></h3>
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


  var AppContainer = React.createClass({
          render: function() {
              var billTotal = "£";

              if (this.props.details.statement !== undefined ) {
                billTotal += this.props.details.total;
              }

              return (
                    <div>
                        <div className="page-header padding-30">
                          <h1> Sky <small> Bill - {billTotal}</small></h1>
                        </div>
                        <Statement details={this.props.details} />
                        <PackageTable details={this.props.details} />
                        <ChargesTable details={this.props.details} />
                        <StoreTable details={this.props.details} />

                    </div>
                  );
          }
      });

  var BillComponent = React.createClass({

        getInitialState: function() {
            return {
            };
        },

        componentDidMount: function() {
            $.get(this.props.source, function(result) {
                if (this.isMounted()) {
                    this.props.details = result;
                    this.setState();
                }
            }.bind(this));
        },

        render: function() {
            return (<AppContainer details={this.props.details} />);
        }
    });