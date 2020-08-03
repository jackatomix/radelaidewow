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

class Kids extends Component {
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
                  "url(https://thebeachouse.com.au/wp-content/uploads/2017/07/Adelaide-family-friendly-attractions.jpg) center / cover",
              }}
            ></CardTitle>
            <CardText>Things for the kids to do.</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://thebeachouse.com.au/"
              >
                The Beach House
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
                  "url(https://assets.atdw-online.com.au/images/c846a3c3d48bbdeb4eb67a9e8f20c408.jpeg?width=900&height=506) center / cover",
              }}
            ></CardTitle>
            <CardText>Things for the kids to do.</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://www.westbeachminigolf.com/"
              >
                West Beach Mini Golf
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
                  "url(https://playandgo.com.au/wp-content/uploads/2019/11/20190224_161456-630x306.jpg) center / cover",
              }}
            ></CardTitle>
            <CardText>Things for the kids to do.</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://megaadventure.com.au/"
              >
                Mega Adventure
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
                  "url(https://www.toursa.com.au/wp-content/uploads/place/9000558_4.jpg) center / cover",
              }}
            ></CardTitle>
            <CardText>Things for the kids to do.</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://www.captainjolleys.com.au/"
              >
                Captain Jolleys
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
                  "url(https://static1.squarespace.com/static/576b784446c3c4053af58dbc/t/58e445141e5b6c3e98088b09/1491354910819/Logo1.png?format=1500w) center / cover",
              }}
            ></CardTitle>
            <CardText>Things for the kids to do.</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://www.barossabowland.com.au/"
              >
                Barossa Bowland
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
                  "url(https://media-cdn.tripadvisor.com/media/photo-s/12/ad/2e/94/caption.jpg) center / cover",
              }}
            ></CardTitle>
            <CardText>Things for the kids to do.</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="http://www.hahndorfsweets.com.au/"
              >
                Hahndorf Sweets
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
                background: "url() center / cover",
              }}
            ></CardTitle>
            <CardText>Things for the kids to do.</CardText>
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
          <Tab>The Beach House</Tab>
          <Tab>West Beach Mini Golf</Tab>
          <Tab>Mega Adventure</Tab>
          <Tab>Captain Jolleys</Tab>
          <Tab>Barossa Bowland</Tab>
          <Tab>Hahndorf Sweets</Tab>
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

export default Kids;
