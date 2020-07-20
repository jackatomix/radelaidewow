import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardText,
  CardMenu,
  IconButton,
} from "react-mdl";

class Specialevents extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background: "url() center / cover",
              }}
            ></CardTitle>
            <CardText>Local football results and interstate games.</CardText>
            <CardActions border>
              <Button colored target="_blank" href="">
                FootBall
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background: "url() center / cover",
              }}
            ></CardTitle>
            <CardText>
              Local soccer results, interstate games and overseas updates.
            </CardText>
            <CardActions border>
              <Button colored target="_blank" href="">
                Soccer
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://slsa-collections.s3.amazonaws.com/e2/b7/e323-0dfd-5f18-9261-edebf3296360.jpg) center / cover",
              }}
            ></CardTitle>
            <CardText>
              Local club results, interstate competitions and overseas update of
              turnaments.
            </CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://www.google.com/search?q=golf+adelaide&rlz=1C1CHBF_enAU877AU877&oq=golf+ade&aqs=chrome.1.69i57j0l6j46.17661j0j7&sourceid=chrome&ie=UTF-8"
              >
                Golf
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://superloopadl500.com.au/files/11157_500club_promo_home.jpg) center / cover",
              }}
            ></CardTitle>
            <CardText>
              Local racing events at Mallala and The Bend as well as interstate
              and overseas racing.
            </CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://www.thebend.com.au/hot-laps?gclid=EAIaIQobChMIs5GthNnV6gIVDSUrCh0WAwbgEAAYASAAEgJmEPD_BwE"
              >
                Motor Racing
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
    if (this.state.activeTab === 4) {
      return (
        <div>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background: "url() center / cover",
              }}
            ></CardTitle>
            <CardText>Local results, interstate and overseas games.</CardText>
            <CardActions border>
              <Button colored target="_blank" href="">
                Hockey
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 5) {
      return (
        <div>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://www.weekendnotes.com/im/007/08/adrenaline-adelaide-south-australia-thrill-seeking71.jpg) center / cover",
              }}
            ></CardTitle>
            <CardText>
              A list of practice days at Mallala and The Bend.
            </CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://www.adrenaline.com.au/drifting/?gclid=EAIaIQobChMIosTUyNfV6gIV1gorCh233Af7EAAYASAAEgJo2PD_BwE"
              >
                Drifting
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 6) {
      return (
        <div>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://live.staticflickr.com/3769/11864624264_0c7eedd07b_b.jpg) center / cover",
              }}
            ></CardTitle>
            <CardText>A list of skate parks and any competitions.</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://www.google.com/search?rlz=1C1CHBF_enAU877AU877&q=skate+parks+in+adelaide&npsic=0&rflfq=1&rlha=0&rllag=-34861011,138548426,9682&tbm=lcl&ved=2ahUKEwia6-Ho1NXqAhWWdn0KHdODBZkQtgN6BAgLEAQ&rldoc=1#rlfi=hd:;si:;mv:[[-34.6956425,138.71488259999998],[-35.0460255,138.4659421]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:1"
              >
                Skateboarding
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>FootBall</Tab>
          <Tab>Soccer</Tab>
          <Tab>Golf</Tab>
          <Tab>Motor Racing</Tab>
          <Tab>Hockey</Tab>
          <Tab>Drifting</Tab>
          <Tab>Skateboarding</Tab>
        </Tabs>

        <Grid className="projects-grid">
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Specialevents;
