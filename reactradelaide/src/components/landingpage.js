import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <div class="image">
              <img
                src="./images/radelaide.jpg"
                alt=""
                className="img"
              />

              <h1 style={{textShadow:"3px 3px 8px black"}}>Welcome to,</h1>
              <h2 style={{textShadow:"3px 3px 8px black"}}>
                For people living in Adelaide and Tourists looking for something
                to do in Adelaide.
              </h2>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
