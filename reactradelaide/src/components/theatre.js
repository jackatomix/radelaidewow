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

class Theatre extends Component {
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
                  "url(data:image/jpeg;base64,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) center / cover",
              }}
            ></CardTitle>
            <CardText>Find shows playing at Festival Center.</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://www.adelaidefestivalcentre.com.au/"
              >
                Adelaide Festival Center
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
                  "url(https://statetheatrecompany.com.au/wp-content/uploads/2019/12/STCSA-500x0-c-default.jpg) center / cover",
              }}
            ></CardTitle>
            <CardText>Find shows playing at State Theatre Company.</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://statetheatrecompany.com.au/"
              >
                State Theatre Company
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
                  "url(https://themusicnetwork.com/wp-content/uploads/majfinal_0718.png) center / cover",
              }}
            ></CardTitle>
            <CardText>Find shows playing at Her Majestys Theatre.</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://www.hermajestystheatre.org.au/#welcome"
              >
                Her Majestys Theatre
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
                  "url(https://cdn.newsapi.com.au/image/v1/bb265b037e7182d5b382279562392e2f?width=1024) center / cover",
              }}
            ></CardTitle>
            <CardText>Find shows playing at The Arts Theatre.</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://artstheatresa.com/whats-on"
              >
                The Arts Theatre
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
                  "url(https://lh3.googleusercontent.com/proxy/XTwrN0YJGThBBYt1Klm28jYB-V5F1bs24ESRDHoNfO5C27Pgggsstaq4JLjX6_lTRcVncNRUyAMTC8u9XgIEq6GJxe_kzyrzjCEL-yIY80M0oZtd4Xd2iWiKIS6_gfAY) center / cover",
              }}
            ></CardTitle>
            <CardText>Find shows playing at Star Theatres.</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="http://www.startheatres.com.au/"
              >
                Star Theatres
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
          <Tab>Adelaide Festival Center</Tab>
          <Tab>State Theatre Company</Tab>
          <Tab>Her Majestys Theatre</Tab>
          <Tab>The Arts Theatre</Tab>
          <Tab>Star Theatres</Tab>
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

export default Theatre;
