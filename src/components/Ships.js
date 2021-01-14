import React from "react";
import { NavLink } from "react-router-dom";

export const Ships = () => {
  return (
    <div>
      <div className="hero-head">
        <div className="notification is-dark has-text-centered">
          <code>Ship Container Management</code>
        </div>
        <legend className="content title has-text-warning">
          Please Choose Ship Type:
        </legend>
      </div>

      <div className="hero-body columns">
        <div className="tile is-ancestor">
          <NavLink
            className="tile is-parent is-vertical is-4"
            to="/addContainer/1000"
          >
            <article className="tile is-child notification is-primary">
              <p className="title">Small Ship (1000 Tons)</p>
              <figure className="image is-4by3">
                <img src="/images/SmallShip.jpg" alt="Small Ship" />
              </figure>
            </article>
          </NavLink>
          <NavLink
            className="tile is-parent is-vertical is-4"
            to="/addContainer/3000"
          >
            <article className="tile is-child notification is-warning">
              <p className="title">Medium Ship (3000 Tons)</p>
              <figure className="image is-4by3">
                <img src="/images/MediumShip.jpg" alt="Medium Ship" />
              </figure>
            </article>
          </NavLink>
          <NavLink
            className="tile is-parent is-vertical is-4"
            to="/addContainer/5000"
          >
            <article className="tile is-child notification is-danger">
              <p className="title">Large Ship (5000 Tons)</p>
              <figure className="image is-4by3">
                <img src="/images/LargeShip.jpg" alt="Large Ship" />
              </figure>
            </article>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
