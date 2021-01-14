import React, { Component } from "react";
import { useParams, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  addContainer,
  subtractQuantity,
  chooseVessel,
} from "../components/actions/containerAction";

class Container extends Component {
  incrementContainer = (id, ship) => {
    this.props.addContainer(id, ship);
  };
  decrementContainer = (id, ship) => {
    this.props.subtractQuantity(id, ship);
  };
  handleCheckBox = (e) => {
    this.props.chooseVessel(e);
  };

  render() {
    const { ship } = this.props.match.params;
    console.log(this.props.items);
    return (
      <div>
        <div className="hero-head">
          <div className="notification is-dark has-text-centered">
            <code>Ship Container Management</code>
          </div>
          {this.props.items.maxReached ? (
            <div class="notification is-danger is-light container">
              Max Weight Reached
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="hero-body container">
          <fieldset>
            <legend className="content title has-text-warning">
              Choose Your Types of Vessel
            </legend>
            {this.props.items.vesselTypes.map((vessel) => {
              return (
                <div key={vessel}>
                  <input
                    type="checkbox"
                    id={vessel}
                    name="containertype"
                    value={vessel}
                    onChange={(e) => {
                      this.handleCheckBox(e);
                    }}
                  />
                  <label htmlFor={vessel}>{vessel}</label>
                </div>
              );
            })}
          </fieldset>
        </div>

        <div className="column container is-multiline mt-3">
          <legend className="content title has-text-warning">
            Add Containers
          </legend>
          <legend className="content subtitle has-text-warning">
            Total Acceptable Weight: {ship} tons
          </legend>
          {this.props.items.items.map((container) => {
            return (
              <div
                className="card is-flex ml-2 mr-2 mt-2 is-justify-content-space-between"
                key={container.id}
              >
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-48x48">
                        <img src={container.image} alt="Placeholder" />
                      </figure>
                    </div>
                    <div className="media-content">
                      <div className="content subtitle has-text-grey-dark">
                        {container.name}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="field is-grouped is-grouped-right">
                  <button
                    className="button mt-5  is-link is-danger is-outlined is-rounded"
                    onClick={() => {
                      this.decrementContainer(container.id, ship);
                    }}
                    disabled={!container.isEnabled}
                  >
                    <span className="icon">
                      <i className="fas fa-minus-circle"></i>
                    </span>
                  </button>
                  <p className="content subtitle has-text-grey-dark">
                    Quantity: {container.quantity}
                  </p>
                  <button
                    className="button mt-5 mr-3 is-link is-outlined is-rounded"
                    onClick={() => {
                      this.incrementContainer(container.id, ship);
                    }}
                    disabled={!container.isEnabled}
                  >
                    <span className="icon">
                      <i className="fas fa-plus-circle"></i>
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addContainer: (id, ship) => {
      dispatch(addContainer(id, ship));
    },
    subtractQuantity: (id, ship) => {
      dispatch(subtractQuantity(id, ship));
    },
    chooseVessel: (e) => {
      dispatch(chooseVessel(e));
    },
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Container)
);
