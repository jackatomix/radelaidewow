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

class Holiday extends Component {
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
                background:
                  "url(https://lh3.googleusercontent.com/proxy/cw53TiRxA8TMnGeBZmTBvNqlopx8tbcLS0us6V-tm-c2PC41HMcNbKndYJ3jtZNTtKiZ-9djjbStm9mfH2xgxls8OD5ViAABNkseozdnkD9ipUDM) center / cover",
              }}
            ></CardTitle>
            <CardText>Get away to Victor Harbor.</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://encountervictorharbor.com.au/"
              >
                Victor Harbor
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
                background:
                  "url(https://southaustralia.com/media/onsldwmc/remarkable-rocks-kangaroo-island-teaser.jpg) center / cover",
              }}
            ></CardTitle>
            <CardText>Kangaroo Island holiday.</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://www.booking.com/region/au/kangaroo-island.en.html?aid=383259;label=kangaroo-island-iJ_33KcgmE8e0iW2AscSLQS411492128791:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-133528650:lp1000422:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YRlijhKLEMjJLyONwTyX95c;ws=&gclid=EAIaIQobChMI6--u6d_b6gIVEiQrCh3l6wkFEAAYASAAEgL_hPD_BwE"
              >
                KI Holiday
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
                  "url(https://q-cf.bstatic.com/images/hotel/max1024x768/103/103093892.jpg) center / cover",
              }}
            ></CardTitle>
            <CardText>Barossa Hoilday.</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://www.big4.com.au/caravan-parks/sa/barossa/barossa-tourist-park?gclid=EAIaIQobChMIzujNreDb6gIVgQsrCh0pNwuaEAAYASAAEgLY2fD_BwE"
              >
                BIG 4
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
                  "url(https://rdamr.com.au/wp-content/uploads/2019/04/54434556_2366483683385131_1304475021988593664_o-1.jpg) center / cover",
              }}
            ></CardTitle>
            <CardText>Murray River holiday on the river.</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://murrayriverhouseboats.com.au/?gclid=EAIaIQobChMIqtOnnuHb6gIVxH0rCh0hTgtwEAAYAiAAEgIXAvD_BwE"
              >
                Murray River
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
                background:
                  "url(https://r-cf.bstatic.com/images/hotel/max500/119/119596976.jpg) center / cover",
              }}
            ></CardTitle>
            <CardText>Berri holiday park.</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://www.berriholidaypark.com.au/"
              >
                Berri
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
                background: "url() center / cover",
              }}
            ></CardTitle>
            <CardText>.</CardText>
            <CardActions border>
              <Button colored target="_blank" href=""></Button>
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
                background: "url() center / cover",
              }}
            ></CardTitle>
            <CardText>.</CardText>
            <CardActions border>
              <Button colored target="_blank" href=""></Button>
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
          <Tab>Victor Harbor</Tab>
          <Tab>Kangaroo Island</Tab>
          <Tab>Barossa</Tab>
          <Tab>Murray River</Tab>
          <Tab>Berri</Tab>
          <Tab></Tab>
          <Tab></Tab>
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

export default Holiday;
