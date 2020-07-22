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

class Videos extends Component {
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
                  "url(https://s2.reutersmedia.net/resources/r/?m=02&d=20200420&t=2&i=1515706161&w=640&fh=&fw=&ll=&pl=&sq=&r=LYNXMPEG3J0OB) center / cover",
              }}
            ></CardTitle>
            <CardText>Kangaroo in Adelaide CBD.</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://www.youtube.com/watch?v=mb5nw2sY0tY"
              >
                YouTube Video
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
                  "url(https://i.ytimg.com/vi/TFS6L6rUoWQ/maxresdefault.jpg) center / cover",
              }}
            ></CardTitle>
            <CardText>
              Various Skateboarders in Adelaide temp skate park.
            </CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://www.youtube.com/watch?v=Q9JzSs0d8s4"
              >
                Random Video
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
                  "url(https://live.staticflickr.com/6140/5933413189_843919c2e4_b.jpg) center / cover",
              }}
            ></CardTitle>
            <CardText>
              Old video of Danny from JMS, drifting his R33 in JMS.
            </CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://www.youtube.com/watch?v=21swlmewAb4"
              >
                Random Video
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
                  "url(https://resources.lions.com.au/photo-resources/2019/11/30/1c01641f-ba5a-4e00-8daa-b7f2c5141cf6/cWYIQbRS.png?width=1240) center / cover",
              }}
            ></CardTitle>
            <CardText>Local football, best catches by the Crows.</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://www.youtube.com/watch?v=hW48OdUrl98"
              >
                Random Video
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
                  "url(https://i.ytimg.com/vi/0qSppQ8Z-8s/maxresdefault.jpg) center / cover",
              }}
            ></CardTitle>
            <CardText>SA golf competition.</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://www.youtube.com/watch?v=0qSppQ8Z-8s"
              >
                Random Video
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
          <Tab>Random Video</Tab>
          <Tab>Random Video</Tab>
          <Tab>Random Video</Tab>
          <Tab>Random Video</Tab>
          <Tab>Random Video</Tab>
          <Tab>Random Video</Tab>
          <Tab>Random Video</Tab>
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

export default Videos;
